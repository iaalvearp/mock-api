// --- FUNCIONES DE AYUDA (Helpers) ---

function obtenerCabecerasCORS(request) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers'),
  };
}

function crearRespuestaJSON(data, corsHeaders) {
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function crearRespuestaDeError(mensaje, status, corsHeaders) {
  return new Response(JSON.stringify({ error: mensaje }), {
    status: status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

// --- LÓGICA DE LA APLICACIÓN ---

async function manejarCreacionDeTarea(request, env, corsHeaders) {
  try {
    const nuevaTarea = await request.json();

    if (!nuevaTarea.descripcion) {
      return crearRespuestaDeError('La descripción de la tarea es obligatoria.', 400, corsHeaders);
    }

    const idTarea = `tarea_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const tareaAGuardar = {
      id: idTarea,
      descripcion: nuevaTarea.descripcion,
      estado: 'pendiente'
    };

    await env.TAREAS_KV.put(idTarea, JSON.stringify(tareaAGuardar));

    return crearRespuestaJSON(tareaAGuardar, corsHeaders);

  } catch (error) {
    return crearRespuestaDeError('Error al procesar la petición. Asegúrate de enviar un JSON válido.', 400, corsHeaders);
  }
}

/**
 * ¡NUEVA FUNCIÓN!
 * Maneja las peticiones para obtener la lista de todas las tareas.
 * @param {any} env - El entorno del Worker, que contiene nuestro KV.
 * @param {Object} corsHeaders - Las cabeceras CORS.
 * @returns {Promise<Response>} La respuesta con la lista de tareas.
 */
async function manejarListadoDeTareas(env, corsHeaders) {
  try {
    // 1. Pedimos a nuestra "pizarra" la lista de todas las "llaves" (IDs) que tiene guardadas.
    const listaDeLlaves = await env.TAREAS_KV.list();

    // 2. Si no hay llaves, devolvemos un arreglo vacío.
    if (listaDeLlaves.keys.length === 0) {
      return crearRespuestaJSON([], corsHeaders);
    }

    // 3. Creamos una lista de "promesas". Por cada llave, prometemos ir a buscar su valor.
    const promesasDeTareas = listaDeLlaves.keys.map(key => env.TAREAS_KV.get(key.name));

    // 4. Esperamos a que todas las promesas se cumplan a la vez (es más rápido).
    const valoresDeTareas = await Promise.all(promesasDeTareas);

    // 5. Los valores están como texto. Los convertimos de vuelta a objetos JSON.
    const tareas = valoresDeTareas.map(valor => JSON.parse(valor));

    // 6. Devolvemos la lista completa de tareas.
    return crearRespuestaJSON(tareas, corsHeaders);

  } catch (error) {
    console.error(error); // Guardamos el error real en los logs de Cloudflare
    return crearRespuestaDeError('Hubo un error al obtener las tareas.', 500, corsHeaders);
  }
}

// --- PUNTO DE ENTRADA PRINCIPAL (Router) ---

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = obtenerCabecerasCORS(request);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // --- RUTA DE LOGIN (Sin cambios) ---
    if (url.pathname.startsWith('/auth/login')) {
      if (request.method === 'POST') {
        const loginResponse = {
          tokens: { access_token: "TOKEN-FIJO-GENERADO-POR-MI-API-MOCK-EN-CLOUDFLARE" }
        };
        return crearRespuestaJSON(loginResponse, corsHeaders);
      }
    }

    // --- RUTA DE TAREAS ---
    if (url.pathname.startsWith('/tareas')) {
      // ¡LÓGICA ACTUALIZADA! SI ES UN GET, DEVOLVEMOS LA LISTA REAL
      if (request.method === 'GET') {
        return await manejarListadoDeTareas(env, corsHeaders);
      }

      // SI ES UN POST, CREAMOS UNA TAREA NUEVA
      if (request.method === 'POST') {
        return await manejarCreacionDeTarea(request, env, corsHeaders);
      }
    }

    // --- RUTA POR DEFECTO ---
    return new Response('API Mock activa. Usa /auth/login (POST) o /tareas (GET/POST).', {
      headers: corsHeaders,
    });
  },
};
/*

**Siguientes Pasos:**

1.  **Guarda** el archivo `index.js`.
2.  **Despliega** tus cambios:
    ```bash
    npm run deploy
    
*/

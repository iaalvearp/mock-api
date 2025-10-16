// api-mock/src/index.js
// --- DATOS DE CATÁLOGO (Extraídos de tu script SQL) ---
const CATALOGOS = {
  clientes: [
    { id: 1, nombre: 'cnel', nombre_completo: 'CORPORACION NACIONAL DE ELECTRICIDAD CNEL EP' }
  ],
  proyectos: [
    { id: 1, nombre: 'CORP SERVICIO DE SOPORTE MANTENIMIENTO Y GARANTÍA DE LOS EQUIPOS DE NETWORKING HUAWEI DE CNEL EP GTI', cliente_id: 1 }
  ],
  provincias: [
    { id: 9, nombre: 'GUAYAS' },
    { id: 13, nombre: 'MANABI' }
  ],
  ciudades: [
    { id: 1, nombre: 'MANTA', provincia_id: 13 },
    { id: 2, nombre: 'PORTOVIEJO', provincia_id: 13 },
    { id: 3, nombre: 'GUAYAQUIL', provincia_id: 9 },
    { id: 4, nombre: 'DURAN', provincia_id: 9 }
  ],
  unidades_negocio: [
    { id: 1, nombre: 'GUAYAS' },
    { id: 2, nombre: 'GUAYAS - LOS RIOS' },
    { id: 3, nombre: 'MANABI' }
  ],
  agencias: [
    { id: 1, nombre: 'AGENCIA GUAYAQUIL', ciudad_id: 3, unidad_negocio_id: 1 },
    { id: 2, nombre: 'AGENCIA GUAYACANES', ciudad_id: 3, unidad_negocio_id: 1 },
    { id: 3, nombre: 'AGENCIA DURAN', ciudad_id: 4, unidad_negocio_id: 2 },
    { id: 4, nombre: 'AGENCIA RECREO', ciudad_id: 4, unidad_negocio_id: 2 },
    { id: 5, nombre: 'SUBESTACION MANTA 1', ciudad_id: 1, unidad_negocio_id: 3 },
    { id: 6, nombre: 'EQUIPOS EN POSTE', ciudad_id: 1, unidad_negocio_id: 3 },
    { id: 7, nombre: 'AGENCIA PRIZA', ciudad_id: 2, unidad_negocio_id: 3 },
    { id: 8, nombre: 'AGENCIA PORTOVIEJO COMERCIAL', ciudad_id: 2, unidad_negocio_id: 3 }
  ],
  equipos: [
    { id: '21980105812SJ4600371', nombre: 'SWITCH CAPA 2', modelo: 'S5720-28X-LI-AC', caracteristicas: '(24 Ethernet 10/100/1000 ports)', agencia_id: 1 },
    { id: '210235G7J10K80001234', nombre: 'ROUTER PRINCIPAL', modelo: 'AR6120', caracteristicas: 'Router empresarial', agencia_id: 1 },
    { id: '21980107133GJ7000257', nombre: 'SWITCH CAPA 3', modelo: 'S5730-68C-SI-AC', caracteristicas: '(48 Ethernet ports, 4 10 Gig SFP+)', agencia_id: 3 },
    { id: '210211382810E8001895', nombre: 'ACCESS POINT', modelo: 'AP4050DN', caracteristicas: 'Wi-Fi 5', agencia_id: 5 },
    { id: '2102351TPA10K9000012', nombre: 'FIREWALL', modelo: 'USG6620', caracteristicas: 'Firewall de próxima generación', agencia_id: 5 }
  ],
  tecnicos: [
    { id: 101, nombre: 'Juan Perez' },
    { id: 102, nombre: 'Maria Lopez' }
  ]
};


// --- FUNCIONES DE AYUDA (Helpers) ---

function obtenerCabecerasCORS(request) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
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
    const idTarea = `tarea_${Date.now()}`;
    const tareaAGuardar = { id: idTarea, ...nuevaTarea, estado: 'Creado' };
    await env.TAREAS_KV.put(idTarea, JSON.stringify(tareaAGuardar));
    return crearRespuestaJSON(tareaAGuardar, corsHeaders);
  } catch (error) {
    return crearRespuestaDeError('Error al procesar la petición. Asegúrate de enviar un JSON válido.', 400, corsHeaders);
  }
}

async function manejarEdicionDeTarea(request, tareaId, env, corsHeaders) {
  try {
    const tareaExistenteJSON = await env.TAREAS_KV.get(tareaId);
    if (!tareaExistenteJSON) {
      return crearRespuestaDeError('La tarea que intenta editar no existe.', 404, corsHeaders);
    }
    const datosActualizados = await request.json();
    const tareaExistente = JSON.parse(tareaExistenteJSON);
    const tareaActualizada = { ...tareaExistente, ...datosActualizados, id: tareaId };
    await env.TAREAS_KV.put(tareaId, JSON.stringify(tareaActualizada));
    return crearRespuestaJSON(tareaActualizada, corsHeaders);
  } catch (error) {
    return crearRespuestaDeError('Error al procesar la petición de edición.', 400, corsHeaders);
  }
}

async function manejarEliminacionDeTarea(tareaId, env, corsHeaders) {
  try {
    await env.TAREAS_KV.delete(tareaId);
    return new Response(null, { status: 204, headers: corsHeaders });
  } catch (error) {
    return crearRespuestaDeError('Error al eliminar la tarea.', 500, corsHeaders);
  }
}


async function manejarListadoDeTareas(env, corsHeaders) {
  try {
    const listaDeLlaves = await env.TAREAS_KV.list({ prefix: 'tarea_' });
    if (listaDeLlaves.keys.length === 0) return crearRespuestaJSON([], corsHeaders);
    const promesas = listaDeLlaves.keys.map(key => env.TAREAS_KV.get(key.name));
    const valoresJson = await Promise.all(promesas);

    // ¡CORRECCIÓN! Filtramos cualquier valor que sea null antes de intentar convertirlo.
    const tareas = valoresJson
      .filter(valor => valor !== null)
      .map(valor => JSON.parse(valor));

    return crearRespuestaJSON(tareas, corsHeaders);
  } catch (error) {
    return crearRespuestaDeError('Hubo un error al obtener las tareas.', 500, corsHeaders);
  }
}

async function manejarCargaDeCatalogos(env, corsHeaders) {
  try {
    const promesasDeCarga = Object.entries(CATALOGOS).map(([nombre, datos]) => {
      const llave = `catalog:${nombre}`;
      return env.TAREAS_KV.put(llave, JSON.stringify(datos));
    });
    await Promise.all(promesasDeCarga);
    return crearRespuestaJSON({ status: 'ok', mensaje: `Se cargaron ${promesasDeCarga.length} catálogos.` }, corsHeaders);
  } catch (error) {
    return crearRespuestaDeError('Error al cargar los catálogos en KV.', 500, corsHeaders);
  }
}

async function manejarPeticionDeCatalogo(nombreCatalogo, url, env, corsHeaders) {
  const llave = `catalog:${nombreCatalogo}`;
  const catalogoJSON = await env.TAREAS_KV.get(llave);
  if (!catalogoJSON) {
    return crearRespuestaDeError(`El catálogo '${nombreCatalogo}' no fue encontrado.`, 404, corsHeaders);
  }
  let catalogo = JSON.parse(catalogoJSON);

  const params = url.searchParams;
  if (nombreCatalogo === 'proyectos' && params.has('cliente_id')) {
    catalogo = catalogo.filter(item => item.cliente_id == params.get('cliente_id'));
  }
  if (nombreCatalogo === 'ciudades' && params.has('provincia_id')) {
    catalogo = catalogo.filter(item => item.provincia_id == params.get('provincia_id'));
  }
  if (nombreCatalogo === 'agencias' && params.has('ciudad_id')) {
    catalogo = catalogo.filter(item => item.ciudad_id == params.get('ciudad_id'));
  }
  if (nombreCatalogo === 'equipos' && params.has('agencia_id')) {
    catalogo = catalogo.filter(item => item.agencia_id == params.get('agencia_id'));
  }
  return crearRespuestaJSON(catalogo, corsHeaders);
}


// --- PUNTO DE ENTRADA PRINCIPAL (Router) ---
export default {
  async fetch(request, env, ctx) {
    const corsHeaders = obtenerCabecerasCORS(request);
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    const url = new URL(request.url);
    const path = url.pathname;

    if (path.startsWith('/auth/login')) {
      if (request.method === 'POST') {
        const loginResponse = { tokens: { access_token: "TOKEN-FIJO-GENERADO-POR-MI-API-MOCK-EN-CLOUDFLARE" } };
        return crearRespuestaJSON(loginResponse, corsHeaders);
      }
    }

    const matchTareaConId = path.match(/^\/tareas\/(tarea_.*)/);
    if (matchTareaConId) {
      const tareaId = matchTareaConId[1];
      if (request.method === 'PUT') {
        return await manejarEdicionDeTarea(request, tareaId, env, corsHeaders);
      }
      if (request.method === 'DELETE') {
        return await manejarEliminacionDeTarea(tareaId, env, corsHeaders);
      }
    }

    if (path.startsWith('/tareas')) {
      if (request.method === 'GET') return await manejarListadoDeTareas(env, corsHeaders);
      if (request.method === 'POST') return await manejarCreacionDeTarea(request, env, corsHeaders);
    }

    if (path === '/seed-catalogs') {
      return await manejarCargaDeCatalogos(env, corsHeaders);
    }

    const matchCatalogo = path.match(/^\/(clientes|proyectos|provincias|ciudades|unidades_negocio|agencias|equipos|tecnicos)/);
    if (matchCatalogo) {
      const nombreCatalogo = matchCatalogo[1];
      return await manejarPeticionDeCatalogo(nombreCatalogo, url, env, corsHeaders);
    }

    return new Response('API Mock activa. Edición y eliminación disponibles.', { headers: corsHeaders });
  },
};


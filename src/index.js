
const CATALOGOS = {
  roles: [
    {
      id: 1,
      nombre: "Técnico Responsable"
    },
    {
      id: 2,
      nombre: "Supervisor"
    },
    {
      id: 3,
      nombre: "Administrador"
    }
  ],
  usuarios: [
    {
      id: 101,
      nombre: "Ivan Coronel",
      email: "ivan@creatic.com.ec",
      password: "123",
      rolId: 3
    },
    {
      id: 102,
      nombre: "Christian Vargas",
      email: "christian@creatic.com.ec",
      password: "123",
      rolId: 3
    },
    {
      id: 103,
      nombre: "Douglas Ayapata",
      email: "dayapata@creatic.com.ec",
      password: "123",
      rolId: 2
    },
    {
      id: 104,
      nombre: "Juan Carlos Viera",
      email: "viera.asesoria@gmail.com",
      password: "123",
      rolId: 1
    },
    {
      id: 105,
      nombre: "Christian Vargas",
      email: "christian@creatic.com.ec",
      password: "456",
      rolId: 1
    }
  ],
  clientes: [
    {
      id: 1,
      nombre: "cnel",
      nombreCompleto: "CORPORACION NACIONAL DE ELECTRICIDAD CNEL EP",
      proyectos: [
        {
          id: 1,
          nombre: "CORP SERVICIO DE SOPORTE MANTENIMIENTO Y GARANTÍA DE LOS EQUIPOS DE NETWORKING HUAWEI DE CNEL EP GTI"
        }
      ]
    }
  ],
  provincias: [
    {
      id: 2,
      nombre: "Bolívar"
    },
    {
      id: 7,
      nombre: "El Oro"
    },
    {
      id: 8,
      nombre: "Esmeraldas"
    },
    {
      id: 9,
      nombre: "Guayas"
    },
    {
      id: 12,
      nombre: "Los Ríos"
    },
    {
      id: 13,
      nombre: "Manabí"
    },
    {
      id: 21,
      nombre: "Sucumbíos"
    },
    {
      id: 23,
      nombre: "Santo Domingo"
    },
    {
      id: 24,
      nombre: "Santa Elena"
    }
  ],
  estados: [
    {
      id: 1,
      nombre: "pendiente"
    },
    {
      id: 2,
      nombre: "en progreso"
    },
    {
      id: 3,
      nombre: "completado"
    }
  ],
  unidadesNegocio: [
    { id: 1, nombre: "GUAYAS" },
    { id: 2, nombre: "GUAYAS - LOS RIOS" },
    { id: 3, nombre: "MANABI" }
  ],
  ubicacion: [
    {
      id: 9,
      provincia: "GUAYAS",
      ciudades: [
        {
          id: 3,
          nombre: "GUAYAQUIL",
          agencia: [
            {
              id: 1,
              nombre: "AGENCIA GUAYAQUIL",
              unidadNegocioId: 1
            },
            {
              id: 2,
              nombre: "AGENCIA GUAYACANES",
              unidadNegocioId: 1
            }
          ]
        },
        {
          id: 4,
          nombre: "DURAN",
          agencia: [
            {
              id: 1,
              nombre: "AGENCIA DURAN",
              unidadNegocioId: 2
            },
            {
              id: 2,
              nombre: "AGENCIA RECREO",
              unidadNegocioId: 2
            }
          ]
        }
      ]
    },
    {
      id: 13,
      provincia: "MANABI",
      ciudades: [
        {
          id: 1,
          nombre: "MANTA",
          agencia: [
            {
              id: 1,
              nombre: "SUBESTACION MANTA 1",
              unidadNegocioId: 3
            },
            {
              id: 2,
              nombre: "EQUIPOS EN POSTE",
              unidadNegocioId: 3
            }
          ]
        },
        {
          id: 2,
          nombre: "PORTOVIEJO",
          agencia: [
            {
              id: 1,
              nombre: "AGENCIA PRIZA",
              unidadNegocioId: 3
            },
            {
              id: 2,
              nombre: "AGENCIA PORTOVIEJO COMERCIAL",
              unidadNegocioId: 3
            }
          ]
        }
      ]
    }
  ],
  tiposEquipos: [
    {
      id: 1,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 9,
      ciudadId: 3,
      unidadNegocioId: 1,
      agenciaId: 1,
      equipos: [
        {
          id: "21980107133GJ7000257",
          nombre: "SWITCH CAPA 3",
          modelo: "S5730-68C-SI-AC",
          caracteristicas: "(48 Ethernet 10/100/1000 ports,4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600371",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 2,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 9,
      ciudadId: 3,
      unidadNegocioId: 1,
      agenciaId: 2,
      equipos: [
        {
          id: "21980105812SJ4600293",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600373",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 3,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 9,
      ciudadId: 4,
      unidadNegocioId: 2,
      agenciaId: 1,
      equipos: [
        {
          id: "21980105812SJ4600325",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 4,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 9,
      ciudadId: 4,
      unidadNegocioId: 2,
      agenciaId: 2,
      equipos: [
        {
          id: "21980105812SJ4600297",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 5,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 13,
      ciudadId: 1,
      unidadNegocioId: 3,
      agenciaId: 1,
      equipos: [
        {
          id: "21980105812SJ4600326",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600318",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 6,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 13,
      ciudadId: 1,
      unidadNegocioId: 3,
      agenciaId: 2,
      equipos: [
        {
          id: "21980105812SJ4600315",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 7,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 13,
      ciudadId: 2,
      unidadNegocioId: 3,
      agenciaId: 1,
      equipos: [
        {
          id: "21980107133GJ7000255",
          nombre: "SWITCH CAPA 3",
          modelo: "S5730-68C-SI-AC",
          caracteristicas: "(48 Ethernet 10/100/1000 ports,4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600336",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    },
    {
      id: 8,
      clienteId: 1,
      proyectoId: 1,
      provinciaId: 13,
      ciudadId: 2,
      unidadNegocioId: 3,
      agenciaId: 2,
      equipos: [
        {
          id: "21980105812SJ4600332",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600322",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600338",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        },
        {
          id: "21980105812SJ4600317",
          nombre: "SWITCH CAPA 2",
          modelo: "S5720-28X-LI-AC",
          caracteristicas: "(24 Ethernet 10/100/1000 ports, 4 10 Gig SFP+, AC 110/220V)",
          estadoId: 1
        }
      ]
    }
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
    const idTarea = `tarea_${crypto.randomUUID()}`;
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
        try {
          // 1. Leemos el email y password que envía el frontend
          const body = await request.json();
          const { email, password } = body;

          if (!email || !password) {
            return crearRespuestaDeError('Email y password son requeridos', 400, corsHeaders);
          }

          // 2. Buscamos al usuario en nuestros catálogos
          const user = CATALOGOS.usuarios.find(u => u.email === email && u.password === password);

          // 3. Si no existe, devolvemos un error de credenciales
          if (!user) {
            return crearRespuestaDeError('Credenciales incorrectas', 401, corsHeaders);
          }

          // 4. Si existe, armamos la respuesta que el frontend SÍ espera
          const loginResponse = {
            tokens: {
              access_token: `token-valido-para-${user.nombre.replace(' ', '-')}`
            },
            user: user // ¡Esta es la parte que faltaba!
          };

          return crearRespuestaJSON(loginResponse, corsHeaders);

        } catch (error) {
          return crearRespuestaDeError('Error procesando el login', 400, corsHeaders);
        }
      }
    }

    if (path === '/catalogs') {
      if (request.method === 'GET') {
        // Devuelve el objeto CATALOGOS completo definido al inicio de este script
        return crearRespuestaJSON(CATALOGOS, corsHeaders);
      }
    }

    if (path === '/catalogs') {
      if (request.method === 'GET') {
        // Devuelve el objeto CATALOGOS completo definido al inicio de este script
        return crearRespuestaJSON(CATALOGOS, corsHeaders);
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

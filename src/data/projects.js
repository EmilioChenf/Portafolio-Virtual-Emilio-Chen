export const projects = [
  {
    name: 'ChenToons',
    type: 'Proyecto academico full-stack',
    description:
      'Aplicacion web para explorar y administrar series animadas con frontend y backend separados. Incluye CRUD de series, personajes, episodios, ratings, subida de imagenes, filtros, paginacion y exportacion de datos.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Go', 'Fiber', 'PostgreSQL', 'Docker', 'API REST'],
    contribution:
      'Estructure la separacion frontend/backend, conecte la interfaz con la API mediante fetch, documente endpoints con Swagger y prepare ejecucion local con Docker Compose.',
    learning: {
      problem: 'Centralizar informacion de series animadas en una app administrable con datos relacionados.',
      challenge:
        'Coordinar frontend, API, PostgreSQL, uploads, ratings, filtros y paginacion sin mezclar responsabilidades.',
      solution:
        'Separe frontend y backend, cree endpoints REST en Go Fiber, documente con Swagger y use Docker Compose para levantar API y base de datos.',
      learned:
        'Aprendi a pensar una app full-stack como piezas conectadas: interfaz, endpoints, validaciones, CORS, persistencia y despliegue.',
    },
    repo: 'https://github.com/EmilioChenf/ChenToons-frontend',
    repoLabel: 'Frontend',
    secondaryRepo: 'https://github.com/EmilioChenf/ChenToons-backend',
    demo: 'https://cheentoons-frontend.onrender.com/',
    status: 'Frontend y backend publicados en Render',
  },
  {
    name: 'Proyecto E-commerce Chen',
    type: 'Proyecto academico full-stack',
    description:
      'Sistema tipo tienda para venta de peluches y merchandising. Maneja catalogo, autenticacion, roles de administrador y cliente, carrito, checkout, reportes administrativos y exportaciones.',
    technologies: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Render'],
    contribution:
      'Trabaje en la arquitectura con API REST, frontend modular, rutas protegidas, consultas SQL, reportes administrativos, validaciones y configuracion de despliegue separado.',
    learning: {
      problem: 'Construir una tienda con experiencia de cliente y panel administrativo usando datos reales.',
      challenge:
        'Manejar roles, rutas protegidas, carrito, checkout, CRUD administrativo, reportes y conexion a PostgreSQL.',
      solution:
        'Implemente frontend modular con React, API REST con Express, autenticacion por roles, consultas SQL y despliegue separado de frontend, backend y base de datos.',
      learned:
        'Aprendi que un e-commerce requiere cuidar flujos completos: autenticacion, estado global, validaciones, stock, ventas y reportes administrativos.',
    },
    repo: 'https://github.com/EmilioChenf/Proyecto-2-E-commerce-Chen',
    demo: 'https://plushie-paradise-frontend.onrender.com',
    status: 'Proyecto desplegado con frontend, backend y base de datos',
  },
  {
    name: 'ChenCalc Lab',
    type: 'Proyecto individual',
    description:
      'Calculadora web enfocada en practica de logica, estado de interfaz y operaciones basicas sin usar eval. Incluye limite visual, estados de error, pruebas automatizadas y componentes documentados.',
    technologies: ['React', 'TypeScript', 'Vite', 'Bun', 'Storybook', 'Docker', 'GitHub Pages'],
    contribution:
      'Centralice la logica matematica en utilidades puras, cree componentes reutilizables, agregue pruebas, lint, Storybook y publicacion automatica con GitHub Pages.',
    learning: {
      problem: 'Crear una calculadora confiable con limite visual, estados de error y operaciones continuas.',
      challenge:
        'Resolver la logica sin usar eval, controlar entradas invalidas y mantener el display dentro de 9 caracteres.',
      solution:
        'Separe la logica en utilidades puras, maneje estados como READY, TYPING, RESULT y ERROR, y agregue pruebas para validar casos criticos.',
      learned:
        'Aprendi a separar UI y reglas de negocio para que una funcionalidad pequena pueda ser probada y mantenida con mas seguridad.',
    },
    repo: 'https://github.com/EmilioChenf/Calculadora',
    demo: 'https://emiliochenf.github.io/Calculadora/',
    status: 'Publicado en GitHub Pages',
  },
  {
    name: 'Snake Chenin Lab',
    type: 'Proyecto individual',
    description:
      'Juego clasico de Snake construido con React + Vite. Incluye tablero con CSS Grid, movimiento por teclado, comida aleatoria, crecimiento de la serpiente, puntaje, mejor puntaje de sesion y pantalla de Game Over.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS Grid', 'Hooks', 'Docker'],
    contribution:
      'Separe el juego en componentes, concentre reglas como colisiones, comida y velocidad en utilidades reutilizables, y maneje el estado con hooks sin manipular el DOM manualmente.',
    learning: {
      problem: 'Recrear Snake como juego web interactivo sin usar canvas, manteniendo una interfaz responsive.',
      challenge:
        'Controlar movimiento por intervalos, evitar direcciones contrarias, detectar colisiones y aumentar dificultad sin romper el estado.',
      solution:
        'Use hooks para manejar estado y ciclo de juego, CSS Grid para el tablero y utilidades separadas para comida, velocidad y colisiones.',
      learned:
        'Aprendi a manejar logica en tiempo real dentro de React y a cuidar dependencias de useEffect para que el juego responda correctamente.',
    },
    repo: 'https://github.com/EmilioChenf/Snake.git',
    demo: '',
    status: 'Repositorio publico en GitHub',
  },
  {
    name: 'Dashboard de datos con Metabase',
    type: 'Proyecto academico / practica de visualizacion',
    description:
      'Practica orientada a consulta y visualizacion de datos mediante SQL, dashboards y contenedores. Se presenta como evidencia de analisis, lectura de metricas y comunicacion visual de informacion.',
    technologies: ['Metabase', 'SQL', 'Docker', 'Docker Compose', 'Visualizacion de datos'],
    contribution:
      'Configure un flujo de analisis para transformar datos en metricas entendibles y comunicar hallazgos mediante paneles visuales.',
    learning: {
      problem: 'Convertir datos consultables en visualizaciones que ayuden a interpretar informacion rapidamente.',
      challenge:
        'Pasar de consultas SQL a metricas visuales claras y organizar dashboards que no fueran solo tablas aisladas.',
      solution:
        'Use Metabase con SQL y contenedores para crear un flujo de exploracion, consulta y visualizacion de datos.',
      learned:
        'Aprendi a comunicar datos con criterio: elegir metricas utiles, ordenar paneles y pensar en la lectura que hara el usuario final.',
    },
    repo: 'https://github.com/EmilioChenf/Lab-7---Metabase',
    demo: '',
    status: 'Repositorio publico en GitHub',
  },
]

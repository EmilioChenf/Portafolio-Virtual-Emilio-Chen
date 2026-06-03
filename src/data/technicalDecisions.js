export const technicalDecisions = [
  {
    title: 'React para interfaces modernas',
    text:
      'Lo use en el e-commerce, la calculadora y Snake porque me permite separar la interfaz en componentes con responsabilidades claras. En proyectos con estados cambiantes, como carrito, formularios, puntajes o pantallas de juego, React hizo mas facil controlar que cambia y cuando se renderiza.',
  },
  {
    title: 'Vite en lugar de Create React App',
    text:
      'Elegi Vite porque los proyectos arrancan rapido, el entorno de desarrollo responde mejor y el build final es directo para publicar. En el portafolio, Calculadora y Snake me ayudo a trabajar con una estructura liviana sin cargar configuraciones innecesarias.',
  },
  {
    title: 'Docker para estandarizar entornos',
    text:
      'Use Docker cuando el proyecto necesitaba correr igual en diferentes maquinas. En ChenToons y el e-commerce fue importante para levantar backend, frontend y base de datos sin depender de configuraciones manuales distintas en cada computadora.',
  },
  {
    title: 'Git y GitHub para control de versiones',
    text:
      'GitHub me sirvio para mantener repositorios publicos revisables, documentar avances y publicar proyectos. En Calculadora y el portafolio tambien lo use como parte del flujo de despliegue, conectando el repositorio con GitHub Pages.',
  },
  {
    title: 'APIs REST para comunicacion cliente-servidor',
    text:
      'En ChenToons y el e-commerce use APIs REST para separar la interfaz del backend. Esto hizo posible que el frontend consumiera datos, filtros, CRUD, autenticacion y reportes sin mezclar la logica visual con la logica de servidor.',
  },
  {
    title: 'Go Fiber en ChenToons',
    text:
      'Use Go Fiber en ChenToons porque el backend necesitaba endpoints claros, respuesta rapida y una estructura sencilla para manejar series, personajes, episodios, ratings, uploads y exportacion CSV. Fiber fue practico para construir una API explicable y documentada.',
  },
  {
    title: 'PostgreSQL en proyectos full-stack',
    text:
      'PostgreSQL fue util en ChenToons y el e-commerce porque ambos necesitaban datos relacionales: usuarios, productos, ventas, series, episodios y ratings. Me permitio practicar consultas SQL, relaciones entre tablas y reportes con datos reales.',
  },
]

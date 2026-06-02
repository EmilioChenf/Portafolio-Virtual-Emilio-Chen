# Portafolio Virtual Emilio Chen

Landing page profesional de Emilio Chen, estudiante de Ingenieria en Ciencias de la Computacion y desarrollador web full-stack junior en Guatemala. El portafolio esta construido como SPA con React + Vite y presenta informacion personal, tecnologias, proyectos, forma de trabajo y contacto.

## Tecnologias usadas

- React
- Vite
- JavaScript
- CSS organizado por secciones
- Lucide React para iconos
- HTML semantico
- Responsive design
- Docker
- Nginx

## Objetivo

El proyecto esta preparado para demostrar criterio tecnico en una evaluacion de portafolio profesional:

- Presentacion clara del perfil.
- Proyectos con repositorios publicos.
- Descripciones basadas en evidencia de los proyectos locales.
- Secciones responsive para movil, tablet y escritorio.
- Codigo separado por componentes y datos reutilizables.
- README con instrucciones de instalacion, ejecucion y publicacion.

## Instalacion

```bash
npm install
```

## Correr localmente

```bash
npm run dev
```

Vite mostrara una URL local similar a:

```text
http://localhost:5173/
```

## Generar build de produccion

```bash
npm run build
```

Para revisar el build localmente:

```bash
npm run preview
```

## Correr con Docker

Construir y levantar el portafolio con Docker Compose:

```bash
docker compose up --build
```

La aplicacion quedara disponible en:

```text
http://localhost:8080/
```

Detener el contenedor:

```bash
docker compose down
```

Tambien se puede construir la imagen manualmente:

```bash
docker build -t portafolio-emilio-chen .
docker run --rm -p 8080:80 portafolio-emilio-chen
```

## Estructura del proyecto

```text
src/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProjectCard.jsx
    Projects.jsx
    TechStack.jsx
    Workflow.jsx
  data/
    projects.js
    technologies.js
  styles/
    global.css
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
Dockerfile
docker-compose.yml
nginx.conf
README.md
```

## Proyectos incluidos

- ChenToons Frontend: https://github.com/EmilioChenf/ChenToons-frontend
- ChenToons Backend: https://github.com/EmilioChenf/ChenToons-backend
- Proyecto E-commerce Chen: https://github.com/EmilioChenf/Proyecto-2-E-commerce-Chen
- Calculadora: https://github.com/EmilioChenf/Calculadora
- Snake: https://github.com/EmilioChenf/Snake.git
- Metabase: https://github.com/EmilioChenf/Lab-7---Metabase
- GitHub personal: https://github.com/EmilioChenf

## Publicacion

El portafolio esta listo para publicarse como sitio estatico en:

- GitHub Pages
- Vercel
- Netlify
- Render Static Site

Configuracion recomendada:

- Build command: `npm run build`
- Publish directory: `dist`

GitHub Pages esta configurado con GitHub Actions en `.github/workflows/deploy.yml`. Cada push a `main` ejecuta `npm ci`, genera el build y publica el contenido de `dist` en la rama `gh-pages`.

Para Render como servicio Docker:

- Environment: Docker
- Dockerfile path: `./Dockerfile`
- Port: `80`

## Comandos utiles para GitHub

```bash
git status
git add .
git commit -m "Construir portafolio profesional con React y Vite"
git branch -M main
git remote add origin https://github.com/EmilioChenf/Portafolio-Virtual-Emilio-Chen.git
git push -u origin main
```

Si el remote ya existe:

```bash
git remote -v
git push
```

## Autor

Emilio Chen  
Guatemala  
GitHub: https://github.com/EmilioChenf

## Nota

El correo de contacto principal es `che24841@uvg.edu.gt`. El enlace de "Enviar mensaje" abre Outlook web con ese destinatario preparado.

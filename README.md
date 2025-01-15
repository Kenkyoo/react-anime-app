# AnimeVerse

**AnimeVerse** es una aplicación web que permite a los usuarios explorar, buscar y mantenerse al día con los animes más populares. La aplicación ofrece funcionalidades como búsqueda de animes, visualización de tendencias y detalles completos de cada anime.

## Características

- 🌟 **Explorar Animes**: Lista de animes populares extraídos de la API de Kitsu.
- 🔍 **Búsqueda Inteligente**: Encuentra animes por texto con resultados dinámicos.
- 📋 **Detalles**: Obtén información detallada de cada anime seleccionado.
- 🚀 **Frontend Moderno**: Construido con React, TailwindCSS y otras tecnologías modernas.
- 🛠️ **Backend Ligero**: API basada en Express para manejar solicitudes y conectarse con la API de Kitsu.

## Capturas de Pantalla
*(Opcional, aquí puedes incluir capturas de pantalla de la aplicación si lo deseas)*

---

## Tecnologías Utilizadas

### **Frontend**
- **React** (v18)
- **React Router DOM** (para navegación)
- **TailwindCSS** (para estilos rápidos y responsivos)
- **DaisyUI** (componentes adicionales de Tailwind)
- **Axios** (para solicitudes HTTP)
- **Vite** (como bundler)

### **Backend**
- **Express** (como servidor)
- **Axios** (para llamadas a la API de Kitsu)
- **CORS** (para manejo de solicitudes entre dominios)
- **dotenv** (para variables de entorno)

---

## Instalación y Configuración

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- [Git](https://git-scm.com/)

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/animeverse.git
cd animeverse

Configuración del Backend

    Navega al directorio del backend:

cd server

Instala las dependencias:

npm install

Crea un archivo .env para las configuraciones:

PORT=5000

Inicia el servidor:

    node index.js

Configuración del Frontend

    Navega al directorio del frontend:

cd ../frontend

Instala las dependencias:

npm install

Inicia el entorno de desarrollo:

    npm run dev

---

### Uso

    Accede al frontend en tu navegador: http://localhost:5173.
    Utiliza las opciones de navegación para explorar animes, buscar tendencias o realizar búsquedas específicas.
    Haz clic en un anime para obtener más información.

Scripts Disponibles
Frontend
Script	Descripción
npm run dev	Inicia el servidor de desarrollo.
npm run build	Genera la aplicación optimizada para producción.
npm run preview	Previsualiza la aplicación después de construirla.
npm run tailwind	Compila estilos de TailwindCSS.
Backend
Script	Descripción
npm start	Inicia el servidor en modo producción.
npm test	Ejecuta las pruebas con Jest.
API Endpoints
Base URL

http://localhost:5000/api

Rutas
Ruta	Método	Descripción
/trending	GET	Obtiene los animes más populares.
/anime	GET	Obtiene la lista completa de animes.
/search	GET	Busca animes basados en texto (?query=).
/:id	GET	Obtiene detalles de un anime específico por ID.
Contribución

¡Contribuciones son bienvenidas! Sigue los pasos a continuación para contribuir:

    Haz un fork del proyecto.
    Crea una nueva rama para tu funcionalidad o arreglo:

git checkout -b feature/nueva-funcion

Realiza tus cambios y haz commits descriptivos:

git commit -m "Agregada nueva funcionalidad"

Haz un push a tu rama:

    git push origin feature/nueva-funcion

    Abre un Pull Request en GitHub.

Licencia

Este proyecto está licenciado bajo la Licencia MIT.

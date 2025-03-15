// CArpetas propuestas

// src/
// │
// ├── components/
// │   ├── cerebro/                 # Componente Cerebro y su CSS
// │   │   ├── Cerebro.jsx
// │   │   └── Cerebro.css
// │   └── comunes/                # Componentes reutilizables
// │       ├── Layout.jsx
// │       ├── Navbar.jsx
// │       └── Footer.jsx
// │
// ├── pages/
// │   ├── Home/                   # Página de inicio
// │   ├── Enfermedades/
// │   │   ├── EnfermedadLayout.jsx # Layout común para todas las enfermedades
// │   │   └── [enfermedadId]/     # Carpeta dinámica por enfermedad
// │   │       ├── components/     # Componentes específicos de la enfermedad
// │   │       ├── data.js         # Datos de la enfermedad
// │   │       ├── Sintomas.jsx
// │   │       ├── Tratamiento.jsx
// │   │       ├── Prevencion.jsx
// │   │       └── Estilos/
// │   │           └── enfermedad.module.css
// │   ├── Quiz/
// │   └── Auth/
// │
// ├── routes/
// │   ├── AppRouter.jsx           # Configuración principal de rutas
// │   └── EnfermedadesRoutes.jsx  # Rutas anidadas para enfermedades
// │
// ├── assets/
// │   ├── modelos3d/             # Modelos .glb/gltf
// │   └── images/
// │
// ├── context/                   # Contextos de React
// ├── hooks/                     # Custom hooks
// ├── utils/                     # Funciones utilitarias
// └── services/                  # Conexión a APIs y Firebase
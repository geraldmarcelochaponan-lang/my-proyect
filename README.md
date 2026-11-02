# Entrena

Landing page responsive para una plataforma de entrenamiento, nutrición y seguimiento de resultados. El proyecto está construido con React y Vite e incluye navegación adaptable y una interfaz moderna basada en el tema deportivo.

## Características

- Diseño responsive para escritorio, tabletas y dispositivos móviles.
- Menú adaptable con navegación móvil.
- Sección principal con llamada a la acción.
- Contenido sobre entrenamiento, nutrición y resultados.
- Estilos personalizados con React, CSS e imagen ilustrativa.

## Tecnologías

- React 19
- Vite
- JavaScript
- CSS
- HTML

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación y ejecución

1. Accede a la carpeta del proyecto:

```bash
cd my-proyect
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la dirección que muestra Vite en la consola, normalmente:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo. |
| `npm run build` | Genera la versión optimizada de producción. |
| `npm run preview` | Previsualiza el resultado de producción. |
| `npm run lint` | Ejecuta las reglas de análisis de código configuradas. |

## Compilar para producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

## Estructura principal

```text
my-proyect/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Menu.jsx
│   │   └── Menu.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Publicación en GitHub

```bash
git init
git add .
git commit -m "Crear sitio Entrena"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Reemplaza `URL_DEL_REPOSITORIO` por la URL HTTPS o SSH del repositorio creado en GitHub.

## Archivos excluidos de Git

El proyecto debe incluir un `.gitignore` con al menos estas reglas:

```text
node_modules/
dist/
.env
.env.*
```

## Licencia

Este proyecto puede utilizarse con fines educativos o personales. Si se publica de forma pública, se recomienda añadir una licencia antes de distribuirlo.


### Auctores
Bancayán Valera Kevin Roger
Marcelo Chapoñan Gerald Fernando
Valdera SotoJoel Alberto

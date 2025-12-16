# Proyecto de Tarjetas con React

Este es un proyecto simple construido con React y Vite que demuestra la creación y renderizado de componentes reutilizables. La aplicación muestra una galería de tarjetas de artículos generadas dinámicamente a partir de datos simulados (mock data).

## Características

- **Componentes Reutilizables**: Implementación de un componente `Card` modular.
- **Renderizado de Listas**: Uso del método `.map()` para iterar sobre datos y generar componentes dinámicamente.
- **Estilos Modulares**: Uso de CSS Modules para encapsular los estilos de los componentes y evitar conflictos.
- **Props**: Paso de datos a componentes hijos mediante propiedades (props).

## Tecnologías Utilizadas

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- CSS Modules
- JavaScript (ES Modules)

## Estructura del Proyecto

```
src/
├── components/
│   └── card/
│       ├── card.jsx        # Componente de tarjeta
│       └── card.module.css # Estilos específicos de la tarjeta
├── mock/
│   └── card-items.js       # Datos simulados para las tarjetas
├── App.jsx                 # Componente principal que renderiza la lista
├── main.jsx                # Punto de entrada de la aplicación
└── styles.css              # Estilos globales
```

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio** (si aplica) o navegar a la carpeta del proyecto.

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Ver la aplicación**:
   Abre tu navegador en la URL que muestra la terminal (usualmente `http://localhost:5173`).

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código.
- `npm run preview`: Previsualiza la build de producción localmente.

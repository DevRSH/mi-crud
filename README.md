Proyecto CRUD - Mejoras de interfaz y funcionalidades

Este repositorio contiene una pequeña aplicación CRUD en React que guarda los datos en el LocalStorage del navegador. Trabajo hecho como estudiante para la entrega.

Cómo ejecutar (local):

1. Clona el repositorio:

```
git clone <tu-repositorio>
cd mi-crud
```

2. Instala dependencias y levanta la app:

```
npm install
npm start   # o npm run dev
```

Qué entregué (commits importantes):

- `commit 1: estilos CSS y conexión con className` — estilos básicos: tarjeta, título, formulario, lista y botones coloreados.
- `validación, contador y confirmación al eliminar` — validación de formulario, contador total y confirmación antes de borrar un elemento.
- `completar, buscar y borrar todo` — marcar como completado (tachado), buscador en vivo y botón para borrar todo con confirmación.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Acciona UI Library

Librería de componentes Angular basada en **Atomic Design** e inspirada en la consistencia visual y experiencia de uso de `ng-zorro-antd`.

## Objetivos

- Diseñar una arquitectura escalable para componentes reutilizables.
- Mantener consistencia visual con tokens de diseño y temas.
- Facilitar colaboración con una estrategia de ramas tipo Git Flow.

## Estructura principal

```text
libraries/ui-components/src/
├── lib/
│   ├── foundations/    # Tokens, tipografía, iconografía, motion, grids
│   ├── atoms/          # Botones, inputs, badges, tags, iconos, etc.
│   ├── molecules/      # Combinaciones de átomos (search-box, form-field)
│   ├── organisms/      # Secciones complejas (header, sidebar, table-toolbar)
│   ├── templates/      # Layouts reutilizables
│   ├── pages/          # Ensamblado final para showcases/demo
│   └── utils/          # Helpers, tipos, contratos
└── styles/
    ├── tokens/         # Colores, spacing, radius, sombras, tipografía
    ├── mixins/         # Mixins SCSS reutilizables
    └── themes/         # Light, dark, corporate
```

## Flujo de ramas

Este repositorio usa el modelo:

- `main`: versiones estables y releases.
- `develop`: integración continua de trabajo.
- `feature/*`: desarrollo de funcionalidades.
- `hotfix/*`: correcciones urgentes sobre producción.

Revisa [docs/branching-strategy.md](docs/branching-strategy.md) para el detalle.

## Primeros comandos (base)

```bash
npm install
npm run lint
npm run test
```

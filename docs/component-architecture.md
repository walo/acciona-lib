# Arquitectura de componentes (Atomic Design)

## 0) Foundations

Define reglas base del sistema:

- Color palette (primary, success, warning, error, neutral).
- Tipografía (familia, tamaños, pesos, line-height).
- Spacing (escala 4px).
- Border radius y sombras.
- Breakpoints responsive.
- Motion tokens (duración, easing).

## 1) Atoms

Componentes mínimos reutilizables.

- `Button`
- `Input`
- `Icon`
- `Tag`
- `Badge`
- `Typography`

Reglas:
- No contienen lógica de negocio.
- Deben ser altamente configurables por `@Input`/config.
- Tokens de diseño obligatorios para color, spacing y tipografía.

## 2) Molecules

Composición de atoms con interacción controlada.

- `SearchBox` (Input + Icon + botón clear)
- `FormField` (Label + Input + helper/error)
- `ActionGroup` (Button + Dropdown)

Reglas:
- Encapsulan patrones comunes de UX.
- Exponen eventos simples y predecibles.

## 3) Organisms

Bloques funcionales de pantalla.

- `TableToolbar`
- `AppHeader`
- `SideNavigation`
- `FilterBar`

Reglas:
- Integran varias molecules y atoms.
- Deben mantenerse agnósticos al dominio de negocio.

## 4) Templates

Estructura de layout y distribución.

- `PageShell`
- `AuthLayout`
- `DashboardTemplate`
- `SettingsTemplate`

Reglas:
- Definen slots/zonas de contenido.
- No incorporan lógica de datos específica.

## 5) Pages

Composición final de templates + organismos para demos/documentación.

## Convenciones técnicas

- Carpeta por componente con:
  - `*.component.ts`
  - `*.component.html`
  - `*.component.scss`
  - `*.spec.ts`
  - `index.ts`
- Exports centralizados con barrels por capa.
- Inputs/Outputs tipados y sin lógica de negocio.

## Principios de diseño

- **Profesional y empresarial**: uso sobrio de color, elevación y tipografía.
- **Moderno y limpio**: jerarquía visual clara, espaciado consistente.
- **Escalable**: componentes independientes y reutilizables.
- **Accesible**: foco visible, contraste AA y navegación por teclado.

## Estilo visual objetivo

- Profesional y empresarial.
- Moderno y minimalista.
- Densidad visual equilibrada (espaciado consistente).
- Accesibilidad por defecto (contraste, focus visible, navegación teclado).

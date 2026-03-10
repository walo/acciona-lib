# Foundations

Base del sistema de diseno y tokens compartidos.

## Tokens disponibles

- Colores: marca, semanticos y neutros.
- Tipografia: familias, tamanos, pesos, line-height y tracking.
- Espaciado: escala basada en 4px.
- Bordes y sombras: radios y elevaciones.
- Motion: duraciones y curvas de easing.
- Breakpoints y grid: medidas base para layout.
- Z-index: niveles para overlays y capas.

## Uso en TypeScript

```ts
import { colorTokens, spacingTokens, typographyTokens } from '@acciona/ui-lib';
```

## Uso en CSS

```css
:root {
  color: var(--ac-color-text);
  font-family: var(--ac-font-family-base);
  padding: var(--ac-space-md);
}
```

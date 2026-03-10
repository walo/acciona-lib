# Acciona UI Library

Libreria de componentes Angular basada en Atomic Design.

## Objetivos

- Disenar una arquitectura escalable para componentes reutilizables.
- Mantener consistencia visual con tokens de diseno y temas.
- Facilitar colaboracion con una estrategia de ramas tipo Git Flow.

## Integracion rapida

### 1) Instalacion

```bash
npm install @acciona/ui-lib
```

### 2) Importar theme global

En `src/styles.scss`:

```scss
@import '~@acciona/ui-lib/src/styles/_theme.css';
```

### 3) Usar componentes (standalone)

```ts
import { Component } from '@angular/core';
import {
  AcAppHeaderComponent,
  AcButtonComponent,
  AcInputComponent
} from '@acciona/ui-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AcAppHeaderComponent, AcButtonComponent, AcInputComponent],
  template: `
    <ac-app-header productName="Acciona" [showSearch]="true"></ac-app-header>
    <div style="padding: 24px;">
      <ac-input placeholder="Buscar" [clearable]="true"></ac-input>
      <ac-button variant="primary" size="md">Guardar</ac-button>
    </div>
  `
})
export class AppComponent {}
```

### 4) Usar una page demo

```ts
import { Component } from '@angular/core';
import { AcDashboardPageComponent } from '@acciona/ui-lib';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AcDashboardPageComponent],
  template: `<ac-dashboard-page></ac-dashboard-page>`
})
export class DashboardComponent {}
```

## Estructura principal

```text
libraries/ui-components/src/
|-- lib/
|   |-- foundations/    # Tokens, tipografia, iconografia, motion, grids
|   |-- atoms/          # Botones, inputs, badges, tags, iconos, etc.
|   |-- molecules/      # Combinaciones de atomos (search-box, form-field)
|   |-- organisms/      # Secciones complejas (header, sidebar, table-toolbar)
|   |-- templates/      # Layouts reutilizables
|   |-- pages/          # Ensamblado final para showcases/demo
|   `-- utils/          # Helpers, tipos, contratos
`-- styles/
    |-- tokens/         # Colores, spacing, radius, sombras, tipografia
    |-- mixins/         # Mixins SCSS reutilizables
    `-- themes/         # Light, dark, corporate
```

## Flujo de ramas

Este repositorio usa el modelo:

- `main`: versiones estables y releases.
- `develop`: integracion continua de trabajo.
- `feature/*`: desarrollo de funcionalidades.
- `hotfix/*`: correcciones urgentes sobre produccion.

Revisa `docs/branching-strategy.md` para el detalle.

## Primeros comandos (base)

```bash
npm install
npm run lint
npm run test
```

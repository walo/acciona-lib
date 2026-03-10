# Starter de integracion (Angular)

Este starter muestra como consumir la libreria en una app Angular con standalone components.

## 1) Instalar la libreria

```bash
npm install @acciona/ui-lib
```

## 2) Importar el theme global

En `src/styles.scss`:

```scss
@import '~@acciona/ui-lib/src/styles/_theme.css';
```

## 3) Componente principal (AppComponent)

```ts
import { Component } from '@angular/core';
import {
  AcAppHeaderComponent,
  AcButtonComponent,
  AcInputComponent,
  AcDashboardPageComponent
} from '@acciona/ui-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AcAppHeaderComponent,
    AcButtonComponent,
    AcInputComponent,
    AcDashboardPageComponent
  ],
  template: `
    <ac-app-header productName="Acciona" [showSearch]="true"></ac-app-header>
    <div style="padding: 24px; display: grid; gap: 16px;">
      <ac-input placeholder="Buscar" [clearable]="true"></ac-input>
      <ac-button variant="primary" size="md">Guardar</ac-button>
    </div>

    <section style="margin-top: 32px;">
      <ac-dashboard-page></ac-dashboard-page>
    </section>
  `
})
export class AppComponent {}
```

## 4) main.ts (standalone)

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```

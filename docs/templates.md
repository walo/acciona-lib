# Templates

Layouts reutilizables para estructuras de pagina.

## Componentes incluidos

- PageShell
- AuthLayout
- DashboardTemplate
- SettingsTemplate
- FormTemplate
- WizardTemplate
- ManagementTemplate

## Uso rapido

```ts
import {
  AcPageShellComponent,
  AcAuthLayoutComponent,
  AcDashboardTemplateComponent,
  AcSettingsTemplateComponent,
  AcFormTemplateComponent,
  AcWizardTemplateComponent,
  AcManagementTemplateComponent
} from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-page-shell title="Panel" [hasSidebar]="true">
  <nav slot="sidebar">...</nav>
  <section>Contenido</section>
</ac-page-shell>

<ac-auth-layout title="Accede" subtitle="Usa tus credenciales">
  <form>...</form>
</ac-auth-layout>
```

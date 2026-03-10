# Molecules

Combinaciones de atoms con interaccion controlada.

## Componentes incluidos

- FormField
- SearchBox
- Breadcrumb
- Pagination
- ActionGroup
- EmptyState
- StatCard

## Uso rapido

```ts
import {
  AcFormFieldComponent,
  AcSearchBoxComponent,
  AcBreadcrumbComponent,
  AcPaginationComponent,
  AcActionGroupComponent,
  AcEmptyStateComponent,
  AcStatCardComponent
} from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-form-field label="Email" helperText="Usa tu correo corporativo">
  <ac-input placeholder="nombre@empresa.com"></ac-input>
</ac-form-field>

<ac-search-box (search)="onSearch($event)"></ac-search-box>

<ac-breadcrumb [items]="[{ label: 'Inicio', href: '/' }, { label: 'Usuarios' }]">
</ac-breadcrumb>
```

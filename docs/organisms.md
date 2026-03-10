# Organisms

Bloques funcionales que combinan molecules y atoms.

## Componentes incluidos

- AppHeader
- TableToolbar
- SideNavigation
- FilterBar
- AppFooter

## Uso rapido

```ts
import {
  AcAppHeaderComponent,
  AcTableToolbarComponent,
  AcSideNavigationComponent,
  AcFilterBarComponent,
  AcAppFooterComponent
} from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-app-header
  productName="Acciona"
  [showSearch]="true"
  (search)="onSearch($event)"
></ac-app-header>

<ac-table-toolbar
  title="Usuarios"
  [showFilters]="true"
  (filtersClick)="openFilters()"
></ac-table-toolbar>
```

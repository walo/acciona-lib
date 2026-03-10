# Atoms

Componentes base y reutilizables que no contienen logica de negocio.

## Componentes incluidos

- Button
- Input
- Icon
- Badge
- Tag
- Avatar
- Typography
- Divider
- Spinner

## Uso rapido

```ts
import {
  AcButtonComponent,
  AcInputComponent,
  AcIconComponent,
  AcBadgeComponent,
  AcTagComponent,
  AcAvatarComponent,
  AcTypographyComponent,
  AcDividerComponent,
  AcSpinnerComponent
} from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-button variant="primary" size="md">Guardar</ac-button>
<ac-input placeholder="Buscar" [clearable]="true"></ac-input>
<ac-icon name="check" [size]="20"></ac-icon>
<ac-badge variant="success">Activo</ac-badge>
<ac-tag [closable]="true">Finance</ac-tag>
<ac-avatar initials="JD"></ac-avatar>
<ac-typography variant="h2">Titulo</ac-typography>
<ac-divider></ac-divider>
<ac-spinner size="sm"></ac-spinner>
```

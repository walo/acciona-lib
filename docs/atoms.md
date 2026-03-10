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
- Checkbox
- Radio
- Switch
- Select
- Textarea
- Tooltip

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
  AcSpinnerComponent,
  AcCheckboxComponent,
  AcRadioComponent,
  AcSwitchComponent,
  AcSelectComponent,
  AcTextareaComponent,
  AcTooltipComponent
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
<ac-checkbox label="Aceptar"></ac-checkbox>
<ac-radio name="tipo" value="a" label="A"></ac-radio>
<ac-switch label="Activo"></ac-switch>
<ac-select [options]="[{ label: 'A', value: 'a' }]"></ac-select>
<ac-textarea placeholder="Notas"></ac-textarea>
<ac-tooltip text="Info"><span>?</span></ac-tooltip>
```

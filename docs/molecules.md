# Molecules

Combinaciones de atoms con interaccion controlada.

## Componentes incluidos

- FormField
- SearchBox

## Uso rapido

```ts
import { AcFormFieldComponent, AcSearchBoxComponent } from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-form-field label="Email" helperText="Usa tu correo corporativo">
  <ac-input placeholder="nombre@empresa.com"></ac-input>
</ac-form-field>

<ac-search-box (search)="onSearch($event)"></ac-search-box>
```

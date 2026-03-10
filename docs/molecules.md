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
- InputGroup
- PasswordField
- DatePicker
- FileUpload
- Alert
- SelectSearch
- MultiSelect
- Autocomplete
- DateRange
- InlineEdit
- Toast

## Uso rapido

```ts
import {
  AcFormFieldComponent,
  AcSearchBoxComponent,
  AcBreadcrumbComponent,
  AcPaginationComponent,
  AcActionGroupComponent,
  AcEmptyStateComponent,
  AcStatCardComponent,
  AcInputGroupComponent,
  AcPasswordFieldComponent,
  AcDatePickerComponent,
  AcFileUploadComponent,
  AcAlertComponent,
  AcSelectSearchComponent,
  AcMultiSelectComponent,
  AcAutocompleteComponent,
  AcDateRangeComponent,
  AcInlineEditComponent,
  AcToastComponent
} from '@acciona/ui-lib';
```

## Ejemplo

```html
<ac-form-field label="Email" helperText="Usa tu correo corporativo">
  <ac-input placeholder="nombre@empresa.com"></ac-input>
</ac-form-field>

<ac-search-box (search)="onSearch($event)"></ac-search-box>

<ac-alert variant="info" title="Aviso" description="Mensaje"></ac-alert>
```

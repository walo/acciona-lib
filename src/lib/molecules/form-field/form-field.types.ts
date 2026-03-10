export interface AcFormFieldConfig {
  label: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  status?: 'default' | 'success' | 'warning' | 'error';
  id?: string;
}

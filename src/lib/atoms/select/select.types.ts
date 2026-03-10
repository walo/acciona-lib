export interface AcSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface AcSelectConfig {
  options: AcSelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

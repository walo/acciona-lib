export interface AcInputConfig {
  type?: 'text' | 'email' | 'password' | 'number';
  status?: 'default' | 'success' | 'warning' | 'error';
  clearable?: boolean;
}

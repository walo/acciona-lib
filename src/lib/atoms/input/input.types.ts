export interface AcInputConfig {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  status?: 'default' | 'success' | 'warning' | 'error';
  clearable?: boolean;
}

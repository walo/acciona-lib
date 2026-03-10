export interface AcAlertConfig {
  variant?: 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  description?: string;
  closable?: boolean;
}

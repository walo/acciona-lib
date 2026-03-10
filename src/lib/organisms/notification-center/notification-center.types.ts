export interface AcNotificationItem {
  title: string;
  description?: string;
  time?: string;
  read?: boolean;
}

export interface AcNotificationCenterConfig {
  items: AcNotificationItem[];
}

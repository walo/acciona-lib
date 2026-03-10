import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface AcNotificationItem {
  title: string;
  description?: string;
  time?: string;
  read?: boolean;
}

@Component({
  selector: 'ac-notification-center',
  standalone: true,
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcNotificationCenterComponent {
  @Input() items: AcNotificationItem[] = [];
}

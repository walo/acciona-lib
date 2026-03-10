import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcNotificationItem } from './notification-center.types';

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

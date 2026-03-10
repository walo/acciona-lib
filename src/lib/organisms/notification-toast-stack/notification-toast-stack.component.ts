import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcToastComponent } from '../../molecules/toast';

export interface AcToastStackItem {
  message: string;
}

@Component({
  selector: 'ac-notification-toast-stack',
  standalone: true,
  templateUrl: './notification-toast-stack.component.html',
  styleUrls: ['./notification-toast-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcToastComponent]
})
export class AcNotificationToastStackComponent {
  @Input() items: AcToastStackItem[] = [];
}

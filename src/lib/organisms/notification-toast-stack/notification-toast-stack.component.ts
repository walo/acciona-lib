import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcToastComponent } from '../../molecules/toast';
import { AcToastStackItem } from './notification-toast-stack.types';

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

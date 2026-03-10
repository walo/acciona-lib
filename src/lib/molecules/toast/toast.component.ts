import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcToastComponent {
  @Input() message = '';
  @Input() variant: 'success' | 'warning' | 'danger' | 'info' = 'info';

  get toastClass(): string {
    return `ac-toast ac-toast--${this.variant}`;
  }
}

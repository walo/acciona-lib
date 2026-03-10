import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcAlertComponent {
  @Input() variant: 'success' | 'warning' | 'danger' | 'info' = 'info';
  @Input() title = '';
  @Input() description = '';
  @Input() closable = false;

  @Output() closed = new EventEmitter<void>();

  get alertClass(): string {
    return `ac-alert ac-alert--${this.variant}`;
  }

  onClose(): void {
    this.closed.emit();
  }
}

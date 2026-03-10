import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-tag',
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcTagComponent {
  @Input() variant: 'neutral' | 'success' | 'warning' | 'danger' | 'info' = 'neutral';
  @Input() closable = false;

  @Output() closed = new EventEmitter<void>();

  get tagClass(): string {
    return `ac-tag ac-tag--${this.variant}`;
  }

  onClose(): void {
    this.closed.emit();
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcModalComponent {
  @Input() title = '';
  @Input() open = false;

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}

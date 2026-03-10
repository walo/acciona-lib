import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcButtonComponent } from '../../atoms/button';

@Component({
  selector: 'ac-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcButtonComponent]
})
export class AcEmptyStateComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() actionLabel = '';

  @Output() action = new EventEmitter<void>();

  onAction(): void {
    this.action.emit();
  }
}

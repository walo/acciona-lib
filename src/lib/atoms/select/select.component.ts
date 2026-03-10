import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcSelectOption } from './select.types';

@Component({
  selector: 'ac-select',
  standalone: true,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcSelectComponent {
  @Input() options: AcSelectOption[] = [];
  @Input() value = '';
  @Input() placeholder = 'Selecciona';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    const next = target?.value ?? '';
    this.value = next;
    this.valueChange.emit(next);
  }
}

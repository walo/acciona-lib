import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-date-picker',
  standalone: true,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcDatePickerComponent {
  @Input() value = '';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const next = target?.value ?? '';
    this.value = next;
    this.valueChange.emit(next);
  }
}

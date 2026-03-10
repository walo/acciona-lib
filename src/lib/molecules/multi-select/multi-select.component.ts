import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcMultiSelectOption } from './multi-select.types';

@Component({
  selector: 'ac-multi-select',
  standalone: true,
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcMultiSelectComponent {
  @Input() options: AcMultiSelectOption[] = [];
  @Input() value: string[] = [];

  @Output() valueChange = new EventEmitter<string[]>();

  toggle(option: AcMultiSelectOption): void {
    const exists = this.value.includes(option.value);
    this.value = exists
      ? this.value.filter((item) => item !== option.value)
      : [...this.value, option.value];
    this.valueChange.emit(this.value);
  }
}

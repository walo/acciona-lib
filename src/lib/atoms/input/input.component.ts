import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcInputComponent {
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'search' = 'text';
  @Input() status: 'default' | 'success' | 'warning' | 'error' = 'default';
  @Input() clearable = false;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  get inputClass(): string {
    return `ac-input ac-input--${this.status}`;
  }

  get showClear(): boolean {
    return this.clearable && !!this.value && !this.disabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const nextValue = target?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
  }

  onClear(): void {
    this.value = '';
    this.valueChange.emit('');
  }
}

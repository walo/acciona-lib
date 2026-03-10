import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcTextareaComponent {
  @Input() rows = 4;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() status: 'default' | 'success' | 'warning' | 'error' = 'default';
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  get textareaClass(): string {
    return `ac-textarea ac-textarea--${this.status}`;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement | null;
    const next = target?.value ?? '';
    this.value = next;
    this.valueChange.emit(next);
  }
}

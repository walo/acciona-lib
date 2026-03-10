import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ac-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcFormFieldComponent {
  @Input() label = '';
  @Input() required = false;
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() status: 'default' | 'success' | 'warning' | 'error' = 'default';
  @Input() id = `ac-form-field-${nextId++}`;

  get hasError(): boolean {
    return this.status === 'error' && !!this.errorText;
  }
}

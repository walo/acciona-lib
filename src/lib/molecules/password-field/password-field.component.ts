import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcInputComponent } from '../../atoms/input';
import { AcIconComponent } from '../../atoms/icon';

@Component({
  selector: 'ac-password-field',
  standalone: true,
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcInputComponent, AcIconComponent]
})
export class AcPasswordFieldComponent {
  @Input() placeholder = 'Contrasena';
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  show = false;

  toggle(): void {
    this.show = !this.show;
  }

  onValueChange(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }
}

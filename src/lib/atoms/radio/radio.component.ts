import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcRadioComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) value!: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label = '';

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target?.checked) {
      this.valueChange.emit(this.value);
    }
  }
}

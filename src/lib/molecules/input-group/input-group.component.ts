import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcFormFieldComponent } from '../form-field';

@Component({
  selector: 'ac-input-group',
  standalone: true,
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcFormFieldComponent]
})
export class AcInputGroupComponent {
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
}

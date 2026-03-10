import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcInputComponent } from '../../atoms/input';
import { AcAutocompleteOption } from './autocomplete.types';

@Component({
  selector: 'ac-autocomplete',
  standalone: true,
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcInputComponent]
})
export class AcAutocompleteComponent {
  @Input() options: AcAutocompleteOption[] = [];
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }
}

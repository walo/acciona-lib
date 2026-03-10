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
  @Input() placeholder = 'Buscar';

  @Output() valueChange = new EventEmitter<string>();

  get filteredOptions(): AcAutocompleteOption[] {
    const query = this.value.trim().toLowerCase();
    if (!query) {
      return this.options;
    }
    return this.options.filter((option) => option.label.toLowerCase().includes(query));
  }

  onValueChange(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }

  select(option: AcAutocompleteOption): void {
    this.value = option.label;
    this.valueChange.emit(option.label);
  }
}

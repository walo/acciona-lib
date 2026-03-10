import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcInputComponent } from '../../atoms/input';
import { AcSelectSearchOption } from './select-search.types';

@Component({
  selector: 'ac-select-search',
  standalone: true,
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcInputComponent]
})
export class AcSelectSearchComponent {
  @Input() options: AcSelectSearchOption[] = [];
  @Input() query = '';

  @Output() queryChange = new EventEmitter<string>();

  onQueryChange(value: string): void {
    this.query = value;
    this.queryChange.emit(value);
  }
}

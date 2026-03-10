import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcButtonComponent } from '../../atoms/button';
import { AcInputComponent } from '../../atoms/input';

@Component({
  selector: 'ac-search-box',
  standalone: true,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcInputComponent, AcButtonComponent]
})
export class AcSearchBoxComponent {
  @Input() placeholder = 'Buscar';
  @Input() debounceMs = 250;
  @Input() buttonLabel = 'Buscar';
  @Input() disabled = false;

  @Output() queryChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  value = '';
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  onValueChange(nextValue: string): void {
    this.value = nextValue;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.queryChange.emit(this.value);
    }, this.debounceMs);
  }

  onSubmit(): void {
    this.search.emit(this.value);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onSubmit();
    }
  }
}

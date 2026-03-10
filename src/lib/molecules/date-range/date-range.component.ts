import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-date-range',
  standalone: true,
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcDateRangeComponent {
  @Input() start = '';
  @Input() end = '';

  @Output() startChange = new EventEmitter<string>();
  @Output() endChange = new EventEmitter<string>();

  onStart(event: Event): void {
    const value = (event.target as HTMLInputElement | null)?.value ?? '';
    this.start = value;
    this.startChange.emit(value);
  }

  onEnd(event: Event): void {
    const value = (event.target as HTMLInputElement | null)?.value ?? '';
    this.end = value;
    this.endChange.emit(value);
  }
}

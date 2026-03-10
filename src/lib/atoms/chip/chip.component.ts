import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcChipComponent {
  @Input() selected = false;

  @Output() selectedChange = new EventEmitter<boolean>();

  toggle(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}

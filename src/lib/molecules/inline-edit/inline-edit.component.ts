import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcInputComponent } from '../../atoms/input';

@Component({
  selector: 'ac-inline-edit',
  standalone: true,
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcInputComponent]
})
export class AcInlineEditComponent {
  @Input() value = '';
  @Input() editing = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() editingChange = new EventEmitter<boolean>();

  start(): void {
    this.editing = true;
    this.editingChange.emit(true);
  }

  save(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
    this.editing = false;
    this.editingChange.emit(false);
  }
}

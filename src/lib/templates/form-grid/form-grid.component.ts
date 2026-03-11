import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ac-form-grid',
  standalone: true,
  template: `<div class="ac-form-grid" [style.--ac-form-grid-cols]="columns">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./form-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcFormGridComponent {
  /** Número de columnas del grid: 12 o 24 */
  @Input() columns: 12 | 24 = 24;
}

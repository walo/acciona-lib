import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ac-form-grid-item',
  standalone: true,
  template: `<div class="ac-form-grid-item" [style.grid-column]="gridColumnSpan">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./form-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcFormGridItemComponent {
  /** Número de columnas que ocupa (1 a 12 si el grid es de 12, 1 a 24 si es de 24) */
  @Input() set cols(value: number) {
    const n = Number(value);
    this._cols = Number.isFinite(n) && n >= 1 && n <= 24 ? Math.round(n) : 24;
  }
  get cols(): number {
    return this._cols;
  }
  private _cols = 24;

  get gridColumnSpan(): string {
    return `span ${this._cols}`;
  }
}

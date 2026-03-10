import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcEmptyStateComponent } from '../../molecules/empty-state';
import { AcTableColumn } from './table.types';

@Component({
  selector: 'ac-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcEmptyStateComponent]
})
export class AcTableComponent {
  @Input() columns: AcTableColumn[] = [];
  @Input() data: Array<Record<string, unknown>> = [];
  @Input() loading = false;
  @Input() emptyText = 'Sin datos';

  @Output() rowClick = new EventEmitter<Record<string, unknown>>();

  onRowClick(row: Record<string, unknown>): void {
    this.rowClick.emit(row);
  }
}

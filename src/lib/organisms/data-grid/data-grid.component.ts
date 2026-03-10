import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcTableComponent } from '../table';

@Component({
  selector: 'ac-data-grid',
  standalone: true,
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcTableComponent]
})
export class AcDataGridComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: Array<Record<string, unknown>> = [];
}

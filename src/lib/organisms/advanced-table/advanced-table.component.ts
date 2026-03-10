import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcTableComponent } from '../table';

@Component({
  selector: 'ac-advanced-table',
  standalone: true,
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcTableComponent]
})
export class AcAdvancedTableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: Array<Record<string, unknown>> = [];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AcPageShellComponent } from '../../templates/page-shell';
import { AcTableToolbarComponent } from '../../organisms/table-toolbar';

@Component({
  selector: 'ac-dashboard-page',
  standalone: true,
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcPageShellComponent, AcTableToolbarComponent]
})
export class AcDashboardPageComponent {}

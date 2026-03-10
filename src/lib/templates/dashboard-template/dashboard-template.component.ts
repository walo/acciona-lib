import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcPageShellComponent } from '../page-shell';

@Component({
  selector: 'ac-dashboard-template',
  standalone: true,
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcPageShellComponent]
})
export class AcDashboardTemplateComponent {
  @Input() title = 'Dashboard';
}

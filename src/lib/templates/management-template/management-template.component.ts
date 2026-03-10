import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcPageShellComponent } from '../page-shell';

@Component({
  selector: 'ac-management-template',
  standalone: true,
  templateUrl: './management-template.component.html',
  styleUrls: ['./management-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcPageShellComponent]
})
export class AcManagementTemplateComponent {
  @Input() title = 'Management';
}

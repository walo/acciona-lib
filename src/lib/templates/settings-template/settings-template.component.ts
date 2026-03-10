import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcPageShellComponent } from '../page-shell';

@Component({
  selector: 'ac-settings-template',
  standalone: true,
  templateUrl: './settings-template.component.html',
  styleUrls: ['./settings-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcPageShellComponent]
})
export class AcSettingsTemplateComponent {
  @Input() title = 'Settings';
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcWizardComponent } from '../../organisms/wizard';

@Component({
  selector: 'ac-wizard-template',
  standalone: true,
  templateUrl: './wizard-template.component.html',
  styleUrls: ['./wizard-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcWizardComponent]
})
export class AcWizardTemplateComponent {
  @Input() title = 'Wizard';
  @Input() steps: string[] = [];
  @Input() active = 0;
}

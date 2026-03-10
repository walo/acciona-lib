import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcStepperComponent } from '../../atoms/stepper';

@Component({
  selector: 'ac-wizard',
  standalone: true,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcStepperComponent]
})
export class AcWizardComponent {
  @Input() steps: string[] = [];
  @Input() active = 0;
}

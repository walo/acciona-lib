import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcPageShellComponent } from '../page-shell';

@Component({
  selector: 'ac-form-template',
  standalone: true,
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcPageShellComponent]
})
export class AcFormTemplateComponent {
  @Input() title = 'Formulario';
}

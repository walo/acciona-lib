import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AcSettingsTemplateComponent } from '../../templates/settings-template';
import { AcFormFieldComponent } from '../../molecules/form-field';
import { AcInputComponent } from '../../atoms/input';

@Component({
  selector: 'ac-settings-page',
  standalone: true,
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcSettingsTemplateComponent, AcFormFieldComponent, AcInputComponent]
})
export class AcSettingsPageComponent {}

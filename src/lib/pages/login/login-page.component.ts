import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AcAuthLayoutComponent } from '../../templates/auth-layout';
import { AcInputComponent } from '../../atoms/input';
import { AcButtonComponent } from '../../atoms/button';

@Component({
  selector: 'ac-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcAuthLayoutComponent, AcInputComponent, AcButtonComponent]
})
export class AcLoginPageComponent {}

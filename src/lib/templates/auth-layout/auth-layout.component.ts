import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-auth-layout',
  standalone: true,
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcAuthLayoutComponent {
  @Input() backgroundVariant: 'solid' | 'gradient' | 'image' = 'gradient';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
  @Input() title = 'Bienvenido';
  @Input() subtitle = '';

  get layoutClass(): string {
    return `ac-auth-layout ac-auth-layout--${this.backgroundVariant} ac-auth-layout--${this.alignment}`;
  }
}

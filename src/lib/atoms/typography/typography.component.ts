import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-typography',
  standalone: true,
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcTypographyComponent {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption' = 'body';
  @Input() weight: 'regular' | 'medium' | 'semibold' | 'bold' = 'regular';

  get typographyClass(): string {
    return `ac-typography ac-typography--${this.variant} ac-typography--${this.weight}`;
  }
}

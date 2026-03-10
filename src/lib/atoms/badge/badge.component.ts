import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcBadgeComponent {
  @Input() variant: 'neutral' | 'success' | 'warning' | 'danger' | 'info' = 'neutral';
  @Input() size: 'sm' | 'md' = 'md';

  get badgeClass(): string {
    return `ac-badge ac-badge--${this.variant} ac-badge--${this.size}`;
  }
}

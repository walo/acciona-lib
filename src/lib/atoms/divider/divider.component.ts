import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcDividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() dashed = false;

  get dividerClass(): string {
    const dashedClass = this.dashed ? ' ac-divider--dashed' : '';
    return `ac-divider ac-divider--${this.orientation}${dashedClass}`;
  }
}

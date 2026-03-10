import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcTooltipComponent {
  @Input({ required: true }) text!: string;
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
}

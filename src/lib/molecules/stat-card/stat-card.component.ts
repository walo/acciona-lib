import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcStatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() trend = '';
}

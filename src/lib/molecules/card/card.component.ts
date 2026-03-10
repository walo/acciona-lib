import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() showActions = false;
  @Input() showFooter = false;

  get showHeader(): boolean {
    return !!(this.title || this.description || this.showActions);
  }
}

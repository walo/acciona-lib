import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-action-group',
  standalone: true,
  templateUrl: './action-group.component.html',
  styleUrls: ['./action-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcActionGroupComponent {
  @Input() align: 'start' | 'end' = 'start';

  get groupClass(): string {
    return `ac-action-group ac-action-group--${this.align}`;
  }
}

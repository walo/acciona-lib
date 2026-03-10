import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcIconComponent {
  @Input({ required: true }) name!: string;
  @Input() size = 16;
  @Input() spin = false;

  get iconClass(): string {
    const spinClass = this.spin ? ' ac-icon--spin' : '';
    return `ac-icon ac-icon--${this.name}${spinClass}`;
  }
}

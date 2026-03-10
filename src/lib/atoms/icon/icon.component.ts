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
  @Input() spritePath = '/assets/acciona-ui-lib/icons.svg';

  get iconClass(): string {
    return this.spin ? 'ac-icon ac-icon--spin' : 'ac-icon';
  }

  get iconHref(): string {
    return ${this.spritePath}#;
  }
}

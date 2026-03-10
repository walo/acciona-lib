import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcAvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() initials = '';
  @Input() imageUrl = '';

  get avatarClass(): string {
    return `ac-avatar ac-avatar--${this.size}`;
  }
}

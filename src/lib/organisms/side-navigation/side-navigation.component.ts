import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface AcSideNavItem {
  label: string;
  href?: string;
  active?: boolean;
}

@Component({
  selector: 'ac-side-navigation',
  standalone: true,
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcSideNavigationComponent {
  @Input() items: AcSideNavItem[] = [];
}

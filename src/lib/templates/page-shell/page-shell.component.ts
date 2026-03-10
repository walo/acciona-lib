import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcAppHeaderComponent } from '../../organisms/app-header';

@Component({
  selector: 'ac-page-shell',
  standalone: true,
  templateUrl: './page-shell.component.html',
  styleUrls: ['./page-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcAppHeaderComponent]
})
export class AcPageShellComponent {
  @Input() hasSidebar = false;
  @Input() hasTopbar = true;
  @Input() maxContentWidth: 'fluid' | 'xl' | '2xl' = 'xl';
  @Input() title = '';

  get contentClass(): string {
    return `ac-page-shell__content ac-page-shell__content--${this.maxContentWidth}`;
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-sidebar-drawer',
  standalone: true,
  templateUrl: './sidebar-drawer.component.html',
  styleUrls: ['./sidebar-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcSidebarDrawerComponent {
  @Input() open = false;
  @Input() title = '';

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcButtonComponent } from '../../atoms/button';
import { AcIconComponent } from '../../atoms/icon';
import { AcSearchBoxComponent } from '../../molecules/search-box';

@Component({
  selector: 'ac-app-header',
  standalone: true,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcButtonComponent, AcIconComponent, AcSearchBoxComponent]
})
export class AcAppHeaderComponent {
  @Input() productName = 'Producto';
  @Input() showNotifications = true;
  @Input() showProfile = true;
  @Input() showSearch = false;

  @Output() notificationClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  onNotification(): void {
    this.notificationClick.emit();
  }

  onProfile(): void {
    this.profileClick.emit();
  }

  onSearch(query: string): void {
    this.search.emit(query);
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcButtonComponent } from '../../atoms/button';
import { AcIconComponent } from '../../atoms/icon';
import { AcSearchBoxComponent } from '../../molecules/search-box';

@Component({
  selector: 'ac-table-toolbar',
  standalone: true,
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AcButtonComponent, AcIconComponent, AcSearchBoxComponent]
})
export class AcTableToolbarComponent {
  @Input() title = '';
  @Input() showSearch = true;
  @Input() showExport = true;
  @Input() showSettings = true;
  @Input() showFilters = false;

  @Output() search = new EventEmitter<string>();
  @Output() exportClick = new EventEmitter<void>();
  @Output() settingsClick = new EventEmitter<void>();
  @Output() filtersClick = new EventEmitter<void>();

  onSearch(query: string): void {
    this.search.emit(query);
  }

  onExport(): void {
    this.exportClick.emit();
  }

  onSettings(): void {
    this.settingsClick.emit();
  }

  onFilters(): void {
    this.filtersClick.emit();
  }
}

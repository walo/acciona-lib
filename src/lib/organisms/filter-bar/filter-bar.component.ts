import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcSearchBoxComponent } from '../../molecules/search-box';

@Component({
  selector: 'ac-filter-bar',
  standalone: true,
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcSearchBoxComponent]
})
export class AcFilterBarComponent {
  @Input() title = '';
  @Input() showSearch = true;

  @Output() search = new EventEmitter<string>();

  onSearch(query: string): void {
    this.search.emit(query);
  }
}

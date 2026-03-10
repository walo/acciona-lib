import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcPaginationComponent {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() total = 0;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  prev(): void {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }

  next(): void {
    if (this.page < this.totalPages) {
      this.pageChange.emit(this.page + 1);
    }
  }
}

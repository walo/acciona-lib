import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AcBreadcrumbItem } from './breadcrumb.types';

@Component({
  selector: 'ac-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AcBreadcrumbComponent {
  @Input() items: AcBreadcrumbItem[] = [];
}

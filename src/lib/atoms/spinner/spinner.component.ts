import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get spinnerClass(): string {
    return `ac-spinner ac-spinner--${this.size}`;
  }
}

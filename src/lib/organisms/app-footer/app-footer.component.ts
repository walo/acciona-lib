import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ac-app-footer',
  standalone: true,
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcAppFooterComponent {
  @Input() text = 'Acciona';
}

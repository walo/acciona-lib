import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AcButtonComponent } from '../../atoms/button';

@Component({
  selector: 'ac-file-upload',
  standalone: true,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AcButtonComponent]
})
export class AcFileUploadComponent {
  @Input() label = 'Subir archivo';
  @Input() accept = '';
  @Input() disabled = false;

  @Output() fileSelected = new EventEmitter<File | null>();

  fileName = '';

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const file = target?.files?.[0] ?? null;
    this.fileName = file?.name ?? '';
    this.fileSelected.emit(file);
  }
}

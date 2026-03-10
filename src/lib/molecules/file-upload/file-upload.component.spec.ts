import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcFileUploadComponent } from './file-upload.component';

describe('AcFileUploadComponent', () => {
  let component: AcFileUploadComponent;
  let fixture: ComponentFixture<AcFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFileUploadComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

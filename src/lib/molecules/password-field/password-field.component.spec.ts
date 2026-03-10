import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcPasswordFieldComponent } from './password-field.component';

describe('AcPasswordFieldComponent', () => {
  let component: AcPasswordFieldComponent;
  let fixture: ComponentFixture<AcPasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcPasswordFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

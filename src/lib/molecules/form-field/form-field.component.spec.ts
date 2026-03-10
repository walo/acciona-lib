import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcFormFieldComponent } from './form-field.component';

describe('AcFormFieldComponent', () => {
  let component: AcFormFieldComponent;
  let fixture: ComponentFixture<AcFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFormFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcFormFieldComponent);
    component = fixture.componentInstance;
    component.label = 'Email';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcDatePickerComponent } from './date-picker.component';

describe('AcDatePickerComponent', () => {
  let component: AcDatePickerComponent;
  let fixture: ComponentFixture<AcDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDatePickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

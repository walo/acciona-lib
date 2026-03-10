import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcStepperComponent } from './stepper.component';

describe('AcStepperComponent', () => {
  let component: AcStepperComponent;
  let fixture: ComponentFixture<AcStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcStepperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcStepperComponent);
    component = fixture.componentInstance;
    component.steps = ['A', 'B'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

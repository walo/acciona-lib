import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcWizardComponent } from './wizard.component';

describe('AcWizardComponent', () => {
  let component: AcWizardComponent;
  let fixture: ComponentFixture<AcWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcWizardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcWizardComponent);
    component = fixture.componentInstance;
    component.steps = ['A'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

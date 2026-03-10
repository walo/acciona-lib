import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcWizardTemplateComponent } from './wizard-template.component';

describe('AcWizardTemplateComponent', () => {
  let component: AcWizardTemplateComponent;
  let fixture: ComponentFixture<AcWizardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcWizardTemplateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcWizardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcFormTemplateComponent } from './form-template.component';

describe('AcFormTemplateComponent', () => {
  let component: AcFormTemplateComponent;
  let fixture: ComponentFixture<AcFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFormTemplateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

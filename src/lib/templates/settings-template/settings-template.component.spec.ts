import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSettingsTemplateComponent } from './settings-template.component';

describe('AcSettingsTemplateComponent', () => {
  let component: AcSettingsTemplateComponent;
  let fixture: ComponentFixture<AcSettingsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSettingsTemplateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSettingsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

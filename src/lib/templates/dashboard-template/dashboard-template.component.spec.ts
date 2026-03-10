import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcDashboardTemplateComponent } from './dashboard-template.component';

describe('AcDashboardTemplateComponent', () => {
  let component: AcDashboardTemplateComponent;
  let fixture: ComponentFixture<AcDashboardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDashboardTemplateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDashboardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

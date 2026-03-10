import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcManagementTemplateComponent } from './management-template.component';

describe('AcManagementTemplateComponent', () => {
  let component: AcManagementTemplateComponent;
  let fixture: ComponentFixture<AcManagementTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcManagementTemplateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcManagementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

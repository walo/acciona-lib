import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcFormSectionComponent } from './form-section.component';

describe('AcFormSectionComponent', () => {
  let component: AcFormSectionComponent;
  let fixture: ComponentFixture<AcFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFormSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcFormSectionComponent);
    component = fixture.componentInstance;
    component.title = 'Perfil';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

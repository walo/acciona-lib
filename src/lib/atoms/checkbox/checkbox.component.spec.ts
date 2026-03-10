import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcCheckboxComponent } from './checkbox.component';

describe('AcCheckboxComponent', () => {
  let component: AcCheckboxComponent;
  let fixture: ComponentFixture<AcCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcCheckboxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

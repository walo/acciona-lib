import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcButtonComponent } from './button.component';

describe('AcButtonComponent', () => {
  let component: AcButtonComponent;
  let fixture: ComponentFixture<AcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

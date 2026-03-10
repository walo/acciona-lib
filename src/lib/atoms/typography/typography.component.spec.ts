import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcTypographyComponent } from './typography.component';

describe('AcTypographyComponent', () => {
  let component: AcTypographyComponent;
  let fixture: ComponentFixture<AcTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTypographyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

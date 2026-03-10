import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAuthLayoutComponent } from './auth-layout.component';

describe('AcAuthLayoutComponent', () => {
  let component: AcAuthLayoutComponent;
  let fixture: ComponentFixture<AcAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAuthLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

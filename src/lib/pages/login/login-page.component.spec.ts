import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcLoginPageComponent } from './login-page.component';

describe('AcLoginPageComponent', () => {
  let component: AcLoginPageComponent;
  let fixture: ComponentFixture<AcLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcLoginPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

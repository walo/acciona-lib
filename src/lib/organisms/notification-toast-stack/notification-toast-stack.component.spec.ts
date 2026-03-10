import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcNotificationToastStackComponent } from './notification-toast-stack.component';

describe('AcNotificationToastStackComponent', () => {
  let component: AcNotificationToastStackComponent;
  let fixture: ComponentFixture<AcNotificationToastStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcNotificationToastStackComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcNotificationToastStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

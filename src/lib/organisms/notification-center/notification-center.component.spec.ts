import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcNotificationCenterComponent } from './notification-center.component';

describe('AcNotificationCenterComponent', () => {
  let component: AcNotificationCenterComponent;
  let fixture: ComponentFixture<AcNotificationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcNotificationCenterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcNotificationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

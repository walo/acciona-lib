import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAlertComponent } from './alert.component';

describe('AcAlertComponent', () => {
  let component: AcAlertComponent;
  let fixture: ComponentFixture<AcAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAlertComponent);
    component = fixture.componentInstance;
    component.title = 'Info';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

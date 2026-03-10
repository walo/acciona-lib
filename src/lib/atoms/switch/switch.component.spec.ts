import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSwitchComponent } from './switch.component';

describe('AcSwitchComponent', () => {
  let component: AcSwitchComponent;
  let fixture: ComponentFixture<AcSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSwitchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcTooltipComponent } from './tooltip.component';

describe('AcTooltipComponent', () => {
  let component: AcTooltipComponent;
  let fixture: ComponentFixture<AcTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTooltipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcTooltipComponent);
    component = fixture.componentInstance;
    component.text = 'Info';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

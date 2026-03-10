import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcDateRangeComponent } from './date-range.component';

describe('AcDateRangeComponent', () => {
  let component: AcDateRangeComponent;
  let fixture: ComponentFixture<AcDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDateRangeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

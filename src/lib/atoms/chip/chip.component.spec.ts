import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcChipComponent } from './chip.component';

describe('AcChipComponent', () => {
  let component: AcChipComponent;
  let fixture: ComponentFixture<AcChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcChipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

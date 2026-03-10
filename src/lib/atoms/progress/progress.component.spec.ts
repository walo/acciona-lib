import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcProgressComponent } from './progress.component';

describe('AcProgressComponent', () => {
  let component: AcProgressComponent;
  let fixture: ComponentFixture<AcProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcProgressComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcBadgeComponent } from './badge.component';

describe('AcBadgeComponent', () => {
  let component: AcBadgeComponent;
  let fixture: ComponentFixture<AcBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcBadgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

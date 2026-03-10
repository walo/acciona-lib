import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcDividerComponent } from './divider.component';

describe('AcDividerComponent', () => {
  let component: AcDividerComponent;
  let fixture: ComponentFixture<AcDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDividerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

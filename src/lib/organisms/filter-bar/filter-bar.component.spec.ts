import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcFilterBarComponent } from './filter-bar.component';

describe('AcFilterBarComponent', () => {
  let component: AcFilterBarComponent;
  let fixture: ComponentFixture<AcFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFilterBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

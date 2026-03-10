import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcMultiSelectComponent } from './multi-select.component';

describe('AcMultiSelectComponent', () => {
  let component: AcMultiSelectComponent;
  let fixture: ComponentFixture<AcMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcMultiSelectComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

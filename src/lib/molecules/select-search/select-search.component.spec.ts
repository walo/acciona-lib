import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSelectSearchComponent } from './select-search.component';

describe('AcSelectSearchComponent', () => {
  let component: AcSelectSearchComponent;
  let fixture: ComponentFixture<AcSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSelectSearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcTableComponent } from './table.component';

describe('AcTableComponent', () => {
  let component: AcTableComponent;
  let fixture: ComponentFixture<AcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

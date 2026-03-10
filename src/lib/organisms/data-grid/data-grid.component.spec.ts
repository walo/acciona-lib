import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcDataGridComponent } from './data-grid.component';

describe('AcDataGridComponent', () => {
  let component: AcDataGridComponent;
  let fixture: ComponentFixture<AcDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDataGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAdvancedTableComponent } from './advanced-table.component';

describe('AcAdvancedTableComponent', () => {
  let component: AcAdvancedTableComponent;
  let fixture: ComponentFixture<AcAdvancedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAdvancedTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAdvancedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

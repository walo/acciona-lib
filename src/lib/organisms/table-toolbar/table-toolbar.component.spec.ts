import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcTableToolbarComponent } from './table-toolbar.component';

describe('AcTableToolbarComponent', () => {
  let component: AcTableToolbarComponent;
  let fixture: ComponentFixture<AcTableToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTableToolbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcTableToolbarComponent);
    component = fixture.componentInstance;
    component.title = 'Tabla';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

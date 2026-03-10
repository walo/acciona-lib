import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcStatCardComponent } from './stat-card.component';

describe('AcStatCardComponent', () => {
  let component: AcStatCardComponent;
  let fixture: ComponentFixture<AcStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcStatCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcStatCardComponent);
    component = fixture.componentInstance;
    component.title = 'Ingresos';
    component.value = '$1.2M';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

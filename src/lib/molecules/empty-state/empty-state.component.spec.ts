import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcEmptyStateComponent } from './empty-state.component';

describe('AcEmptyStateComponent', () => {
  let component: AcEmptyStateComponent;
  let fixture: ComponentFixture<AcEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcEmptyStateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcEmptyStateComponent);
    component = fixture.componentInstance;
    component.title = 'Sin resultados';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

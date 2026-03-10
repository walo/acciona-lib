import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcInputGroupComponent } from './input-group.component';

describe('AcInputGroupComponent', () => {
  let component: AcInputGroupComponent;
  let fixture: ComponentFixture<AcInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcInputGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

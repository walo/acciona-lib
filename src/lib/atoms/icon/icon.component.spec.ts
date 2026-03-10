import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcIconComponent } from './icon.component';

describe('AcIconComponent', () => {
  let component: AcIconComponent;
  let fixture: ComponentFixture<AcIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcIconComponent);
    component = fixture.componentInstance;
    component.name = 'check';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

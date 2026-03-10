import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcTagComponent } from './tag.component';

describe('AcTagComponent', () => {
  let component: AcTagComponent;
  let fixture: ComponentFixture<AcTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTagComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

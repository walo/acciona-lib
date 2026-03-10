import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAppFooterComponent } from './app-footer.component';

describe('AcAppFooterComponent', () => {
  let component: AcAppFooterComponent;
  let fixture: ComponentFixture<AcAppFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAppFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

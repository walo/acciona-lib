import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAppHeaderComponent } from './app-header.component';

describe('AcAppHeaderComponent', () => {
  let component: AcAppHeaderComponent;
  let fixture: ComponentFixture<AcAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAppHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

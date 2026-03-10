import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcPageShellComponent } from './page-shell.component';

describe('AcPageShellComponent', () => {
  let component: AcPageShellComponent;
  let fixture: ComponentFixture<AcPageShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcPageShellComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcPageShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

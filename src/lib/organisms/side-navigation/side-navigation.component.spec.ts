import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSideNavigationComponent } from './side-navigation.component';

describe('AcSideNavigationComponent', () => {
  let component: AcSideNavigationComponent;
  let fixture: ComponentFixture<AcSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSideNavigationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

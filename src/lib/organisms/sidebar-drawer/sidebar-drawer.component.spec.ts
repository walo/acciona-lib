import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSidebarDrawerComponent } from './sidebar-drawer.component';

describe('AcSidebarDrawerComponent', () => {
  let component: AcSidebarDrawerComponent;
  let fixture: ComponentFixture<AcSidebarDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSidebarDrawerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSidebarDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcBreadcrumbComponent } from './breadcrumb.component';

describe('AcBreadcrumbComponent', () => {
  let component: AcBreadcrumbComponent;
  let fixture: ComponentFixture<AcBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcBreadcrumbComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

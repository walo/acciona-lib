import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcActionGroupComponent } from './action-group.component';

describe('AcActionGroupComponent', () => {
  let component: AcActionGroupComponent;
  let fixture: ComponentFixture<AcActionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcActionGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcActionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

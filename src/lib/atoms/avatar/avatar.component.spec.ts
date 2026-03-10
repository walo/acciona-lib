import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAvatarComponent } from './avatar.component';

describe('AcAvatarComponent', () => {
  let component: AcAvatarComponent;
  let fixture: ComponentFixture<AcAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

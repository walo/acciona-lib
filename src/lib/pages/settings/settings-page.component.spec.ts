import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSettingsPageComponent } from './settings-page.component';

describe('AcSettingsPageComponent', () => {
  let component: AcSettingsPageComponent;
  let fixture: ComponentFixture<AcSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSettingsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

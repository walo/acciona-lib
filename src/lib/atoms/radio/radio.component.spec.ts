import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcRadioComponent } from './radio.component';

describe('AcRadioComponent', () => {
  let component: AcRadioComponent;
  let fixture: ComponentFixture<AcRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcRadioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcRadioComponent);
    component = fixture.componentInstance;
    component.name = 'group';
    component.value = 'a';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

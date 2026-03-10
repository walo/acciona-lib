import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcAutocompleteComponent } from './autocomplete.component';

describe('AcAutocompleteComponent', () => {
  let component: AcAutocompleteComponent;
  let fixture: ComponentFixture<AcAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcAutocompleteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

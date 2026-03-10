import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcSearchBoxComponent } from './search-box.component';

describe('AcSearchBoxComponent', () => {
  let component: AcSearchBoxComponent;
  let fixture: ComponentFixture<AcSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSearchBoxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcInlineEditComponent } from './inline-edit.component';

describe('AcInlineEditComponent', () => {
  let component: AcInlineEditComponent;
  let fixture: ComponentFixture<AcInlineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcInlineEditComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcInlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

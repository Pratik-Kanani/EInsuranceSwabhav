import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestCalculatorComponent } from './intrest-calculator.component';

describe('IntrestCalculatorComponent', () => {
  let component: IntrestCalculatorComponent;
  let fixture: ComponentFixture<IntrestCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrestCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

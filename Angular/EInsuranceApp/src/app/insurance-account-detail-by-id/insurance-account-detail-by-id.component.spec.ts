import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAccountDetailByIdComponent } from './insurance-account-detail-by-id.component';

describe('InsuranceAccountDetailByIdComponent', () => {
  let component: InsuranceAccountDetailByIdComponent;
  let fixture: ComponentFixture<InsuranceAccountDetailByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAccountDetailByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAccountDetailByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

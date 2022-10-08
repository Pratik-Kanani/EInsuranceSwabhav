import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommisionWithdrawalsComponent } from './view-commision-withdrawals.component';

describe('ViewCommisionWithdrawalsComponent', () => {
  let component: ViewCommisionWithdrawalsComponent;
  let fixture: ComponentFixture<ViewCommisionWithdrawalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommisionWithdrawalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommisionWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

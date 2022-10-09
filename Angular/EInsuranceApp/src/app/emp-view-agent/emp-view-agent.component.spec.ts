import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewAgentComponent } from './emp-view-agent.component';

describe('EmpViewAgentComponent', () => {
  let component: EmpViewAgentComponent;
  let fixture: ComponentFixture<EmpViewAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpViewAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpViewAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

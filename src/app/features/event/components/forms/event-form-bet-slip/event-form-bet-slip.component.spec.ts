import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormBetSlipComponent } from './event-form-bet-slip.component';

describe('EventFormBetSlipComponent', () => {
  let component: EventFormBetSlipComponent;
  let fixture: ComponentFixture<EventFormBetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFormBetSlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventFormBetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

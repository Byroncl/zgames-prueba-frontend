import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormModalBetSlipComponent } from './event-form-modal-bet-slip.component';

describe('EventFormModalBetSlipComponent', () => {
  let component: EventFormModalBetSlipComponent;
  let fixture: ComponentFixture<EventFormModalBetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFormModalBetSlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventFormModalBetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

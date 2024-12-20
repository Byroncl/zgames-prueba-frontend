import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilterFormComponent } from './event-filter-form.component';

describe('EventFilterFormComponent', () => {
  let component: EventFilterFormComponent;
  let fixture: ComponentFixture<EventFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFilterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

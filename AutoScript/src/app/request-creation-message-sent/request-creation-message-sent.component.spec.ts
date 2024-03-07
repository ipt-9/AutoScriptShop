import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreationMessageSentComponent } from './request-creation-message-sent.component';

describe('RequestCreationMessageSentComponent', () => {
  let component: RequestCreationMessageSentComponent;
  let fixture: ComponentFixture<RequestCreationMessageSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestCreationMessageSentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCreationMessageSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

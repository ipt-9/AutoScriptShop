import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestServiceMessageComponent } from './request-service-message.component';

describe('RequestServiceMessageComponent', () => {
  let component: RequestServiceMessageComponent;
  let fixture: ComponentFixture<RequestServiceMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestServiceMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestServiceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

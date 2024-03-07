import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsSpecificComponent } from './requests-specific.component';

describe('RequestsSpecificComponent', () => {
  let component: RequestsSpecificComponent;
  let fixture: ComponentFixture<RequestsSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestsSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

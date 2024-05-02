import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSpesificComponent } from './request-spesific.component';

describe('RequestSpesificComponent', () => {
  let component: RequestSpesificComponent;
  let fixture: ComponentFixture<RequestSpesificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestSpesificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestSpesificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

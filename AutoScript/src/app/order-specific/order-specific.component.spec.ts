import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSpecificComponent } from './order-specific.component';

describe('OrderSpecificComponent', () => {
  let component: OrderSpecificComponent;
  let fixture: ComponentFixture<OrderSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

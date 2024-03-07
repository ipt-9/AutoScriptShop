import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAsGuestMessageComponent } from './buy-as-guest-message.component';

describe('BuyAsGuestMessageComponent', () => {
  let component: BuyAsGuestMessageComponent;
  let fixture: ComponentFixture<BuyAsGuestMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyAsGuestMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAsGuestMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

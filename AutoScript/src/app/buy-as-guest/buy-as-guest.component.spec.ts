import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAsGuestComponent } from './buy-as-guest.component';

describe('BuyAsGuestComponent', () => {
  let component: BuyAsGuestComponent;
  let fixture: ComponentFixture<BuyAsGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyAsGuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

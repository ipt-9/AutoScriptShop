import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryExtendedComponent } from './purchase-history-extended.component';

describe('PurchaseHistoryExtendedComponent', () => {
  let component: PurchaseHistoryExtendedComponent;
  let fixture: ComponentFixture<PurchaseHistoryExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseHistoryExtendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseHistoryExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

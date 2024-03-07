import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificComponent } from './product-specific.component';

describe('ProductSpecificComponent', () => {
  let component: ProductSpecificComponent;
  let fixture: ComponentFixture<ProductSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

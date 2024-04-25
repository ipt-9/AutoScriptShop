import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpesificComponent } from './product-spesific.component';

describe('ProductSpesificComponent', () => {
  let component: ProductSpesificComponent;
  let fixture: ComponentFixture<ProductSpesificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSpesificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSpesificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

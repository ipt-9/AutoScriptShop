import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcreatedsucsessfullyComponent } from './productcreatedsucsessfully.component';

describe('ProductcreatedsucsessfullyComponent', () => {
  let component: ProductcreatedsucsessfullyComponent;
  let fixture: ComponentFixture<ProductcreatedsucsessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcreatedsucsessfullyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcreatedsucsessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

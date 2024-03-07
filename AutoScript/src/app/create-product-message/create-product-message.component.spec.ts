import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductMessageComponent } from './create-product-message.component';

describe('CreateProductMessageComponent', () => {
  let component: CreateProductMessageComponent;
  let fixture: ComponentFixture<CreateProductMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProductMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

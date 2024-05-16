import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  standalone: true,
  styleUrls: ['./product-box.component.scss']
})

export class ProductBoxComponent{
  @Input() product: any;
  @Output() productClicked = new EventEmitter<number>()
  image = '../../assets/Images/Productimage.png';
  title = "hello";
  price = "665.9"
  description = "Solo lonell"
  constructor() {}

  onClick() {
    this.productClicked.emit(this.product.id)
  }
}

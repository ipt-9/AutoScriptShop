import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-request-box',
  standalone: true,
  imports: [],
  templateUrl: './request-box.component.html',
  styleUrl: './request-box.component.scss'
})

export class RequestBoxComponent{
  @Input() request: any;
  @Output() requestClicked = new EventEmitter<number>()

  constructor() {}

  onClick() {
    this.requestClicked.emit(this.request.id)
  }
}

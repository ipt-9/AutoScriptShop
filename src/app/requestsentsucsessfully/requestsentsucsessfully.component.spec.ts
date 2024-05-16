import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsentsucsessfullyComponent } from './requestsentsucsessfully.component';

describe('RequestsentsucsessfullyComponent', () => {
  let component: RequestsentsucsessfullyComponent;
  let fixture: ComponentFixture<RequestsentsucsessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsentsucsessfullyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsentsucsessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHub3Component } from './user-hub-3.component';

describe('UserHub3Component', () => {
  let component: UserHub3Component;
  let fixture: ComponentFixture<UserHub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHub3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

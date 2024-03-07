import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHub2Component } from './user-hub-2.component';

describe('UserHub2Component', () => {
  let component: UserHub2Component;
  let fixture: ComponentFixture<UserHub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHub2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

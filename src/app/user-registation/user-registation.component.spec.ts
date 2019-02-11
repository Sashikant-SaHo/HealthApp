import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistationComponent } from './user-registation.component';

describe('UserRegistationComponent', () => {
  let component: UserRegistationComponent;
  let fixture: ComponentFixture<UserRegistationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

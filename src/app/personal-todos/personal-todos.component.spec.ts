import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTodosComponent } from './personal-todos.component';

describe('PersonalTodosComponent', () => {
  let component: PersonalTodosComponent;
  let fixture: ComponentFixture<PersonalTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTodosComponent } from './work-todos.component';

describe('WorkTodosComponent', () => {
  let component: WorkTodosComponent;
  let fixture: ComponentFixture<WorkTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

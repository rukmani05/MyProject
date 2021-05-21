import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdComponent } from './add-std.component';

describe('AddStdComponent', () => {
  let component: AddStdComponent;
  let fixture: ComponentFixture<AddStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

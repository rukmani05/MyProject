import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStdComponent } from './edit-std.component';

describe('EditStdComponent', () => {
  let component: EditStdComponent;
  let fixture: ComponentFixture<EditStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

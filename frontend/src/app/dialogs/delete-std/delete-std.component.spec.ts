import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStdComponent } from './delete-std.component';

describe('DeleteStdComponent', () => {
  let component: DeleteStdComponent;
  let fixture: ComponentFixture<DeleteStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

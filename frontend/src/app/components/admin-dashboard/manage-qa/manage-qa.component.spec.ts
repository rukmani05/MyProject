import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQAComponent } from './manage-qa.component';

describe('ManageQAComponent', () => {
  let component: ManageQAComponent;
  let fixture: ComponentFixture<ManageQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

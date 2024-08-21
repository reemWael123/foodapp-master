import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserRecComponent } from './viewuser-rec.component';

describe('ViewuserRecComponent', () => {
  let component: ViewuserRecComponent;
  let fixture: ComponentFixture<ViewuserRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserRecComponent]
    });
    fixture = TestBed.createComponent(ViewuserRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

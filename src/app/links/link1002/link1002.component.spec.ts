import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1002Component } from './link1002.component';

describe('Link1002Component', () => {
  let component: Link1002Component;
  let fixture: ComponentFixture<Link1002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

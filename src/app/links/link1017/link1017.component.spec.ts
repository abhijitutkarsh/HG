import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1017Component } from './link1017.component';

describe('Link1017Component', () => {
  let component: Link1017Component;
  let fixture: ComponentFixture<Link1017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

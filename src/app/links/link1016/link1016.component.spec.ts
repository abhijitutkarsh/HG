import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1016Component } from './link1016.component';

describe('Link1016Component', () => {
  let component: Link1016Component;
  let fixture: ComponentFixture<Link1016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1008Component } from './link1008.component';

describe('Link1008Component', () => {
  let component: Link1008Component;
  let fixture: ComponentFixture<Link1008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

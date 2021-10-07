import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1011Component } from './link1011.component';

describe('Link1011Component', () => {
  let component: Link1011Component;
  let fixture: ComponentFixture<Link1011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

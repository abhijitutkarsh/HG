import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1018Component } from './link1018.component';

describe('Link1018Component', () => {
  let component: Link1018Component;
  let fixture: ComponentFixture<Link1018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

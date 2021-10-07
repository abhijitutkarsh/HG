import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1019Component } from './link1019.component';

describe('Link1019Component', () => {
  let component: Link1019Component;
  let fixture: ComponentFixture<Link1019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

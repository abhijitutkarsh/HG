import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1007Component } from './link1007.component';

describe('Link1007Component', () => {
  let component: Link1007Component;
  let fixture: ComponentFixture<Link1007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

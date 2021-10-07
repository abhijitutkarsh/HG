import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1020Component } from './link1020.component';

describe('Link1020Component', () => {
  let component: Link1020Component;
  let fixture: ComponentFixture<Link1020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

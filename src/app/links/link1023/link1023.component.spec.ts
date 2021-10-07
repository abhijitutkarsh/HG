import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1023Component } from './link1023.component';

describe('Link1023Component', () => {
  let component: Link1023Component;
  let fixture: ComponentFixture<Link1023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

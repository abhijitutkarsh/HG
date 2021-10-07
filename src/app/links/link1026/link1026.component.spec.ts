import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1026Component } from './link1026.component';

describe('Link1026Component', () => {
  let component: Link1026Component;
  let fixture: ComponentFixture<Link1026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1026Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

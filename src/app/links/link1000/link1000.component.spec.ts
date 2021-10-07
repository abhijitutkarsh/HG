import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1000Component } from './link1000.component';

describe('Link1000Component', () => {
  let component: Link1000Component;
  let fixture: ComponentFixture<Link1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

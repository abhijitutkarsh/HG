import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1024Component } from './link1024.component';

describe('Link1024Component', () => {
  let component: Link1024Component;
  let fixture: ComponentFixture<Link1024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

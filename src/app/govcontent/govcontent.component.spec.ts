import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovcontentComponent } from './govcontent.component';

describe('GovcontentComponent', () => {
  let component: GovcontentComponent;
  let fixture: ComponentFixture<GovcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

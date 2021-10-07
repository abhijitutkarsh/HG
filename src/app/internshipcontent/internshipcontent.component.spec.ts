import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipcontentComponent } from './internshipcontent.component';

describe('InternshipcontentComponent', () => {
  let component: InternshipcontentComponent;
  let fixture: ComponentFixture<InternshipcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

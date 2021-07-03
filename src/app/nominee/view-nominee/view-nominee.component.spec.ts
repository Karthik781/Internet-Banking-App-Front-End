import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNomineeComponent } from './view-nominee.component';

describe('ViewNomineeComponent', () => {
  let component: ViewNomineeComponent;
  let fixture: ComponentFixture<ViewNomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNomineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

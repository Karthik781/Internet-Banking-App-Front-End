import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNomineeComponent } from './list-nominee.component';

describe('ListNomineeComponent', () => {
  let component: ListNomineeComponent;
  let fixture: ComponentFixture<ListNomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNomineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

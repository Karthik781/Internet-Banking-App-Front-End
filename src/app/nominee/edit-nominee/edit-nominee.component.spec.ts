import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNomineeComponent } from './edit-nominee.component';

describe('EditNomineeComponent', () => {
  let component: EditNomineeComponent;
  let fixture: ComponentFixture<EditNomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNomineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

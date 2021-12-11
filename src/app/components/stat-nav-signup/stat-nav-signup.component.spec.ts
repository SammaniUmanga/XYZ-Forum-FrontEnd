import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatNavSignupComponent } from './stat-nav-signup.component';

describe('StatNavSignupComponent', () => {
  let component: StatNavSignupComponent;
  let fixture: ComponentFixture<StatNavSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatNavSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatNavSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

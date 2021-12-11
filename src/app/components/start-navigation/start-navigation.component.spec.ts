import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNavigationComponent } from './start-navigation.component';

describe('StartNavigationComponent', () => {
  let component: StartNavigationComponent;
  let fixture: ComponentFixture<StartNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

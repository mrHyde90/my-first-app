import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWork3Component } from './home-work3.component';

describe('HomeWork3Component', () => {
  let component: HomeWork3Component;
  let fixture: ComponentFixture<HomeWork3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWork3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWork3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

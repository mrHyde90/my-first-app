import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServitoComponent } from './servito.component';

describe('ServitoComponent', () => {
  let component: ServitoComponent;
  let fixture: ComponentFixture<ServitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

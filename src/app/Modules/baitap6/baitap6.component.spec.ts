import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap6Component } from './baitap6.component';

describe('Baitap6Component', () => {
  let component: Baitap6Component;
  let fixture: ComponentFixture<Baitap6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

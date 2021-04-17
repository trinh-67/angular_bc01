import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAngularComponent } from './demo-angular.component';

describe('DemoAngularComponent', () => {
  let component: DemoAngularComponent;
  let fixture: ComponentFixture<DemoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

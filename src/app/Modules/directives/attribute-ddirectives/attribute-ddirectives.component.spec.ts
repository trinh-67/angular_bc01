import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDdirectivesComponent } from './attribute-ddirectives.component';

describe('AttributeDdirectivesComponent', () => {
  let component: AttributeDdirectivesComponent;
  let fixture: ComponentFixture<AttributeDdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDdirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

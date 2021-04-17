import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapLayOutComponent } from './bai-tap-lay-out.component';

describe('BaiTapLayOutComponent', () => {
  let component: BaiTapLayOutComponent;
  let fixture: ComponentFixture<BaiTapLayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapLayOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

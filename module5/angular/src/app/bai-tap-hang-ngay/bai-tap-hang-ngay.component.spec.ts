import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapHangNgayComponent } from './bai-tap-hang-ngay.component';

describe('BaiTapHangNgayComponent', () => {
  let component: BaiTapHangNgayComponent;
  let fixture: ComponentFixture<BaiTapHangNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapHangNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapHangNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

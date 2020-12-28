import { Component, OnInit } from '@angular/core';
import {IStudent} from './model/IStudent';

@Component({
  selector: 'app-bai-tap-hang-ngay',
  templateUrl: './bai-tap-hang-ngay.component.html',
  styleUrls: ['./bai-tap-hang-ngay.component.scss']
})
export class BaiTapHangNgayComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Hoàng Tứ',
    address: 'Quảng nam',
    age: 21,
    mark: 0,
    avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=L3_hHawJj70AX-uMdR6&_nc_ht=scontent.fsgn2-5.fna&oh=eb8e9551456f246412550151e49ea0db&oe=600CADAD'
  }
  constructor() { }

  ngOnInit(): void {
  }

  getMark(value: number) {
    this.student.mark = value;
  }

  getAge(value: number) {
    this.student.age = value;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  @Input()
  student: IStudent;
  constructor() { }

  ngOnInit(): void {
  }

  getAge(value: any) {
    this.student.age = value;
  }
}

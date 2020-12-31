import {Component, OnInit} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import { StudentService } from '../../service/StudentService';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentService]

})
export class StudentListComponent implements OnInit {

  students;
  studentList: IStudent[];

  constructor(
    private studentService: StudentService,
  ) {
    this.studentService.getAll().toPromise().then(data => {
      this.studentList = data;
    });
  }

  ngOnInit(): void {
  }

  studentDetail(student: IStudent) {
    this.students = student;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../service/StudentService';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
  providers: [StudentService]
})
export class StudentCreateComponent implements OnInit {
  @Input()
  studentCreate: IStudent;

  constructor(
    private studentService: StudentService,
  ) {
    // this.studentService.create().toPromise().then(data => {
    //   this.students = data;
    // })
  }

  ngOnInit(): void {
  }

  onCreate(formCreate) {
    console.log(formCreate)

  }
}

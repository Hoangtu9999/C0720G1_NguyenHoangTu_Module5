import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentService} from '../../service/StudentService';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
  providers: [StudentService]
})
export class StudentEditComponent implements OnInit {
  @Input()
  studentEdit: IStudent;

  formGroup: FormGroup;
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        id: new FormControl('', [Validators.required, Validators.min(10)]),
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        mark: new FormControl('', [Validators.required]),
        avatar: new FormControl('', [Validators.required]),
      }
    );
  }

  saveStudent() {
    this.studentService.create(this.formGroup.value).subscribe(data => {
    });
  }
}

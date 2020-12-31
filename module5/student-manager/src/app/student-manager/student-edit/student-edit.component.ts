import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentService} from '../../service/StudentService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
  providers: [StudentService]
})
export class StudentEditComponent implements OnInit {

  studentEdit: IStudent;

  formGroup: FormGroup;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        id: new FormControl('', [Validators.required, Validators.min(10)]),
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        mark: new FormControl('', [Validators.required]),
        // avatar: new FormControl('', [Validators.required]),
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.studentService.getById(paramMap.get('id')).subscribe((data: IStudent) => {
        this.formGroup.patchValue(data);
      });
    });
  }

  updateStudent() {
    this.studentService.update(this.formGroup.value.id,this.formGroup.value).subscribe(data => {
    });
  }

}

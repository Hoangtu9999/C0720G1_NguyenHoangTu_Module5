// @ts-ignore
import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../../service/StudentService';
import {IStudent} from '../../model/IStudent';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
  providers: [StudentService]
})
export class StudentCreateComponent implements OnInit {
  @Input()
  studentCreate: IStudent[];

  fileToUpload: File = null;

  formGroup: FormGroup;

  constructor(
    private studentService: StudentService,
    private storage:  AngularFireStorage) {
  }

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


  onFileSelected(event) {
    if (event.target.files.length !== 1) {
      console.error('No file selected');
    } else {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        // handle data processing
        console.log(reader.result.toString());
      };
      reader.readAsText(event.target.files[0]);
    }
  }
}

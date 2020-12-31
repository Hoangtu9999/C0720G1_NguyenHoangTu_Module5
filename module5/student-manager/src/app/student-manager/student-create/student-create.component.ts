import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../../service/StudentService';
import {IStudent} from '../../model/IStudent';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
  providers: [StudentService]
})
export class StudentCreateComponent implements OnInit {
  @Input()
  studentCreate: IStudent[];
  url = '';
  path: string;

  formGroup: FormGroup;

  constructor(
    private studentService: StudentService,
    private storage: AngularFireStorage,
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
        avatar: new FormControl(''),
      }
    );
  }

  saveStudent() {
    const date = new Date();
    const fileRef = this.storage.ref('files/' + date.getTime());
    const task = this.storage.upload('files/' + date.getTime() + '', this.path);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            if (url) {
              this.url = url;
              this.formGroup.controls.avatar.setValue(this.url);
              this.studentService.create(this.formGroup.value).subscribe(data=> {
              })
            }

          });
        })
      )
      .subscribe(url => {
        if (url) {

        }
      });

  }


  onFileSelected($event) {
    this.path = $event.target.files[0];
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IStudent} from '../../model/IStudent';
import {StudentService} from '../../service/StudentService';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent implements OnInit {

  constructor( private studentService: StudentService,
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.studentService.delete(paramMap.get('id')).subscribe(data => {
        this.router.navigateByUrl('student-list');
      });
    });
  }

}

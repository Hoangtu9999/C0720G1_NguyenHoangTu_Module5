import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: IStudent[] = [
    {id: 1, name: 'Hoang tu', age: 21, address: 'Quang nam', mark: 10, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 2, name: 'Hoang tu 1', age: 22, address: 'Quang nam', mark: 1, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 3, name: 'Hoang tu 2', age: 23, address: 'Quang nam', mark: 10, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 4, name: 'Hoang tu 3', age: 24, address: 'Quang nam', mark: 10, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 5, name: 'Hoang tu 4', age: 25, address: 'Quang nam', mark: 4, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 6, name: 'Hoang tu 5', age: 26, address: 'Quang nam', mark: 10, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 7, name: 'Hoang tu 6', age: 27, address: 'Quang nam', mark: 3, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
    {id: 8, name: 'Hoang tu 7', age: 28, address: 'Quang nam', mark: 10, avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/131410793_1107915046307945_7994980708310791805_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=KdcRsKZZ_nEAX8PpQGX&_nc_ht=scontent.fsgn2-5.fna&oh=c7de75b86ca44ec890ec7073e54b540b&oe=6010A22D'},
  ];
  students: IStudent;
  constructor() {
  }

  ngOnInit(): void {
  }

  studentDetail(student: IStudent) {
    this.students = student;
  }
}

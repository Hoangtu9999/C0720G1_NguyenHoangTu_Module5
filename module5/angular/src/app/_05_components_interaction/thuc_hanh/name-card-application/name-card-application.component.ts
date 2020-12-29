import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card-application',
  templateUrl: './name-card-application.component.html',
  styleUrls: ['./name-card-application.component.scss']
})
export class NameCardApplicationComponent implements OnInit {
  @Input()
  cardName: string;
  @Input()
  email: string;
  @Input()
  phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}

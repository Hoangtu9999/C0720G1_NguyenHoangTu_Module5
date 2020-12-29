import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar-application',
  templateUrl: './progress-bar-application.component.html',
  styleUrls: ['./progress-bar-application.component.scss']
})
export class ProgressBarApplicationComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  constructor() { }

  ngOnInit(): void {
  }

}

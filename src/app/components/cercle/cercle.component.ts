import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cercle',
  templateUrl: './cercle.component.html',
  styleUrls: ['./cercle.component.css']
})
export class CercleComponent implements OnInit {

  @Input()
  style: any;

  constructor() { }

  ngOnInit(): void {
  }

}

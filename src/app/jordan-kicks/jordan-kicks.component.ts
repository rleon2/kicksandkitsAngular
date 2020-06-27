import { Component, OnInit } from '@angular/core';
import { Kicks } from '../shared/kicks.model';

@Component({
  selector: 'app-jordan-kicks',
  templateUrl: './jordan-kicks.component.html',
  styleUrls: ['./jordan-kicks.component.css']
})
export class JordanKicksComponent implements OnInit {
  kicks: Kicks[] = [
    new Kicks('Air Jordan 1', 'No description required', 'White/Red', 'assets/jordan1.jpg' ,1000),
    new Kicks('Jordan 11 Bred', 'Eleventh shoe of the Jordan Collection', 'Black/Red', 'assets/jordan11.jpg' ,300)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

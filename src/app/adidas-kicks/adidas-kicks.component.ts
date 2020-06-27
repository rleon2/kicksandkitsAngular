import { Component, OnInit } from '@angular/core';
import { Kicks } from '../shared/kicks.model';

@Component({
  selector: 'app-adidas-kicks',
  templateUrl: './adidas-kicks.component.html',
  styleUrls: ['./adidas-kicks.component.css']
})
export class AdidasKicksComponent implements OnInit {
  kicks: Kicks[] = [
      new Kicks('Yeezy', 'Best Adidas yeezy shoe', 'Gray', 'assets/yeezy1.jpg' ,170),
      new Kicks('Yeezy','Hypebeast shoe','White/Black', '/assets/yeezy2.jpg',170 ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

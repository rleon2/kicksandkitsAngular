import { Component, OnInit } from '@angular/core';
import { Kicks } from '../shared/kicks.model';

@Component({
  selector: 'app-puma-kicks',
  templateUrl: './puma-kicks.component.html',
  styleUrls: ['./puma-kicks.component.css']
})
export class PumaKicksComponent implements OnInit {
  kicks: Kicks[] = [
    new Kicks('Clyde Court REFORM', 'Fiery shoe', 'Red', 'assets/puma1.jpg' ,170),
    new Kicks('Classic', 'Classic Puma Silhouette', 'Black/Gum', 'assets/puma2.jpg' ,300)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

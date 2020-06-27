import { Component, OnInit } from '@angular/core';
import { Kicks } from '../shared/kicks.model';

@Component({
  selector: 'app-nike-kicks',
  templateUrl: './nike-kicks.component.html',
  styleUrls: ['./nike-kicks.component.css']
})
export class NikeKicksComponent implements OnInit {
  kicks: Kicks[] = [
    new Kicks('Freaks', 'Giannis\'\ signature shoe', 'Gray', 'assets/freaks1.jpg' ,170),
    new Kicks('Blazers', 'Classic Sneakers', 'Black', 'assets/blazers1.jpg' ,300)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

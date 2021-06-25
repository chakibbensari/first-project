import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "ASTRA")];
  constructor() { }

  ngOnInit(): void {
  }

}

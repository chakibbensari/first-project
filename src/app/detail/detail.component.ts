import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {

  @Input()
  theDetailedVoiture:Voiture = new Voiture("", "");

  constructor() { }

  ngOnInit(): void {
  }

}

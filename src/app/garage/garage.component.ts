import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';
import { VoitureService } from 'src/Service/VoitureService';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  voitures:Array<Voiture> = [];
  constructor(private voitureService: VoitureService) {
    // this.voitureService = voitureService;
  }

  ngOnInit(): void {
    this.voitures = this.voitureService.voitures;
  }

}

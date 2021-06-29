import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from 'src/Model/Voiture';
import { VoitureService } from 'src/Service/VoitureService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  selectedVoiture: Voiture = new Voiture("", "");

  constructor(private voitureService: VoitureService,
    private route: ActivatedRoute) {
    console.log("creation du composant Detail");
  }

  ngOnInit(): void {
    let marque = this.route.snapshot.params['marque'];
    this.route.params.subscribe((params) => {
      marque = params['marque'];
      this.selectedVoiture = this.voitureService.getVoitureByMarque(marque);
    })
    console.log("premier lancement de Detail");
    this.selectedVoiture = this.voitureService.getVoitureByMarque(marque);

  }

}

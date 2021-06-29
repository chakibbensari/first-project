import { Component, EventEmitter, Output } from "@angular/core";
import { Voiture } from "src/Model/Voiture";
import { VoitureService } from "src/Service/VoitureService";

@Component({
  selector: "app-gestionnaire",
  templateUrl: "./gestionnaire.component.html",
  styleUrls: ["./gestionnaire.component.css"]
})
export class GestionnaireComponent {
  newMarque: string;
  newModele: string;

  // moyen classqie d'injection (sans private)
  // voitureService:VoitureService;
  constructor(private voitureService:VoitureService){
    // this.voitureService = voitureService;
  }


  ajouterVoiture() {
    let voiture = new Voiture(this.newMarque, this.newModele);
    // appel vers service pour l'ajout de la voiture

    this.voitureService.addVoitureToList(voiture);
    // this.addedVoiture.emit(voiture);
    console.log("Voiture ajoutée : " + this.newMarque + " " + this.newModele);
  }
}

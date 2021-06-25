import { Component } from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: "app-gestionnaire",
  templateUrl: "./gestionnaire.component.html"
})
export class GestionnaireComponent {
  newMarque: string;
  newModele: string;

  ajouterVoiture() {
    let voiture = new Voiture(this.newMarque, this.newModele);
    // voitures.push(voiture);
    console.log("Voiture ajoutée : " + this.newMarque + " " + this.newModele);
  }
}

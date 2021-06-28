import { Component } from '@angular/core';
import { Voiture } from 'src/Model/Voiture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "ASTRA")];
  theSelectedVoiture: Voiture = new Voiture("", "");
  constructor() {

  }

  addVoitureToList(voitureEvent: Voiture) {
    this.voitures.push(voitureEvent);
  }

  onReceivedSelectedVoiture(voiture: Voiture) {
    this.theSelectedVoiture = voiture;
  }

}

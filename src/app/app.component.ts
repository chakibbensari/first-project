import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled: boolean = true;
  addText: string = "Pas de voitures ajoutées";
  nomVoiture: string = "Aucune marque saisie";
  lettre: string;
  isAdded: boolean = false;
  voitures: Array<String> = ['BMW', 'OPEL', 'FORD'];

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  ajouterVoiture() {
    this.isAdded = true;
    this.addText = "Une voiture a été ajoutée";
  }

  afficherLettreSaisie(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.lettre = (<HTMLInputElement>event.target).value;
  }
}

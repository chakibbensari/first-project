import { Component } from "@angular/core";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html'
})
export class VoitureComponent {
  name: string = "BMW";
  status: string = "Démarrée";
}

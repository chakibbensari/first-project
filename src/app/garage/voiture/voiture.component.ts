import { Component, Input } from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @Input()
  theVoiture: Voiture;


}

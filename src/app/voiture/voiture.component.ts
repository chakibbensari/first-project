import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @Input()
  theVoiture: Voiture;

  @Output()
  selectedVoitureEvent : EventEmitter<Voiture> = new EventEmitter();

  selectVoiture(){
    this.selectedVoitureEvent.emit(this.theVoiture);
  }

}

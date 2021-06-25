import { Component } from "@angular/core";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  name: string = Math.random() > 0.5 ? "BMW" : "OPEL";
  status: boolean = Math.random() > 0.5 ? true : false;
  textColor: string = this.status ? 'green' : 'red';


}

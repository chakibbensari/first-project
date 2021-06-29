import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/Service/PatientService';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  listePatients: Array<Patient> = new Array();
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe((response) => {
      this.listePatients = response;
    }, (error) => {
       console.log(error);
    }, () => {
      console.log("Traitement terminé !");
    });
  }

}

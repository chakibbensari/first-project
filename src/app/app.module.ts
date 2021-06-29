import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoitureComponent } from './garage/voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VoitureService } from 'src/Service/VoitureService';
import { GarageComponent } from './garage/garage.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { PatientService } from 'src/Service/PatientService';

const ROUTES: Routes = [
  { path: "voitures", component: GarageComponent },
  { path: "voitures/:marque", component: DetailComponent },
  { path: "patients", component: PatientsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    GestionnaireComponent,
    DetailComponent,
    GarageComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [VoitureService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

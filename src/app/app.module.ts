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

const ROUTES: Routes = [
  { path: "", component: GarageComponent },
  { path: "voitures/:marque", component: DetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    GestionnaireComponent,
    DetailComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

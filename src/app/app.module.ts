import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoitureComponent } from './garage/voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { GarageComponent } from './garage/garage.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    GestionnaireComponent,
    GarageComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

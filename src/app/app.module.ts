import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { DetailComponent } from './detail/detail.component';
import { VoitureService } from 'src/Service/VoitureService';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    GestionnaireComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Voiture } from "src/Model/Voiture";

export class VoitureService {
  voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "ASTRA")];

  addVoitureToList(voiture: Voiture) {
    this.voitures.push(voiture);
    console.log("Voiture ajoutée : " + voiture.marque + " " + voiture.modele);
  }

  getVoitureByMarque(marque: string) {
    const result = this.voitures.filter((voiture) => {
      return voiture.marque == marque;
    });
    return result[0];
  }

}


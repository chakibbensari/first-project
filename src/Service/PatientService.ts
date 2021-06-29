import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Patient } from "src/Model/Patient";

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {

  }

  getAllPatients() {
    const obs = this.http.get<Patient[]>("http://localhost:8000/patients");
    return obs;
  }

}
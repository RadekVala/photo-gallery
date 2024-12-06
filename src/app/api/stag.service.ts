import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StagService {
  constructor() {}

  async fetchSubjecInfo(katedra: string, zkratka: string) {
    const url = `${environment.apiUrl}/ws/services/rest2/predmety/getPredmetInfo?outputFormat=JSON`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
}

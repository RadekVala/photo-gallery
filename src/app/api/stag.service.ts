import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StagService {
  constructor() {}

  async fetchSubjecInfo(katedra: string, zkratka: string): Promise<Predmet> {
    const url = `${environment.apiUrl}/ws/services/rest2/predmety/getPredmetInfo?outputFormat=JSON&katedra=${katedra}&zkratka=${zkratka}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  async fetchSubjectsByKatedra(
    katedra: string,
    rok: string,
  ): Promise<PredmetKatedry[]> {
    const url = `${environment.apiUrl}/ws/services/rest2/predmety/getPredmetyByKatedra?outputFormat=JSON&katedra=${katedra}&rok=${rok}`;

    const response = await fetch(url);
    const data: PredmetByKatedraResponse = await response.json();
    console.log(data);
    return data.predmetKatedry;
  }
}

export interface Predmet {
  katedra: string;
  zkratka: string;
  rok: string;
  nazev: string;
  nazevDlouhy: string;
  maVyuku: string;
  vyukaZS: string;
  vyukaLS: string;
  jakCastoJeNabizen: string;
  jakCastoJeNabizenUpresneni: string | null;
  kreditu: number;
  viceZapis: string;
  minObsazeni: number | null;
  garanti: string;
  garantiSPodily: string;
  garantiUcitIdno: string;
  prednasejici: string;
  prednasejiciSPodily: string;
  prednasejiciUcitIdno: string;
  cvicici: string;
  cviciciSPodily: string;
  cviciciUcitIdno: string;
  seminarici: string;
  seminariciSPodily: string;
  seminariciUcitIdno: string;
  schvalujiciUznani: string;
  schvalujiciUznaniUcitIdno: string;
  examinatori: string;
  examinatoriUcitIdno: string;
  podminujiciPredmety: string;
  vylucujiciPredmety: string;
  podminujePredmety: string;
  literatura: string;
  nahrazPredmety: string;
  metodyVyucovaci: string;
  metodyHodnotici: string;
  akreditovan: string;
  jednotekPrednasek: number;
  jednotkaPrednasky: string;
  jednotekCviceni: number;
  jednotkaCviceni: string;
  jednotekSeminare: number;
  jednotkaSeminare: string;
  anotace: string;
  typZkousky: string;
  maZapocetPredZk: string;
  formaZkousky: string;
  pozadavky: string;
  prehledLatky: string;
  predpoklady: string;
  ziskaneZpusobilosti: string;
  casovaNarocnost: string;
  predmetUrl: string | null;
  vyucovaciJazyky: string;
  poznamka: string;
  ectsZobrazit: string;
  ectsAkreditace: string;
  ectsNabizetUPrijezdu: string;
  poznamkaVerejna: string | null;
  skupinaAkreditace: string | null;
  skupinaAkreditaceKey: string | null;
  zarazenDoPrezencnihoStudia: string;
  zarazenDoKombinovanehoStudia: string;
  studijniOpory: string | null;
  praxePocetDnu: string;
  urovenNastavena: string | null;
  urovenVypoctena: string;
  automatickyUznavatZppZk: string;
  hodZaSemKombForma: string;
}

export interface PredmetByKatedraResponse {
  predmetKatedry: PredmetKatedry[];
}

export interface PredmetKatedry {
  katedra: string;
  zkratka: string;
  rok: string;
  nazev: string;
  semestr: string;
  maVyuku: string;
  vyukaZS: string;
  vyukaLS: string;
  jazyk1: any;
  jazyk2: any;
  jazyk3: any;
  jazyk4: any;
  nabizetPrijezdyEcts: string;
  pocetStudentu: number;
  aMax: any;
  bMax: any;
  cMax: any;
  aSkut: number;
  bSkut: number;
  cSkut: number;
}

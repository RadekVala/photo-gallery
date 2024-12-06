import { Component } from "@angular/core";
import { StagService } from "../api/stag.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  subjectAbbr: string = "";

  constructor(private stagService: StagService) {}

  searchClicked() {
    console.log(this.subjectAbbr);

    this.stagService.fetchSubjecInfo("AUIUI", this.subjectAbbr);
  }
}

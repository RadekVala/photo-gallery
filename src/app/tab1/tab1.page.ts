import { Component } from "@angular/core";
import { Predmet, StagService } from "../api/stag.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  subject?: Predmet;
  subjectAbbr: string = "";

  constructor(private stagService: StagService) {}

  async searchClicked() {
    console.log(this.subjectAbbr);

    this.subject = await this.stagService.fetchSubjecInfo(
      "AUIUI",
      this.subjectAbbr,
    );
  }
}

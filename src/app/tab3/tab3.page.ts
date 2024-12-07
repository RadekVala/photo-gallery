import { Component } from "@angular/core";
import { PredmetKatedry, StagService } from "../api/stag.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  katedra: string = "";
  rok: string = "2024";

  data?: PredmetKatedry[];

  constructor(private stagService: StagService) {}

  async btnSearchClicked() {
    this.data = await this.stagService.fetchSubjectsByKatedra(
      this.katedra,
      this.rok,
    );
  }
}

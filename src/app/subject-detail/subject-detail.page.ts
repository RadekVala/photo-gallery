import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PredmetKatedry } from "../api/stag.service";

@Component({
  selector: "app-subject-detail",
  templateUrl: "./subject-detail.page.html",
  styleUrls: ["./subject-detail.page.scss"],
})
export class SubjectDetailPage implements OnInit {
  item?: PredmetKatedry;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.["item"];
    console.log(this.item);
  }

  ngOnInit() {}
}

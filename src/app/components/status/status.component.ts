import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  constructor(public contactsService: ContactsService) {}

  ngOnInit() {}
}

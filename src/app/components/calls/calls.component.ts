import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-calls",
  templateUrl: "./calls.component.html",
  styleUrls: ["./calls.component.scss"]
})
export class CallsComponent implements OnInit {
  constructor(public contactsService: ContactsService) {}

  ngOnInit() {}
}

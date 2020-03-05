import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-chats",
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.scss"]
})
export class ChatsComponent implements OnInit {
  constructor(public contactsService: ContactsService) {}

  ngOnInit() {}
}

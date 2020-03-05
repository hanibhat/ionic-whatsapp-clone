import { Injectable } from "@angular/core";

export interface ContactModel {
  contactName: string;
  contactAvatar: string;
  snippet: string;
  time: Date;
}

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  contacts: ContactModel[];
  user = {
    avatar:
      "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-yoda.png"
  };

  constructor() {
    // example: fetch data from API
    this.contacts = this.getData();
  }

  getData(): ContactModel[] {
    return [
      {
        contactName: "Finn",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-finn.png",
        snippet: "Listen, I've had a pretty messed up day...",
        time: new Date(Date.now())
      },
      {
        contactName: "Han",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-han.png",
        snippet: "I've got enough on my plate as it is, and I...",
        time: new Date(Date.now())
      },
      {
        contactName: "Rey",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-rey.png",
        snippet: "You will remove these restraints and leave...",
        time: new Date(Date.now())
      },
      {
        contactName: "Luke",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png",
        snippet: "I feel the good in you, the conflict...",
        time: new Date(Date.now())
      }
    ];
  }
}

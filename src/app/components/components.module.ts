import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CallsComponent } from "./calls/calls.component";
import { ChatsComponent } from "./chats/chats.component";
import { StatusComponent } from "./status/status.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ChatsComponent, StatusComponent, CallsComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ChatsComponent, StatusComponent, CallsComponent]
})
export class ComponentsModule {}

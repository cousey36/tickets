import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  modalCrearVisible: boolean = false;

  cerrarContacto(){
    this.modalCrearVisible = false;
  }

  crear() {
    this.modalCrearVisible = true;
  }
}

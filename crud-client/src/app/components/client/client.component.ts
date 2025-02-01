import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../../models/client';
import { ClientServiceService } from '../../services/client-service.service';
import { ClientFormsComponent } from "./client-forms/client-forms.component";
import { ClientTableComponent } from "./client-table/client-table.component";
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ClientFormsComponent, ClientTableComponent, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  clients: Client[] = [];
  selectedClient!: Client;

  constructor(private service: ClientServiceService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(next => {
      this.clients = next;
    });
  }

  insert(client: Client) {
   this.service.insert(client).subscribe(next => {
    this.clients.push(next);
   });
  }

  update(client: Client) {
    this.service.update(client).subscribe(next => {
      
      let indexUpdated = this.clients.findIndex(obj => {
        return client.id === obj.id;
      });

      this.clients[indexUpdated] = next;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(next => {

      let indexDeleted = this.clients.findIndex(obj => {
        return id === obj.id;
      });

      this.clients.splice(indexDeleted, 1);
      
    })
  } 

  selectClient(client: Client) {
    this.selectedClient = client;
  }
}

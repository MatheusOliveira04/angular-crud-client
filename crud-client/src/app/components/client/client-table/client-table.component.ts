import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss'
})
export class ClientTableComponent {

  @Input() clients: Client[] = [];
  @Output() clientSelectedEvent = new EventEmitter<Client>();

  selectItem(index: number) {
    this.clientSelectedEvent.emit(this.clients[index]);
  }
}

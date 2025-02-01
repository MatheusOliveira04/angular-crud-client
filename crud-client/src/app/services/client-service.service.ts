import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  urlClient: string = 'http://localhost:3000/cliente';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlClient);
  }

  insert(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlClient, client);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlClient}/${client.id}`, client);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlClient}/${id}`)
  }
}

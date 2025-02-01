import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-forms.component.html',
  styleUrl: './client-forms.component.scss'
})
export class ClientFormsComponent implements OnChanges {

  buttonRegister: boolean = true;
  @Input() selectedClient!: Client | null;
  @Output() insertClient = new EventEmitter<Client>();
  @Output() updateClient = new EventEmitter<Client>();
  @Output() deleteClient = new EventEmitter();
  forms!: FormGroup;

  constructor() {
    this.createFormGroup();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.informSelectClientInForm();
    console.log("efetuou a mudança onChange");
  }

  insert() {
    this.insertClient.emit(this.forms.value as Client);
  }

  update() {
    this.updateClient.emit(this.forms.value as Client);
    this.forms.reset();
    this.buttonRegister = true; 
  }

  delete() {
    this.deleteClient.emit(this.forms.value.id);
    this.forms.reset();
    this.buttonRegister = true; 
  }

  cancel() {
    this.forms.reset();
    this.buttonRegister = true;
    this.selectedClient = null;
  }

  createFormGroup() {
    this.forms = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      birthDate: new FormControl(null, [Validators.required])
    });
  }

  informSelectClientInForm() {
    if(this.selectedClient) {
      this.forms.setValue({
        id: this.selectedClient.id,
        name: this.selectedClient.name,
        email: this.selectedClient.email,
        phone: this.selectedClient.phone,
        birthDate: this.selectedClient.birthDate
      });
      this.selectedClient = null;
      this.buttonRegister = false;
    }
  }

}

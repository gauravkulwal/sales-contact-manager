import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
contactList!: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }


  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    fatherName: new FormControl(''),
    city: new FormControl(''),
    mobile: new FormControl('', [Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
    remark: new FormControl('') 
  })
  getContactList(): any{
    this.contactList = this.firebase.list('tractor');
    return this.contactList.snapshotChanges();
  }
  insertContact(contact: any): any{
    this.contactList.push({
      name: contact.name,
      fatherName: contact.fatherName,
      city: contact.city,
      mobile: contact.mobile,
      remark: contact.remark
    })
  }
  formReset(): any{
    this.form.reset({
      name: '',
      fatherName: '',
      city: '',
      mobile: '',
      remark: ''
    })
  }

  contactUpdate(contact: any): any{
    this.contactList.update(contact.$key , {
      name: contact.name,
      fatherName: contact.fatherName,
      city: contact.city,
      mobile: contact.mobile,
      remark: contact.remark
    })
  }

   deleteContact($key: any): any{
    this.contactList.remove($key);
   }
}

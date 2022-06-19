import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContactList();
  }
  onSubmit(): any{
    if(this.contactService.form.valid){
      this.contactService.insertContact(this.contactService.form.value);
      this.contactService.formReset();
    }
  }

}

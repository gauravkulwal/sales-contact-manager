import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

dataSource! :any;
panelOpenState = false;
searchKey!: string;


  constructor(public ContactService: ContactService) { }

  ngOnInit(): void {
    this.ContactService.getContactList().subscribe((list: any) =>{
      let array = list.map((item: any) => {
        return {
          ...item.payload.val(),
          $key: item.key,
            };

      });
      this.dataSource = array;

    })
  }
 delete($key: any): any{
   this.ContactService.deleteContact($key);

 }
 

  

  
}

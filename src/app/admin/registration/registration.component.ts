import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/services/common.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _commonService:CommonService) { 
    // this._commonService.getName();
    
  }

 data:any;

  ngOnInit() {
    
  this.getContacts();
  }

getContacts(){
  this._commonService.getdata().subscribe(data=>{
console.log(data);
this.data=data.records
  })
}

}

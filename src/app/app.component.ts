import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kamlesh';
  HEROES = [ {id: 1, name:'Superman'}, {id: 2, name:'Batman'},  {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

private apiUrl="https://www.w3schools.com/angular/customers.php";
data:Object;
constructor(private _commonService:CommonService){
  // console.log('Hi this is jitender');
   //this.getContacts();
}


}
// 
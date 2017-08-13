import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

constructor(private http:Http) {
  //this.getName();
 }
private apiUrl="https://www.w3schools.com/angular/customers.php";
getdata(){
  return this.http.get(this.apiUrl)
  .map((res:Response)=>res.json())
}
// getName()
// {
// return "my name is jitender";

// }
}

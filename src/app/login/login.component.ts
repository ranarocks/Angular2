import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = 
{ 
  username:'',
  password:''
};
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router
     ) { }

  ngOnInit() {
  }
  
login() {
  this.router.navigate(['./register']);
}
}


import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public Login:LoginService) { }

  ngOnInit() {
  }

  firstClick(){
    console.log('clicked');
    this.Login.addLogin();
  }

}

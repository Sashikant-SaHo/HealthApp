import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registation',
  templateUrl: './user-registation.component.html',
  styleUrls: ['./user-registation.component.css']
})
export class UserRegistationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fun(){
    alert('Register Sucessfully!! :-)')
  }

}

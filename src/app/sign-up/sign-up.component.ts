import { Component, OnInit } from '@angular/core';
import { Email } from '../Email';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: Email = {
    id: 1,
    value: ''
  }


  constructor() { }

  ngOnInit() {
  }

}

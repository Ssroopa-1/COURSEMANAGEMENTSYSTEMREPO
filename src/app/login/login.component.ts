import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() student = 'student-register'; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}

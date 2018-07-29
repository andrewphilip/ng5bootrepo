import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formonecomp',
  templateUrl: './formonecomp.component.html',
  styleUrls: ['./formonecomp.component.css']
})
export class FormonecompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(user){
    console.log(user.firstName);
  }
}

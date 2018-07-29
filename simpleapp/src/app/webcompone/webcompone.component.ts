import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {WebsrvcService} from '../websrvc.service';
@Component({
  selector: 'webcompone',
  templateUrl: './webcompone.component.html',
  styleUrls: ['./webcompone.component.css']
})
export class WebcomponeComponent implements OnInit {

  data:any;
  
  constructor(private srvc:WebsrvcService) { }

  ngOnInit() {
    this.srvc.getAllData()
        .subscribe((res)=> {
         this.data=res;
          console.log(this.data);
        })
  } 

}

import { Component, OnInit } from '@angular/core';
import { StockapiserviceService} from './stockapiservice.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 5 App!';
  stocks: any;
  constructor(private stockService: StockapiserviceService) {}
  
  ngOnInit() {
    this.getAllStocks();
  }
  
  
  getAllStocks() {
   this.stockService.getAllStocks().subscribe(
    data => {this.stocks =data},
    err => console.log(err),
    () => console.log('Completed') 
   ); 
  }
  
}

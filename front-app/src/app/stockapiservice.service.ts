import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const options={ headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable()
export class StockapiserviceService {
  constructor(private http:HttpClient) { 
  }

  getAllStocks(){
    return this.http.get('/stocklist');
  }
}

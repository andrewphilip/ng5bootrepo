import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import 'rxjs/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WebsrvcService {

  _url:string='/assets/data/fathers.json';
  
  constructor(private http: HttpClient) { }
  
  getAllData(){
   return  this.http.get(this._url)
               .map((res:Response) => res)
               .catch(this.handleError);
  }
  
  handleError(error:HttpErrorResponse){
    return  new ErrorObservable('Server Error!' + error.message);
  }

}

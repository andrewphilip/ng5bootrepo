import { Component , OnInit} from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 5 - App!!!';
  cname:string ='AppComponent';
  datarcvd:string;
  data:any=[]
  
  constructor(){}
  ngOnInit(){
    this.data=[
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] },    
        { "name":"Honda", "models":[ "Civic", "Accord","CR-V","Pilot" ] } ,   
        { "name":"Toyota", "models":[ "Corolla", "Camry","RAV-4","Highlander" ] }    
    ];
    
    _.forEach(this.data, (o) => console.log(o));
    console.log("***********************************");
    let flist=_.filter(this.data,{"name":"BMW"});
    _.forEach(flist, (o) => console.log(o));
    console.log("***********************************");
    let res=_.sortBy(this.data, (o) => o.name);
    _.forEach(res, (o) => console.log(o));
    console.log("***********************************");
    let names=_.map(this.data, (o) => o.name )
    _.forEach(names, (o) => console.log(o));
    console.log("***********************************");
    let today=moment().format('D MMM YYYY');
    console.log(today);
  }
  
  logData(data){
    this.datarcvd=data;
  }
  
  
}

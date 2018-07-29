import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  cname:string= 'ChildoneComponent';
  @Input() pname:string;
  @Output() dataup:EventEmitter<String> =new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  pushUp(data){
    console.log(data);
    this.dataup.emit(data);
  }
  
}

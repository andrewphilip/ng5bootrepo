import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {User,Address,states} from './../data-model';

@Component({
  selector: 'reactformone',
  templateUrl: './reactformone.component.html',
  styleUrls: ['./reactformone.component.css']
})
export class ReactformoneComponent implements OnInit {

  uform:FormGroup;
  statesarr:any=[];
  
  constructor(private builder:FormBuilder) { 
    this.statesarr=states;
    console.log(this.statesarr);
    this.uform= this.builder.group({
      fname:['francis',[Validators.required, Validators.minLength(3)]],
      lname:['assisi',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required]],
      address:this.builder.group({
        street:['',Validators.required],
        city:['',Validators.required],
        state:[this.statesarr[0],Validators.required]
      })
    });
  }

  ngOnInit() {
  }

}

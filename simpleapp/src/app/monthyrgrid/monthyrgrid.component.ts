import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'monthyrgrid',
  templateUrl: './monthyrgrid.component.html',
  styleUrls: ['./monthyrgrid.component.css']
})
export class MonthyrgridComponent implements OnInit {

  @Input() startyr:string;
  mnthArr:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  mnthNameArr:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  selectedMonths:string[]=new Array<string>();
  DEFAULTCOLOR:string = 'rgb(102,102,255)'; //RGB(179,179,179):#b3b3b3
  SELECTEDCOLOR:string ='rgb(204,204,255)'; //RGB(230,230,230):#e6e6e6
  yearArr:number[];
  rangeym1:string='';
  rangeym2:string='';
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap
       .subscribe(params =>{
        this.startyr=params.get('syear');
        this.populateYearArr(); 
       }); 
   
   
  }

  populateYearArr(){
    let syear=parseInt(this.startyr);
    let cyear=new Date().getFullYear();
    console.log(syear,cyear);
    const len= cyear - syear;
    console.log(len);
    this.yearArr=new Array<number>();
    for(let i=syear; i <= cyear; i++){
      this.yearArr.push(i);
    }
    console.log(this.yearArr);
  }
  
  processSelection(ev,gridmode){
    //console.log('[processSelection()]:',ev.srcElement.value);
    console.log('[processSelection()]:',ev.srcElement.id);
    let ele=ev.srcElement.id;
    let mnthyr= ele.substr(3);
    if(gridmode === 'M'){
        if(ev.srcElement.value === '1'){
          this.selectedMonths.push(mnthyr);
        }
        else{
          let idx= this.selectedMonths.indexOf(mnthyr);
          if(idx != -1){
            this.selectedMonths.splice(idx,1);
          }
        }
        console.log(this.selectedMonths);
    }
    else{
        // gridmode is RANGE
        if(this.rangeym1.length === 0){
          this.rangeym1=mnthyr;
        }
        else if(this.rangeym2.length === 0){
          this.rangeym2=mnthyr;
        }else{
          this.rangeym2=mnthyr;
        }
      
        if(this.rangeym1.length > 0 && this.rangeym2.length > 0){
          let ym1= this.formatMonthYear2Number(this.rangeym1);
          let ym2=this.formatMonthYear2Number(this.rangeym2);
          console.log(ym1,ym2);
          let ymarr=this.mnthyrdiff2Dates(ym1,ym2);
          this.selectedMonths = this.formatMonthYr2StrArr(ymarr);
          console.log('selectedMonths:',this.selectedMonths);
          this.selectRangeMonths(ev);
        }
    }
    
  }
  
  getSelectedMonths(){
    return this.selectedMonths;
  }
  
  selectRangeMonths(ev){
    let cNodes=ev.currentTarget.parentElement.parentElement.children;
   // console.log(ev.currentTarget.parentElement.parentElement.parentElement.children);
    let rnodes=ev.currentTarget.parentElement.parentElement.parentElement.children;
    for(let i=1; i < rnodes.length; i++){
        //let mnthyrBtn=cNodes[i].firstChild;
        let chNodes=rnodes[i].children;
        //console.log(chNodes[0].firstChild.innerHTML);
        for(let j=1; j < chNodes.length; j++){
          let mnthyrBtn=chNodes[j].firstChild;
          let selBtn=mnthyrBtn.id;
          let mnthyr=selBtn.substr(3);
         // console.log(mnthyr+"**");
          if(this.selectedMonths.indexOf(mnthyr) != -1 ){
            mnthyrBtn.style.backgroundColor=this.SELECTEDCOLOR;
            mnthyrBtn.value='1';
         //   console.log(mnthyr);
          }      
          
        }
      
    }
  
  }
  
  selectAllMnthsoftheYear(ev, year){
//    console.log(ev.currentTarget.parentElement.parentElement);
//    console.log(ev.currentTarget.parentElement.parentElement.children);
    let cNodes=ev.currentTarget.parentElement.parentElement.children;
    //console.log('year button-value:', cNodes[0].firstChild.value);
    if(cNodes[0].firstChild.value === '0'){
      for(let i=1; i < cNodes.length; i++){
        //starts from position '1' to avoid selecting the year button
        let mnthyrBtn=cNodes[i].firstChild;
        mnthyrBtn.style.backgroundColor=this.SELECTEDCOLOR;
        mnthyrBtn.value='1';
        let selBtn=mnthyrBtn.id;
        let mnthyr=selBtn.substr(3);
        //console.log(mnthyr);
        let idx= this.selectedMonths.indexOf(mnthyr);
        if(idx == -1){
          this.selectedMonths.push(mnthyr);
        }
      }
      cNodes[0].firstChild.value='1';
    }
    else{
      //deselect all the buttons of the year
      for(let i=1; i < cNodes.length; i++){
        let mnthyrBtn=cNodes[i].firstChild;
        mnthyrBtn.style.backgroundColor=this.DEFAULTCOLOR;
        mnthyrBtn.value='0';
        let selBtn=mnthyrBtn.id;
        let mnthyr=selBtn.substr(3);
        let idx= this.selectedMonths.indexOf(mnthyr);
        if(idx != -1){
          this.selectedMonths.splice(idx,1);
        }
      }
      cNodes[0].firstChild.value='0';
    }
   // console.log(this.selectedMonths); 
  }
  
  resetGrid(ele,mode){
    //console.log(ele.children);
    let tblNodes=ele.children;
    //console.log(tblNodes[0].children); 
    let ymRows=tblNodes[0].children; // all the <TR>
    for(let i=1; i< ymRows.length; i++){
      let crow=ymRows[i].children; // all the <TD>
      //console.log(crow.length);
      for(let j=1; j<crow.length;j++){
        //console.log(crow[j].firstChild.id);
        let mnthyrBtn=crow[j].firstChild;
        mnthyrBtn.style.backgroundColor=this.DEFAULTCOLOR;
        mnthyrBtn.value='0';
      }
    }
    this.selectedMonths=[];
    this.rangeym1='';
    this.rangeym2='';
  }
  
  formatMonthYear2Number(mnthyrstr){
    let year= mnthyrstr.substr(0,4);
    let month=mnthyrstr.substr(4);
    let mm= (month < 10 ? '0':'')+month;
    let yyyymm= year+mm;
    return parseInt(yyyymm);
  }
  
  mnthyrdiff2Dates(ym1,ym2){
    //ym1,ym2 are in the format yyyymm (number)
    let start=ym1;
    let end=ym2;
    let ymarr:number[]=new Array<number>();
    
    if(ym2 < ym1){
      start=ym2;
      end=ym1;
    }
   // console.log('start:',start);
   // console.log('end:',end);
    for(let i=start; i <= end; i++){
      if((i % 100)  <= 12 ){
       // console.log(i);
        ymarr.push(i);
      }
      else{
        start=(start+100) -( start % 100);
        i=start;
        if(start > end){
          break;
        }
      }
    }
  //  console.log(ymarr);
    return ymarr;
  }
  
  formatMonthYr2StrArr(arr){
    let sarr:string[]=new Array<string>();
    for(let i=0; i < arr.length; i++){
      let y4=Math.floor(arr[i] / 100).toString();
      let m2=(arr[i] % 100).toString();
      //console.log(y4,m2,y4+m2);
      sarr.push(y4+m2);  
    }
    console.log(sarr);
    return sarr;
  }
  
}

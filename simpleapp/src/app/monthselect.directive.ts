import { Directive,ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[monthselect]'
})
export class MonthselectDirective {

  DEFAULTCOLOR:string = 'rgb(102,102,255)'; //RGB(179,179,179):#b3b3b3
  SELECTEDCOLOR:string ='rgb(204,204,255)'; //RGB(230,230,230):#e6e6e6
  
  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor=this.DEFAULTCOLOR; //
  }

  @HostListener('click') onClick(){
    //console.log(['MonthselectDirective::onClick():'],this.el.nativeElement.value);
    if(this.el.nativeElement.value === '0'){
      this.el.nativeElement.style.backgroundColor=this.SELECTEDCOLOR;
      this.el.nativeElement.value = '1';
    }else{
      this.el.nativeElement.style.backgroundColor=this.DEFAULTCOLOR;
      this.el.nativeElement.value = '0';
    }
  }
}

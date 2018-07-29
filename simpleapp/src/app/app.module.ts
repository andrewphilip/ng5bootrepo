import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildoneComponent } from './childone/childone.component';
import { MonthyrgridComponent } from './monthyrgrid/monthyrgrid.component';
import { MonthselectDirective } from './monthselect.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*import {MaterialModule}  from './material/material.module';*/
import { FormonecompComponent } from './formonecomp/formonecomp.component';
import { ReactformoneComponent } from './reactformone/reactformone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebcomponeComponent } from './webcompone/webcompone.component';
import {WebsrvcService} from './websrvc.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildoneComponent,
    MonthyrgridComponent,
    MonthselectDirective,
    FormonecompComponent,
    ReactformoneComponent,
    NavbarComponent,
    WebcomponeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /*MaterialModule,*/
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: FormonecompComponent},
     /* {path:'tmpdrvnform', component: FormonecompComponent},*/
      {path:'reactive', component: ReactformoneComponent},
      {path:'monthyrgrid/:syear', component: MonthyrgridComponent},
      {path:'doctors',component:WebcomponeComponent}
    ])
  ],
  providers: [WebsrvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { Routes , RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path : '', component:HomeComponent},
  {path: 'first', component: HomeComponent },
  {path: 'second', component: SecondScreenComponent}
];


@NgModule({
   imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SecondScreenComponent
  ],
 
  providers: [SecondScreenComponent],
  bootstrap: [AppComponent]
})



export class AppModule { }

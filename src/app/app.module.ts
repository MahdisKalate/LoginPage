import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { Routes , RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path : '', redirectTo: '/first', pathMatch: 'full'},
  {path: 'first', component: HomeComponent },
  {path: 'second', component: SecondScreenComponent},
  {path: '**', component: PageNotFoundComponent}
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
    SecondScreenComponent,
    PageNotFoundComponent
  ],
 
  providers: [SecondScreenComponent],
  bootstrap: [AppComponent]
})



export class AppModule { }

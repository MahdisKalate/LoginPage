import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { Routes , RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guard/auth.guard';

const appRoutes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: HomeComponent },
  {path: 'users', component: SecondScreenComponent},
  {path: 'profile/:id', component: ProfileComponent , canActivate:[AuthGuard] },
  {path: '**', component: PageNotFoundComponent}
  
];


@NgModule({
   imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SecondScreenComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
 
  providers: [SecondScreenComponent],
  bootstrap: [AppComponent]
})



export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../shared/services/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {
  
  user:any[] =[];

  showUrl(login: any){
    this.router.navigate(['/profile',login]);
    console.log(login);
    
  }
  constructor(private myservice:MyServiceService , private router:Router){}

  ngOnInit(){
    this.myservice.getAllApi()
      .subscribe((data:any) => {
        this.user=data;
        console.log(this.user);
        
      })
    
  }

}

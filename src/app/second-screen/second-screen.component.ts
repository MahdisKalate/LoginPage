import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../shared/services/my-service.service';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {
  user:any[]

  constructor(private myservice:MyServiceService){}

  ngOnInit(){
    this.myservice.getApi()
      .subscribe((data:any) => {
        this.user=data;
      })
  }

}

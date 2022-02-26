import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    signupForm: FormGroup;
    submit= false;

    constructor(private formbuilder : FormBuilder) {
    }

    ngOnInit(){
      this.signupForm = this.formbuilder.group({
         
        phonenumber: new FormControl ('', Validators.compose([Validators.pattern('[0][9]([0-4]|[9]){1}[0-9]{8}'),Validators.required])),
        password: new FormControl ('', Validators.compose([Validators.minLength(8),Validators.required]))
            });
         
    }
         
    onSubmit(){
    console.log(this.signupForm);
    localStorage.setItem("localstorage",JSON.stringify(this.signupForm?.value));
    }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute , ParamMap} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signupForm: FormGroup;
    submit= false;

    constructor(private formbuilder : FormBuilder , private router: Router , private route: ActivatedRoute) {
    }

    phonenumber$ = this.route.paramMap
     .pipe(
        map((params: ParamMap) => params.get('phonenumber'))
          );

    ngOnInit(){
      this.signupForm = this.formbuilder.group({
         
        phonenumber: new FormControl ('', Validators.compose([Validators.pattern('[0][9]([0-4]|[9]){1}[0-9]{8}'),Validators.required,Validators.minLength(11)])),
        password: new FormControl ('', Validators.compose([Validators.minLength(8),Validators.required]))
            });
         
    }
         
    LogIn(){
    console.log(this.signupForm);
    localStorage.setItem("localstorage",JSON.stringify(this.signupForm?.value));
    this.router.navigate(['/second']);
    }
    
}

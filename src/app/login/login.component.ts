import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticateService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
      this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        var res = this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
        if(res){
          this.router.navigate(['/userdetails']);
        }
        else{
          this.error = "Invalid Username or Password";
        }
        
  }

}

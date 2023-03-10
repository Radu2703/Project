import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_core/services/login.service';
import { AppComponent } from '../app.component';

@Component
({selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showServerError!: boolean;
  checked = false;
  mem=AppComponent.mem;
  e=AppComponent.e;
  p=AppComponent.p;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void
  {this.buildForm();}

  buildForm(): void
    {this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]});
    }

  get email(): FormControl
  {return this.loginForm.get('email') as FormControl;}

  get password(): FormControl
  {return this.loginForm.get('password') as FormControl;}

  login(): void
  {if(this.mem==true)
   {const payload =
      {email: this.e,
       password: this.p}
    this.loginService.login(payload).subscribe
    ({next: (res: { token: any; }) =>
      {window.localStorage['token'] = res.token;
       this.router.navigate(['accounts']);},
      error: () =>
      {this.showServerError = true;}});
    }

  if (this.loginForm.invalid) return;
    const payload =
      {email: this.email.value,
       password: this.password.value}
    this.loginService.login(payload).subscribe
    ({next: (res: { token: any; }) =>
       {window.localStorage['token'] = res.token;
        if(this.checked==true){AppComponent.e=this.email.value;AppComponent.p=this.password.value;AppComponent.mem=true;}
        this.router.navigate(['accounts']);},
      error: () =>
      {this.showServerError = true;}});
  }
}

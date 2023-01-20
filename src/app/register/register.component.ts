import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { RegisterService } from 'src/app/_core/services/register.service';

@Component
({selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']})

export class RegisterComponent implements OnInit {

  regForm!: FormGroup;
  showServerError!: boolean;
  constructor(private formbuilder:FormBuilder, private registerService: RegisterService, private router: Router) {}

ngOnInit(): void
  {this.buildForm();}

buildForm(): void {
  this.regForm = this.formbuilder.group
    ({surname:[null, [Validators.required,this.forbiddenNameValidator(/death/),this.forbiddenNameValidator(/suicide/)]],
      name:[null, [Validators.required,this.forbiddenNameValidator(/suicide/),this.forbiddenNameValidator(/death/)]],
      email:[null, [Validators.required, Validators.email]],
      tel:[null, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      password:[null, [Validators.required, Validators.minLength(6)]],
      cpassword:[null, [Validators.required, Validators.minLength(6),this.confirmationValidator]],
      gender:[null, [Validators.required, this.genderVerify()]]});}

confirmationValidator = (control: FormControl): { [s: string]: boolean } =>
  {if (!control.value) {return { required: true };}
   else if (control.value !== this.regForm.controls['password'].value)
           {return { confirm: true, error: true };}
   return {};};

forbiddenNameValidator(nameRe: RegExp):ValidatorFn
  {return (control: AbstractControl): ValidationErrors | null => {
   const forbidden = nameRe.test(control.value);
   return forbidden ? {forbiddenName: {value: control.value}} : null;};}

genderVerify(): ValidatorFn
  {return (control: AbstractControl): { [key: string]: any } | null =>
  control.value === 'Male' ? null : {wrongColor: control.value} && control.value === 'Female' ? null : {wrongColor: control.value};}

get surname() : FormControl
  {return this.regForm.get("surname") as FormControl;}

get name() : FormControl
  {return this.regForm.get("name") as FormControl;}

get email() : FormControl
  {return this.regForm.get("email") as FormControl;}

get tel() : FormControl
  {return this.regForm.get("tel") as FormControl;}

get password() : FormControl
  {return this.regForm.get("password") as FormControl;}

get cpassword() : FormControl
  {return this.regForm.get("cpassword") as FormControl;}

get gender() : FormControl
  {return this.regForm.get("gender") as FormControl;}

register():void{
  if (this.regForm.invalid) return;
  const payload =
    {email: this.email.value,
     password: this.password.value}
  this.registerService.register(payload).subscribe({
    next: (res: { token: any; }) =>
      {window.localStorage['token'] = res.token;
      this.router.navigate(['login']);},
    error: () => {this.showServerError = true;}});
  }
}

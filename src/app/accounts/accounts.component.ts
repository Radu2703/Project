import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataItem } from '../_core/models/entry';
import { RegisterService } from 'src/app/_core/services/register.service';
import { AppComponent } from '../app.component';

@Component
({selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']})

export class AccountsComponent implements OnInit {

constructor(private formbuilder:FormBuilder, private registerService: RegisterService, private router: Router) {}

ngOnInit(): void
  {this.buildForm();}

  d!: DataItem;
  i = AppComponent.i;
  accountForm!: FormGroup;
  showServerError!: boolean;
  showAccountAddition!: boolean;
  showAccountFailure!: boolean;
  showAccountFilter!: boolean;
  showFilterFailure!: boolean;
  listOfData=AppComponent.listOfData;
  result=this.listOfData;
  @Input()Filt1: string="";
  @Input()Filt2: string="";
  @Input()Filt3: string="";
  @Input()Filt4: string="";
  @Input()Filt5: string="";

listOfColumn =
  [{title: 'Name',
    compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)},
   {title: 'Email',
    compare: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email)},
   {title: 'Password',
    compare: (a: DataItem, b: DataItem) => a.password.localeCompare(b.password)},
   {title: 'Location',
    compare: (a: DataItem, b: DataItem) => a.loc.localeCompare(b.loc)},
   {title: 'Gender',
    compare: (a: DataItem, b: DataItem) => a.gender.localeCompare(b.gender)},
   {title: 'Delete',
    compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)}];

buildForm(): void
  {this.accountForm = this.formbuilder.group({
    name:[null, [Validators.required,this.forbiddenNameValidator(/suicide/),this.forbiddenNameValidator(/death/)]],
    email:[null, [Validators.required, Validators.email]],
    loc:[null, [Validators.required]],
    password:[null, [Validators.required, Validators.minLength(6)]],
    gender:[null, [Validators.required, this.genderVerify()]]});}

forbiddenNameValidator(nameRe: RegExp):ValidatorFn
  {return (control: AbstractControl): ValidationErrors | null =>
    {const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;};}

genderVerify(): ValidatorFn
  {return (control: AbstractControl): { [key: string]: any } | null =>
   control.value === 'Male' ? null : {wrongColor: control.value} && control.value === 'Female' ? null : {wrongColor: control.value};}

get name() : FormControl
  {return this.accountForm.get("name") as FormControl;}

get email() : FormControl
  {return this.accountForm.get("email") as FormControl;}

get loc() : FormControl
  {return this.accountForm.get("loc") as FormControl;}

get password() : FormControl
  {return this.accountForm.get("password") as FormControl;}

get gender() : FormControl
  {return this.accountForm.get("gender") as FormControl;}

addRow()
  {if (this.accountForm.invalid) {this.showAccountFailure=false; return;}
   this.d =
   {id: `${this.i}`,
    name: this.name.value,
    email: this.email.value,
    password: this.password.value,
    loc: this.loc.value,
    gender: this.gender.value};

  this.listOfData =
  [...this.listOfData,
  {id: `${this.i}`,
   name: this.name.value,
   email: this.email.value,
   password: this.password.value,
   loc: this.loc.value,
   gender: this.gender.value}];

  this.result =
  [...this.result,
  {id: `${this.i}`,
   name: this.name.value,
   email: this.email.value,
   password: this.password.value,
   loc: this.loc.value,
   gender: this.gender.value}];

  this.i++;
  this.d=this.listOfData[this.i-1];
  this.showAccountAddition = true;
  AppComponent.listOfData=this.listOfData;
  AppComponent.result=this.result;}

deleteRow(id: string): void
{this.listOfData = this.listOfData.filter(d => d.id !== id);
 this.result = this.result.filter(d => d.id !== id);
 AppComponent.listOfData=this.listOfData;
 AppComponent.result=this.result;}

filterAccountsName()
{if(this.Filt1!="")
  {const info = this.Filt1; this.Filt2=""; this.Filt3=""; this.Filt4=""; this.Filt5="";
   this.result = this.listOfData.filter(game => game.name.includes(info));
   this.showAccountFilter=true; this.showFilterFailure=false;}
  else {this.showAccountFilter=false; this.showFilterFailure=true;}}

filterAccountsEmail()
{if(this.Filt2!="")
  {const info = this.Filt2; this.Filt1=""; this.Filt3=""; this.Filt4=""; this.Filt5="";
   this.result = this.listOfData.filter(game => game.email.includes(info));
   this.showAccountFilter=true; this.showFilterFailure=false;}
  else {this.showAccountFilter=false; this.showFilterFailure=true;}}

filterAccountsPassword()
{if(this.Filt3!="")
  {const info = this.Filt3; this.Filt1=""; this.Filt2=""; this.Filt4=""; this.Filt5="";
   this.result = this.listOfData.filter(game => game.password.includes(info));
   this.showAccountFilter=true; this.showFilterFailure=false;}
  else {this.showAccountFilter=false; this.showFilterFailure=true;}}

filterAccountsLocation()
{if(this.Filt4!="")
  {const info = this.Filt4; this.Filt1=""; this.Filt2=""; this.Filt3=""; this.Filt5="";
   this.result = this.listOfData.filter(game => game.loc.includes(info));
   this.showAccountFilter=true; this.showFilterFailure=false;}
  else {this.showAccountFilter=false; this.showFilterFailure=true;}}

filterAccountsGender()
{if(this.Filt5!="")
  {const info = this.Filt5; this.Filt1=""; this.Filt2=""; this.Filt3=""; this.Filt4="";
   this.result = this.listOfData.filter(game => game.gender.includes(info));
   this.showAccountFilter=true; this.showFilterFailure=false;}
  else {this.showAccountFilter=false; this.showFilterFailure=true;}}

displayAll(){this.Filt1="";this.Filt2="";this.Filt3="";this.Filt4="";this.Filt5="";
             this.result=this.listOfData; this.showAccountFilter=true; this.showFilterFailure=false;}
}

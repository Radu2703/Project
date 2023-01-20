import { Component } from '@angular/core';
import { DataItem } from './_core/models/entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  title: any;
  static mem: boolean=false;
  static e: string="";
  static p: string="";
  static i=4;
  static listOfData:  DataItem[] =
 [{id: '0',
   name: 'Ally Hanes',
   email: 'eve.holt@reqres.in',
   password: 'beatles',
   loc: 'Bucuresti',
   gender: 'Female'},
 {id: '1',
   name: 'Bob Brown',
   email: 'dan.bolt@reqres.in',
   password: 'cabfare',
   loc: 'Constanta',
   gender: 'Male'},
 {id: '2',
   name: 'Ceal Stone',
   email: 'beve.colt@reqres.in',
   password: 'aerial ace',
   loc: 'Iasi',
   gender: 'Male'},
 {id: '3',
   name: 'Dawn Meghan',
   email: 'avery.molon@reqres.in',
   password: 'eagles',
   loc: 'Arad',
   gender: 'Female'}];

static result: DataItem[]=
[{id: '0',
  name: 'Ally',
  email: 'ave.holt@reqres.in',
  password: 'abcdefghijk',
  loc: 'Constanta',
  gender: 'Female'},
 {id: '1',
  name: 'Bob Brown',
  email: 'ceve.holt@reqres.in',
  password: 'bacdefghijk',
  loc: 'Bucuresti',
  gender: 'Male'},
 {id: '2',
  name: 'Ceel Brown',
  email: 'deve.holt@reqres.in',
  password: 'cabcdefghijk',
  loc: 'Iasi',
  gender: 'Male'},
 {id: '3',
  name: 'Dawn Brown',
  email: 'eve.holt@reqres.in',
  password: 'eeeeefghijk',
  loc: 'Buzau',
  gender: 'Female'}];
}

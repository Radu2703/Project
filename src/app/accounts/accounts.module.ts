import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AccountsComponent } from './accounts.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './accounts-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [AccountsComponent],
  imports:
  [CommonModule,
   NzFormModule,
   ReactiveFormsModule,
   NzInputModule,
   NzIconModule,
   FormsModule,
   NzButtonModule,
   AccountsRoutingModule,
   NzTableModule,
   NzGridModule]
})
export class AccountsModule {}

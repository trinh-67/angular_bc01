import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap6Component } from './baitap6.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    Baitap6Component
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [Baitap6Component],
})
export class Baitap6Module { }

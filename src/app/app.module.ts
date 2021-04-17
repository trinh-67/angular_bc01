import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoAngularComponent } from './demo-angular/demo-angular.component';
import { BaiTapLayOutModule } from './Modules/bai-tap-lay-out/bai-tap-lay-out.module';
import { Baitap6Module } from './Modules/baitap6/baitap6.module';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';
import { DirectivesModule } from './Modules/directives/directives.module';
import { InteractionModule } from './Modules/interaction/interaction.module';



@NgModule({
  declarations: [//những thẻ có thể sử dụng được cho module này
    AppComponent,
    DemoAngularComponent,    
  ],
  imports: [
    BrowserModule,
    BaiTapLayOutModule,
    DataBindingModule,
    DirectivesModule,
    Baitap6Module,
    InteractionModule
    
    // Các module khác muốn sử dụng được trong module này thì phải import vào
  ],
  providers: [],// Nơi chứa các service muốn sử dụng được cho module này khai báo tại đây
  bootstrap: [AppComponent,DemoAngularComponent]//Các componnent sử dụng được trong file index.html
})
export class AppModule { }

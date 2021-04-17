import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapLayOutComponent } from 'src/app/bai-tap-lay-out/bai-tap-lay-out.component';
import { ContentComponent } from 'src/app/bai-tap-lay-out/content/content.component';
import { FooterComponent } from 'src/app/bai-tap-lay-out/footer/footer.component';
import { HeaderComponent } from 'src/app/bai-tap-lay-out/header/header.component';
import { SideBarComponent } from 'src/app/bai-tap-lay-out/side-bar/side-bar.component';



@NgModule({
  declarations: [
    BaiTapLayOutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BaiTapLayOutComponent]//Xuất Component ra để khi import module này vào module khác thì componnent này có thể sử dụng trong module khác
})
export class BaiTapLayOutModule { }

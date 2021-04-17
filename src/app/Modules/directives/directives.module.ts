import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDdirectivesComponent } from './attribute-ddirectives/attribute-ddirectives.component';



@NgModule({
  declarations: [
    StructuralDirectivesComponent,
    AttributeDdirectivesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StructuralDirectivesComponent, AttributeDdirectivesComponent]
})
export class DirectivesModule { }

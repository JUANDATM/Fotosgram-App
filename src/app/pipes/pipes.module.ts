import { NgModule } from '@angular/core';
import { DomSanitazerPipe } from './dom-sanitazer.pipe';



@NgModule({
  declarations: [DomSanitazerPipe],
  exports: [DomSanitazerPipe]
})
export class PipesModule { }

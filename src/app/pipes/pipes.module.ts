import { NgModule } from '@angular/core';
import { DomSanitazerPipe } from './dom-sanitazer.pipe';
import { ImagesanitazerPipe } from './imagesanitazer.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [DomSanitazerPipe, ImagesanitazerPipe, ImagenPipe],
  exports: [DomSanitazerPipe, ImagenPipe, ImagesanitazerPipe]
})
export class PipesModule { }

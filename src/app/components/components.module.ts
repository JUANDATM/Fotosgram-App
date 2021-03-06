import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostsComponent } from '../components/posts/posts.component';
import { PostComponent } from '../components/post/post.component';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    MapaComponent,
    AvatarSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent
  ],

})
export class ComponentsModule { }

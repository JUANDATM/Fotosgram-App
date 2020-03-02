import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostsComponent } from '../components/posts/posts.component';
import { PostComponent } from '../components/post/post.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    PostsComponent
  ],

})
export class ComponentsModule { }

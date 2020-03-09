import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};
  constructor(private usuarioService: UsuarioService, private postsService: PostsService , private uiService: UiServiceService) {}

ngOnInit(): void {
  this.usuario = this.usuarioService.getUsuario();
}


async actualizar(fActualizar: NgForm){
  if (fActualizar.invalid) {return;}
  const actualizado = await this.usuarioService.actualiarUsuario(this.usuario);
  if (actualizado) {
    //toast con el mensaje de actualizado
    this.uiService.presentToast('Registro Actualizado');
   }else{
    //toast con el error
    this.uiService.presentToast('Error al Acrualizar');

   }
}

logout() {

  this.postsService.paginaPosts = 0;
  this.usuarioService.logout();

}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /*para pegar o nome do usuario*/
  nome = environment.nome
  /*para pegar a foto do usuario foto = environment.foto, mas eu não quero que a foto fique na navbar, vai ficar pagina-inicio*/

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  /*para sair da pagina, e vai voltar para pagina de login */
  sair(){

    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome =''
    environment.foto = ''
    environment.id = 0
  }
}

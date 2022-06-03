import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  /*para pegar a foto que o usuario colocou, para colocar na coluna da direita*/
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    /*sempre que estrar na pagina inicio vai verificar se o token esta vazio, se tiver vai direcionar para pagina de login */
    if(environment.token == ''){
      alert('Seção expirada')
      this.router.navigate(['/entrar'])

    }
  }

}

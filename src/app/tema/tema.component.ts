import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from './../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema() /*instanciando */
  listaTemas: Tema[]
  
  constructor(
    private router: Router,
    private temaService: TemaService /*denpendencia que vamos prescisar, que vem do tema.service */

  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Seção expirada')
      this.router.navigate(['/entrar'])

    }

    this.findAllTemas() /*para que toda vez que iniciar a tema mostre todos os temas */
  }

  findAllTemas(){ /*para listar  todos os temas usando o  get do service*/
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){ /*para cadastrar um novo tema com o post do service */
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert("Tema cadastrado")
      this.findAllTemas() /*para qunado inserir um novo tema, ele mostrar a lista atualizada */
      this.tema = new Tema() /*para quando cadastrar, o tema não ficar na caixinha */
    })
  }
}

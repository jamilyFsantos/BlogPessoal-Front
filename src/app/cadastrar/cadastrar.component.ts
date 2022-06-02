import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router, /*para fazer rotas internas, como fizemos no site do capitão */
    
  ) { }

  ngOnInit() {
    window.scroll(0,0) /*para ficar no topo da tela */
  }

  /*metodo para confirmar senha */
  confirmaSenha(event: any) { 
    this.confirmarSenha = event.target.value
  }

  /*metodo para pedar o que a pessoa selecionou, se é adiministrador ou normal*/
  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    /*para comparar senhas, do campo senha e confirmar senha  */

    if(this.user.senha != this.confirmarSenha){
      alert( 'senhas incorretas')
      /*isso é para se as senhas são iguais é para continuar */
    }else this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar']) /*para quando clicar em cadastrar ir para a pagina de login */
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)

  }

  /*metodo para saber se o usaurio esta logado, usando o token, vamos usar isso no app.component.html, para que se o usuario estiver logado apareça o menu e rodape */
  logado(){
    let ok: boolean = false

    /*quando o token for diferente de vazio */
    if(environment.token !=''){
      ok = true
    }
    return ok
  }
}

import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    public postagem: Postagem[] /*isso é o relacionamento que tem lá no java*/
}
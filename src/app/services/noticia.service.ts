import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  //Variável criada para armazenar o endereço da API
  url = "http://localhost:3000/noticias";
  HttpClient: any;
  static httpClient: any;

  //Insere a dependência HttpClient
  constructor(private httpClient: HttpClient) { }

  //Variável que armazena as configurações dos Headers da requisição
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  //Método GET, que vai trazer as notícias da API
  getNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }

  postNoticia(noticia: Noticia): Observable<Noticia> {
    return this.HttpClient.postNoticia(this.url, JSON.stringify(noticia), this.httpOptions)
  }

}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Noticia } from "../models/noticia";

@Injectable({
  providedIn: "root"
})
export class NoticiaService {

  url = "http://localhost:4200/noticias";

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'aplication/json' })
  }

  getNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }
}

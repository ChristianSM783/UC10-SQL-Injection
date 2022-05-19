import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaNoticias = [] as Noticia[];

  noticiaForm = {
    titulo: "Noticia extra",
    descricao: "Descrição da notícia extra"
  }

    constructor(private NoticiaService: NoticiaService) {}

    ngOnInit(): void{
    }
    
    carregarNoticias() {
      this.NoticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[] ) => {
        this.listaNoticias = noticiasRecebidas;
        console.log(this.listaNoticias)
    })
  }

  salvarNoticia() {
    this.NoticiaService.postNoticia(this.noticiaForm).subscribe( () => {
      this.carregarNoticias();
    })
  }
}

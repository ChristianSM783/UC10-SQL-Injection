import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();

  mensagem = "";

  onSubmit() {
    this.loginService.login(this.loginModel).subscribe((response) => {
      this.mensagem = "Cadastro com sucesso";
      this.router.navigateByUrl("login");
    }, (error) => {
      console.log(error)
      this.mensagem = error.error;
    })
  }
}

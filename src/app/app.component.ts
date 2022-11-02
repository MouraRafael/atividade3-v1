import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router:Router
  ){}
  toCadastro(){
    this.router.navigate(["/estoque/cadastro"])
  }

  toListagem(){
    this.router.navigate(["estoque/lista"])
  }
}

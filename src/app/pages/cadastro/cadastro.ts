import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleInput } from "../../components/inputs/simple-input/simple-input";

@Component({
  selector: 'pagina-cadastro',
  imports: [SimpleInput],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);
  usuarioOuEmail: string = '';
  senha: string = '';
  email: string = '';

  onCadastrar() {
    console.log('Cadastro enviado');
  }
}
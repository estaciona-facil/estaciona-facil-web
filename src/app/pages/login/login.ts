import { Component, inject } from '@angular/core';
import { SimpleInput } from '../../components/inputs/simple-input/simple-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SimpleInput],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);
  usuarioOuEmail: string = '';
  senha: string = '';

  onLogin() {
    console.log("teste");
    this.router.navigate(['proprietario/dashboard']);
  }
}

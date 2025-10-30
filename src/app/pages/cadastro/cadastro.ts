import { Component } from '@angular/core';
import { CadastroForm } from '../../components/forms/cadastro-form/cadastro-form';

@Component({
  selector: 'pagina-cadastro',
  imports: [CadastroForm],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})

export class Cadastro {}
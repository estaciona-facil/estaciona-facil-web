import { Component, inject, Input } from '@angular/core';
import { SimpleInput } from '../../inputs/simple-input/simple-input';
import { Router } from '@angular/router';
import { ExternalLogins } from '../login-form/login-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cadastro-form',
  standalone: true,
  imports: [SimpleInput, FormsModule],
  templateUrl: './cadastro-form.html',
  styleUrls: ['./cadastro-form.css', '../forms.css']
})

export class CadastroForm {
    router = inject(Router);
    externalLogins = new ExternalLogins();
    name: string = '';
    email: string = '';
    password: string = '';


    @Input() formTitle!: string;

    onSubmit()
    {
      this.router.navigate(['/login'], {
        queryParams: {
          email: this.email
        }
      });
    }

    login()
    {
      this.router.navigate(['/login']);
    }
}
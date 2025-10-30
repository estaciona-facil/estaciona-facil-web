import { Component, inject, Input } from '@angular/core';
import { SimpleInput } from '../../inputs/simple-input/simple-input';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface ExternalLogin {
    iconPath: string;
    name: string;
    urlRedirect: string;
    action: any;
} 

interface UserInfo {
    email: string;
    password: string;
}

export class ExternalLogins {
  logins: ExternalLogin[] = [
      { 
          iconPath: "gmail-icon.png",
          name: "Gmail",
          urlRedirect: "https://www.google.com.br",
          action: null
      }
    ] 
}

@Component({
  selector: 'login-form',
  imports: [SimpleInput, FormsModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css', '../forms.css']
})

export class LoginForm {
    router = inject(Router);
    route = inject(ActivatedRoute);
    externalLogins = new ExternalLogins();
    
    email: string = '';
    password: string = '';
    @Input() formTitle!: string;

     ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['email']) this.email = params['email'];
      });
    }

    onSubmit()
    {
      this.router.navigate(['/proprietario/dashboard'])
    }

    register()
    {
      this.router.navigate(['/cadastro']);
    }
}
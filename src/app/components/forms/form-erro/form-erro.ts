import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-erro',
  templateUrl: './form-erro.html',
  styleUrls: ['./form-erro.css']
})
export class FormErro {
  @Input() mensagem: string = '';
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-controls-e-form-groups',
  templateUrl: './form-controls-e-form-groups.component.html',
  styleUrls: ['./form-controls-e-form-groups.component.css']
})
export class FormControlsEFormGroupsComponent implements OnInit {

  aula: string = 'FormControls e FormGroups';

  cadastroform: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    senhaConfirmacao: new FormControl('')
  });

  ngOnInit(): void {

  }

  adicionarUsuario(): void {
    let x = this.cadastroform.value;
    console.log(x);
  }
}

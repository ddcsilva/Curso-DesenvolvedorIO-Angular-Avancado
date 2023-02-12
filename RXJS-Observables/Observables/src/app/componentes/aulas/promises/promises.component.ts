import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  contador: number = 1;
  tempo: number = 0;
  aula: string = 'Promises';
  iniciando: string = '';
  resultadoPromise: string = '';
  parametro: string = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.parametro = 'Danilo';
      this.chamarPromise(this.parametro);
    }, this.tempo);
    setTimeout(() => {
      this.parametro = 'Rosana';
      this.chamarPromise(this.parametro);
    }, this.tempo += 2000);
    setTimeout(() => {
      this.parametro = 'Danilo';
      this.chamarPromise(this.parametro);
    }, this.tempo += 2000);
    setTimeout(() => {
      this.parametro = 'Raquel';
      this.chamarPromise(this.parametro);
    }, this.tempo += 2000);
    setTimeout(() => {
      this.iniciando = '';
      this.parametro = '';
      this.resultadoPromise = 'Fim da execução';
    }, this.tempo += 2000);
  }

  minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome.toUpperCase() === 'DANILO') {
        resolve(`Seja bem vindo ${nome}`);
      } else {
        reject(`Ops! Seu nome não é Danilo! Seu nome é ${nome}`)
      }
    });
  }

  chamarPromise(nome: string): void {

    this.iniciando = `Chamando a Promisse nº ${this.contador}!`;
    this.minhaPromise(nome)
      .then(sucesso => {
        this.resultadoPromise = sucesso;
      })
      .catch(erro => {
        this.resultadoPromise = erro;
      })
    this.contador++;

  }
}

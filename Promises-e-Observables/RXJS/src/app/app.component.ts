import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'RXJS';

  minhaPromisse(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === 'Danilo') {
        setTimeout(() => {
          resolve(`Seja bem vindo ${nome}`);
        }, 5000);
      }
      else {
        setTimeout(() => {
          reject(`Ops! Você não é o Danilo! Seu nome é ${nome}`);
        }, 5000);
      }
    })
  }

  invocarPromise(nome: string): void {
    console.log('Invocando Promisse!');
    this.minhaPromisse(nome)
      .then(resultado => console.log(resultado))
      .catch(erro => console.log(erro));
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Rosana') {
        setTimeout(() => {
          subscriber.next(`Olá! ${nome}`);
        }, 1000);
        setTimeout(() => {
          subscriber.next(`Olá! ${nome}, de novo!`);
        }, 2000);
        setTimeout(() => {
          subscriber.next(`Olá! ${nome}, mais uma vez!`);
        }, 3000);
      }
      else {
        subscriber.error('Ops! Deu erro na Observable!');
      }

    });
  }

  invocarObservable(nome: string): void {
    console.log('Invocando Observable!');
    this.minhaObservable(nome)
      .subscribe({
        next: (next) => console.log(next),
        error: (error) => console.error(error),
        complete: () => console.info('Observable Completo')
      });
  }

  ngOnInit(): void {
    this.invocarPromise('Danilo');
    this.invocarPromise('João');
    this.invocarObservable('Rosana');
    this.invocarObservable('Raquel');
  }
}

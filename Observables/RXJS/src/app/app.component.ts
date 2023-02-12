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
      subscriber.complete();
    });
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      }
      else {
        subscriber.error('Ops! Deu erro na Observable!');
      }
    });
  }

  invocarObservableExemplo1(nome: string): void {
    console.log('Invocando Observable! Exemplo 1');

    this.minhaObservable(nome)
      .subscribe({
        next: (next) => console.log(next),
        error: (error) => console.error(error),
        complete: () => console.info('Observable Completo')
      });
  }

  invocarObservableExemplo2(nome: string): void {
    console.log('Invocando Observable! Exemplo 2');

    const observer = {
      next: (next: any) => console.log(`Next: ${next}`),
      error: (error: any) => console.error(`Error: ${error}`),
      complete: () => console.info('Observable Completo')
    }

    this.minhaObservable(nome)
      .subscribe(observer);
  }

  invocarObservableExemplo3(nome: string, email: string): void {
    console.log('Invocando Observable!');

    const observer = {
      next: (next: any) => console.log('Next:', next),
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.info('FIM!')
    }

    const obs = this.usuarioObservable(nome, email);
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão fechada :' + subs.closed);
    }, 3500);
  }

  ngOnInit(): void {
    // this.invocarObservableExemplo1('Rosana');
    // this.invocarObservableExemplo1('Raquel');
    // this.invocarObservableExemplo2('Rosana');
    // this.invocarObservableExemplo2('Raquel');
    this.invocarObservableExemplo3('Admin', 'admin@admin.com');
  }
}

export class Usuario {
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}

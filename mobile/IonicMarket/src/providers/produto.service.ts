import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UtilService } from './util.service';

@Injectable()
export class ProdutoService{

    constructor(public http: Http,
                public utilService : UtilService,
            ){}

    listarTodos(nome: string): Promise<Response>{
        let host = this.utilService.obterHostDaApi();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(host + 'api/produtos/' + nome, { headers: headers}).toPromise();
    }

    listarPorNome(produtoNome : string): Promise<Response>{
        let host = this.utilService.obterHostDaApi();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(host + 'api/produtos/' + produtoNome, {headers: headers}).toPromise();
    }

    adicionar(request: any): Promise<Response>{
        let host = this.utilService.obterHostDaApi();

        let headers : any = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(host + 'api/produtos', request, {headers : headers }).toPromise();
    }

    atualizar(produtoId: string): Promise<Response>{
        let host = this.utilService.obterHostDaApi();

        let headers : any = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(host + 'api/produtos/', produtoId, {headers : headers }).toPromise();
    }

    remover(produtoId : string): Promise<Response>{
        let host = this.utilService.obterHostDaApi();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.delete(host + 'api/produtos/' + produtoId, {headers: headers}).toPromise();
    }
}
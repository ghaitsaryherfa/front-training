import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UrlService } from './url.service';

@Injectable()
export class QuesionerService {

    constructor(private http: Http, private urlService: UrlService) {

    }

    public addJawaban(kode_gejala: any): Observable<boolean>{
        return this.http.post(this.urlService.postUrlSubmitJawaban(), kode_gejala)
        .map(this.extractData)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }
} 
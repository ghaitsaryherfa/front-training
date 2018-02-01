import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UrlService {
    constructor() {
    }
    serverUrl: string ="http://rumaji.azurewebsites.net/skripsi-getsa/api";

    getUrlPenyakitAll(): string {
        return this.serverUrl + "/penyakit/all";
    }

    getUrlPenyakit(id:string): string {
        return this.serverUrl + "/penyakit/" + id;
    }

    getUrlPertanyaan(): string {
        return this.serverUrl + "/pertanyaan/all";
    }

    postUrlDeleteJawaban(): string {
        return this.serverUrl + "/jawaban/delete";
    }

    postUrlSubmitJawaban(): string {
        return this.serverUrl + "/jawaban/submit";
    }

    getUrlHasil(): string {
        return this.serverUrl + "/hasil";
    }
}
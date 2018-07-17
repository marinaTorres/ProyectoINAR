import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class infoService {
  constructor(private _http: HttpClient) { }
  getData() {
    return this._http.get("http://127.0.0.1:8081/listUsers")
      .map(result => result);
  }
}

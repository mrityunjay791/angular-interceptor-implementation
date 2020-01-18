import { Injectable } from '@angular/core';
import { InterceptorService } from './interceptor.service';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http2: InterceptorService) {

  };

  public getData(): Observable<any> {
    alert('dat..');
    return this.http2.get('data');
  }


  public getSecondData(): Observable<any> {
    return this.http2.get('second');
  }
}


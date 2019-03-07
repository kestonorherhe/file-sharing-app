import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint: string = `http://localhost:8000`;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const httpOptions2 = {
  responseType: "blob" as "json",
};

@Injectable({
  providedIn: "root"
})
export class FilesService {
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(private http: HttpClient) {}

  getFiles(): Observable<any> {
      return this.http.get(`${ endpoint }/files`, httpOptions)
                  .pipe(map(this.extractData))
  }

  downloadFile(name): Observable<any> {
    console.log(name)
    return this.http
      .get(`http://localhost:8000/retrieve/${name}`, httpOptions2).pipe(map(this.extractData))
  }

  // downloadFile(name): Observable<any> {
  //   console.log(name)
  //   return this.http
  //     .get(`http://localhost:8000/retrieve/${name}`, {
  //       responseType: "blob"
  //     });
  // }

}

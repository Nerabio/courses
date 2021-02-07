import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { BlobFile } from '../models/blob-file.model';


// Базовый Сервис - обертка для HttpClient
@Injectable({ providedIn: 'root' })
export class BaseHttpService {
  protected options = { headers: {'Content-Type': 'application/json'}, withCredentials: true };

  constructor(
    private http: HttpClient) {
  }

  // Базовый метод для получения данных с сервера GET-ом
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, this.options);
  }

  // Базовый метод для получения данных с сервера POST-ом
  post2<T>(url: string, data?: any): Observable<T> {
    return this.http.post<T>(url, JSON.stringify(data), this.options);
  }

  // Базовый метод для получения данных с сервера PUT-ом
  put<T>(url: string, data?: any): Observable<T> {
    return this.http.put<T>(url, JSON.stringify(data), this.options);
  }

  // Базовый метод для удаления методом delete
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, this.options);
  }

  // Базовый метод для загрузки файла на сервер
  upload<E>(url: string, file: any): Observable<E> {
    const input = new FormData();
    input.append('file', file);
    return this.http.post<E>(url, input, {withCredentials: true});
  }

  download(url: string): Observable<BlobFile> {
    return Observable.create(observer => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.responseType = 'blob';
      xhr.withCredentials = true;

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {

            const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            const blob = new Blob([xhr.response], {type: contentType});
            // var filename = xhr.getResponseHeader('ReportFilename');
            const blobfile = new BlobFile();
            blobfile.blob = blob;
            // blobfile.filename = filename;
            observer.next(blobfile);
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
      xhr.send();
    });
  }

  // TODO: выпилить и все вызовы заменить post2
  // Базовый метод для отправки и получения данных с сервера POST-ом
  // post<T, E>(url: string, data: T, onResponce?: (responce: E) => void, onError?: () => void): Observable<E> {
  //   return this.http.post<E>(url, JSON.stringify(data), this.options)
  //     .catch((ex: any) => {
  //       if (onError != null) {
  //         onError(); }
  //       return observableOf({} as E);
  //     })
  //     .pipe(map(r => {
  //       if (onResponce != null) {
  //         //onResponce(r); 
  //       }
  //       return r;
  //     }));
  // }

  
}

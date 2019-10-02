import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, throttleTime } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map(res => res.filter(el => el.id < 5)),
        tap(data => console.log(data, "inside servbice"))
      )
  }

  getPosts(arg: string) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${arg}`)
      .pipe(tap(res => console.log(res, "success"))
        , catchError(err => {
          console.log("err", err)
          return throwError(err.message);
        }))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://baconipsum.com/api/?type=meat-and-filler"

  constructor(private http: HttpClient) { }

  getText(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }

}

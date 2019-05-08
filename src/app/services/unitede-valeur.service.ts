import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { UnitedeValeur } from '../model/UnitedeValeur';

@Injectable({
  providedIn: 'root'
})
export class UnitedeValeurService {

  constructor(private http: HttpClient) { }
  
public getUnitedeValeur(id: string): Observable<any> {
    return this.http.get("http://localhost:8088/unites/" + id);
  }

  public getAllUnites(): Observable<any> {
    return this.http.get("http://localhost:8088/unites/" );
   
  }

  // POST REQUEST
  public saveUnites(body): Observable<any> {
    return this.http.post("http://localhost:8088/unites", body);
  }

 
  //delete req
  public deleteUnites(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/unites/" + id );
  }


}
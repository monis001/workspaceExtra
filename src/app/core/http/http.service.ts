import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private httpClient:HttpClient){}
   // ANY is just temporarily
   get(url:string): Observable<any>{
    return this.httpClient.get(url)
   }
   
   post(url:string,data:object){

   }
   
   put(url:string,data:object){

   }

   delete(url:string,data:object){

   }
}
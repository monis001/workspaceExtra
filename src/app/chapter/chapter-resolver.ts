import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterState } from '@angular/router';
import { HttpService } from '../core/http/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChapterResolver implements Resolve<any>{
    constructor(private httpService: HttpService, private http: HttpClient) {}
    resolve(activatedRoute: ActivatedRouteSnapshot): Observable<any> | Boolean{
        console.log(activatedRoute.params.id)
        //return this.http.get('../../data/chapter.json');
        return true;
    }
}
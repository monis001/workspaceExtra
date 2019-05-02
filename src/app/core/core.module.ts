import { NgModule } from "@angular/core";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './http/http.service';

@NgModule({
    imports:[],
    exports:[],
    providers:[
        HttpService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ]
})
export class CoreModule {

}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ChapterComponent } from './chapter.component';

const routes: Routes = [{
    path:'',
    component: ChapterComponent,

}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChapterRouteModule {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ChapterComponent } from './chapter.component';
import { ChapterResolver } from './chapter-resolver';

const routes: Routes = [{
    path:'',
    component: ChapterComponent,
    resolve:{
        chapterResolve: ChapterResolver
    }

}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChapterRouteModule {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const app_routes : Routes = [
    {path: '', pathMatch:'full', redirectTo:'/quiz'},
    {path: 'quiz', loadChildren :'./quiz/quiz.module#QuizModule'},
    {path: 'chapter/:id', loadChildren:'./chapter/chapter.module#ChapterModule'}
]
@NgModule({
    imports:[RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
    exports:[RouterModule]
})
export class AppRoutingModule { }
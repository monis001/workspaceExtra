import { NgModule } from "@angular/core";
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
    imports:[QuizRoutingModule],
    exports:[],
    declarations:[QuizComponent]
})
export class QuizModule {}
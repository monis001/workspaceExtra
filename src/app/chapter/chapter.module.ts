import { NgModule } from "@angular/core";
import { ChapterRouteModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChapterTheoryComponent } from './chapter-theory/chapter-theory.component';
import { ChapterTaskComponent } from './chapter-task/chapter-task.component';
@NgModule({
    imports:[NgbModule,ChapterRouteModule],
    declarations:[ChapterComponent,ChapterTheoryComponent,ChapterTaskComponent],
    exports:[]
})
export class ChapterModule {}
import { NgModule } from "@angular/core";
import { NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { ChapterRouteModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
@NgModule({
    imports:[NgbTabsetModule,ChapterRouteModule],
    declarations:[ChapterComponent],
    exports:[]
})
export class ChapterModule {}
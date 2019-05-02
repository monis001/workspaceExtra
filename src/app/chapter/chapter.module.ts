import { NgModule } from "@angular/core";
import { ChapterRouteModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports:[NgbModule,ChapterRouteModule],
    declarations:[ChapterComponent],
    exports:[]
})
export class ChapterModule {}
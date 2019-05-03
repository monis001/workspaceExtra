import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ChapterRouteModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChapterTheoryComponent } from './chapter-theory/chapter-theory.component';
import { ChapterTaskComponent } from './chapter-task/chapter-task.component';
import { ChapterResolver } from './chapter-resolver';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [NgbModule, ChapterRouteModule, CommonModule, MarkdownModule.forChild()
    ],
    declarations: [ChapterComponent, ChapterTheoryComponent, ChapterTaskComponent],
    exports: [],
    providers: [ChapterResolver]
})
export class ChapterModule {}

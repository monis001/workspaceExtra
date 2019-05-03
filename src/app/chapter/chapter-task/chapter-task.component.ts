import { Component } from "@angular/core";
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-chapter-task',
    templateUrl: './chapter-task.component.html',
    styleUrls:['./chapter-task.component.css']
})
export class ChapterTaskComponent {
    constructor(config: NgbAccordionConfig){
        config.closeOthers = true;
    config.type = 'infoss';
    
    }
}
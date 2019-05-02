import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-chapter',
    templateUrl: './chapter.component.html'
})
export class ChapterComponent implements OnInit {
    ngOnInit(): void {
        console.log('From chapters')
    }
}
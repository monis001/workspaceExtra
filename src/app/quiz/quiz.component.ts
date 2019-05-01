import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-quiz',
    templateUrl:'./quiz.component.html',
})
export class QuizComponent implements OnInit{
    ngOnInit(){
        debugger
        console.log('This is a quiz component');
    }
    constructor(){

    }
}
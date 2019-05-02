import { Component, OnInit } from "@angular/core";
declare var $: any ;
@Component({
    selector:'app-chapter-theory',
    templateUrl:'./chapter-theory.component.html',
    styleUrls:['./chapter-theory.component.css']
})
export class ChapterTheoryComponent implements OnInit{
    ngOnInit(): void {
        var winHeight = $(window).height(),
  docHeight = $(document).height(),
  progressBar = $("progress"),
  max,
  value;
max = docHeight - winHeight;
progressBar.attr("max", max);

$(document).on("scroll", function() {
  value = $(window).scrollTop();
  progressBar.attr("value", value);
});

    }
    
}
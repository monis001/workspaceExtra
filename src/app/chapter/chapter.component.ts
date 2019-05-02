import { Component, OnInit } from "@angular/core";
declare var $ : any ;
@Component({
    selector: 'app-chapter',
    templateUrl: './chapter.component.html',
    styleUrls:['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
    ngOnInit(): void {
        console.log('From chapters')
      
//         const find = document.querySelector.bind(document);

// find('#updateBtn').onclick = () => {
//   // total is the circumference of the circle
//   // aka 2 * π * r
//   const total = 314;
//   //   25% filled would be:
//   // const value = total * .25
//   const value =  * total;
  
  
//   find('#circle').style.strokeDasharray = value + ' ' + total;

// }
    }
}
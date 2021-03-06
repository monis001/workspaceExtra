import { Component } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-chapter-task',
    templateUrl: './chapter-task.component.html',
    styleUrls: ['./chapter-task.component.css']
})
export class ChapterTaskComponent {
constructor(config: NgbAccordionConfig){
        //config.closeOthers = true;
    
    }
  public tasks: any[] = [{
    'id': 1,
    'chapter_id': 101,
    'question': 'Create a form action',
    'description': 'Add a form action name Test',
    'status': 'Completed',
    'marks': 10,
  },
    {
      'id': 2 ,
      'chapter_id': 101,
      'question': 'Disable a newly created form action',
      'description': 'Add a form action name Test',
      'status': 'InProgress',
      'marks': 20,
    },
    {
      'id': 3 ,
      'chapter_id': 101,
      'question': 'Create a global form action',
      'description': 'Apply a newly created form action on all forms.',
      'status': 'InProgress',
      'marks': 25,
    },
    {
      'id': 4 ,
      'chapter_id': 101,
      'question': 'Enable a newly created form action',
      'description': 'Add a form action name Test',
      'status': 'InProgress',
      'marks': 25,
    }
  ];
}

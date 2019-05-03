import { Component } from '@angular/core';

@Component({
    selector: 'app-chapter-task',
    templateUrl: './chapter-task.component.html',
    styleUrls: ['./chapter-task.component.css']
})
export class ChapterTaskComponent {

  public tasks: any[] = [{
    'id': 1,
    'chapter_id': 101,
    'question': 'Create a form action',
    'description': 'Add a form action name Test',
    'status': 'Completed',

  },
    {
      'id': 2 ,
      'chapter_id': 101,
      'question': 'Disable a newly created form action',
      'description': 'Add a form action name Test',
      'status': 'InProgress',

    },
    {
      'id': 3 ,
      'chapter_id': 101,
      'question': 'Make your form action global',
      'description': 'Apply a newly created form action on all forms.',
      'status': 'InProgress',

    },
    {
      'id': 4 ,
      'chapter_id': 101,
      'question': 'Enable a newly created form action',
      'description': 'Add a form action name Test',
      'status': 'InProgress',

    }
  ];
}

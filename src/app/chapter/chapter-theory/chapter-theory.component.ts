import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
    selector: 'app-chapter-theory',
    templateUrl: './chapter-theory.component.html',
    styleUrls: ['./chapter-theory.component.css']
})
export class ChapterTheoryComponent implements OnInit {
  public markdown = `<b>  Form Actions </b>
        <p> Form actions play a vital role in creating action items that can be used for numerous actions
        like Save, Delete, Reset , Cancel etc.
         As an application developer, you will be able to add action buttons to the form to
          suit your business requirements.
        </p>

        <p>Form actions have the following attached to it, to make it actionable</p>
        <ul>
            <li>Action Name.</li>
            <li>Action Label (Text Displayed on the button).</li>
            <li>Form: On which form this button will be placed.</li>
            <li>Order: Order within the button list.</li>
         </ul>
         <b>  Form Actions </b>
        <p> Form actions play a vital role in creating action items that can be used for numerous actions
        like Save, Delete, Reset , Cancel etc.
         As an application developer, you will be able to add action buttons to the form to
          suit your business requirements.
        </p>

        <p>Form actions have the following attached to it, to make it actionable</p>
        <ul>
            <li>Action Name.</li>
            <li>Action Label (Text Displayed on the button).</li>
            <li>Form: On which form this button will be placed.</li>
            <li>Order: Order within the button list.</li>
         </ul>
         <b>  Form Actions </b>
        <p> Form actions play a vital role in creating action items that can be used for numerous actions
        like Save, Delete, Reset , Cancel etc.
         As an application developer, you will be able to add action buttons to the form to
          suit your business requirements.
        </p>

        <p>Form actions have the following attached to it, to make it actionable</p>
        <ul>
            <li>Action Name.</li>
            <li>Action Label (Text Displayed on the button).</li>
            <li>Form: On which form this button will be placed.</li>
            <li>Order: Order within the button list.</li>
         </ul>
         <b>  Form Actions </b>
        <p> Form actions play a vital role in creating action items that can be used for numerous actions
        like Save, Delete, Reset , Cancel etc.
         As an application developer, you will be able to add action buttons to the form to
          suit your business requirements.
        </p>

        <p>Form actions have the following attached to it, to make it actionable</p>
        <ul>
            <li>Action Name.</li>
            <li>Action Label (Text Displayed on the button).</li>
            <li>Form: On which form this button will be placed.</li>
            <li>Order: Order within the button list.</li>
         </ul>
`;
    ngOnInit(): void {
        let winHeight = $(window).height(),
  docHeight = $(document).height(),
  progressBar = $('progress'),
  max,
  value;
max = docHeight - winHeight;
progressBar.attr('max', max);

$(document).on('scroll', function() {
  value = $(window).scrollTop();
  progressBar.attr('value', value);
});

    }

}

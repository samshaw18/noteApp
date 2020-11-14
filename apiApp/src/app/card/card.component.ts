import { Component, Input, OnInit } from '@angular/core';
import { Note } from "../notes";
import { NotesApiService } from '../notes-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() note:Note;
  edit=false;
  form;
  constructor(private formBuilder:FormBuilder,private api:NotesApiService) {
    this.form = this.formBuilder.group({
      id: '',
      title: '',
      content: '',

    })
   }

  ngOnInit(): void {
    if (this.note) {
      console.log(this.note);
      

      
    }
    
  }
  delete(i){
    this.api.deleteNote(i).subscribe()
    window.location.reload()
  }
  put(id){
    console.log(this.form);
    

    const noteBody = new Note(
      id,
      this.form.controls.title.value,
      this.form.controls.content.value,

    );
    console.log(noteBody);

    this.api.putNote(noteBody,id).subscribe()
    window.location.reload()

    
  }

}

import { Component, OnInit } from '@angular/core';
import { NotesApiService } from '../notes-api.service';
import { Note } from '../notes';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form;
  constructor(private formBuilder:FormBuilder,private api:NotesApiService) { 
    this.form = this.formBuilder.group({
      id: '',
      title: '',
      content: '',

    })
  }
  notes:Note[] = [];
 
  // clickedChar:Note;
  expanded={};
  addCharBtn:boolean=false;



 

  ngOnInit(): void {
  this.api.getAllNotes().subscribe(data => {
    this.notes = data
    console.log(this.notes);
    
    // this.notes.forEach((c,i)=>this.expanded[i]=false)
    
  });

  
  }
  onSubmit(f){
    console.log(f);
    
  }

  add(){
    console.log(this.form);
    
    let id=this.notes[this.notes.length-1].id+1;
    const noteBody = new Note(
      id,
      this.form.controls.title.value,
      this.form.controls.content.value,

    );
    console.log(noteBody);

    this.api.addNote(noteBody).subscribe()
    this.api.getAllNotes().subscribe(data => {     
      this.notes = data
      // this.Notes.forEach((c,i)=>this.expanded[i]=false)
      
    });
    
  }



}

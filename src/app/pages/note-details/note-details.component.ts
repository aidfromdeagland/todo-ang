import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  public note: Note;

  constructor() { }

  ngOnInit(): void {
    this.note = new Note();
  }

  submit(form: NgForm): void {
    console.log(form);
  }
}

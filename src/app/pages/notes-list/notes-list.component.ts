import { Component, OnInit } from '@angular/core';
import mockData from '../../mockData';
import { NotesService } from '../../shared/notes.service';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public notes: Note[] = mockData || new Array<Note>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getAll();
  }

  deleteNote(id: number): void {
    this.notesService.delete(id);
  }
}

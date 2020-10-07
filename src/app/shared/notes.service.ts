import { Injectable } from '@angular/core';
import { Note } from './note.model';
import mockData from '../mockData';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = mockData || new Array<Note>();

  constructor() { }

  getAll(): Note[] {
    return this.notes;
  }

  get(id: number): Note {
    return this.notes.find((note) => note.id === id);
  }

  getLength(): number {
    return this.notes.length;
  }

  getId(note: Note): number {
    return note.id;
  }

  add(note: Note): void {
    this.notes.push(note);
  }

  update(id: number, title: string, body: string): void {
    const currentNote = this.notes.find((note) => note.id === id);
    currentNote.title = title;
    currentNote.body = body;
  }

  delete(id: number): void {
    this.notes.splice(this.notes.findIndex((note) => note.id === id), 1);
  }
}

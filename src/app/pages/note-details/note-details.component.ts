import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  public note: Note;
  public noteId: number;
  public isNew: boolean;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();

      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    });
  }

  submit(form: NgForm): void {
    if (this.isNew) {
      this.notesService.add({
        id: this.notesService.getLength(),
        title: form.value.title,
        body: form.value.body
      });
    } else {
      this.notesService.update(
        +this.noteId,
        form.value.title,
        form.value.body
      );
    }
    this.router.navigateByUrl('/');
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }
}

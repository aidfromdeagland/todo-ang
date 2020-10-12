import { Component, OnInit } from '@angular/core';
import mockData from '../../mockData';
import { NotesService } from '../../shared/notes.service';
import { Note } from '../../shared/note.model';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *',
        [style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.8)',
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('50ms', style({
          height: '*',
          marginBottom: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
          animate(200)
        ]),
      transition('* => void', [
        animate(100, style({
          transform: 'scale(1.1)'
        })),
        animate(100, style({
          transform: 'scale(1)',
          opacity: 0.8
        })),
        animate('150ms ease-out', style({
          transform: 'scale(0.5)',
          opacity: 0,
        })),
        animate('200ms ease-out', style({
          height: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(120, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
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

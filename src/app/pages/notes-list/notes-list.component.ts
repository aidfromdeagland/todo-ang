import { Component, OnInit } from '@angular/core';
import mockData from '../../mockData';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public mockData = mockData;

  constructor() { }

  ngOnInit(): void {
  }

}

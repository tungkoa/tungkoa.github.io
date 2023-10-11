import { Component, inject, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { AsyncPipe, NgForOf } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

interface Note {
  id?: number;
  title?: string;
  content?: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [
    CdkDrag,
    AsyncPipe,
    NgForOf,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class NotesComponent implements OnInit {
  firebase: FirebaseService = inject(FirebaseService);
  notes: Note[] = JSON.parse(localStorage.getItem('notes') || '') || [];

  constructor() {
    console.log(localStorage.getItem('notes'));
  }

  ngOnInit() {
    // this.notes$ = this.firebase.getNotes()
  }

  handleAddNote() {
    this.notes.push({
      id: new Date().valueOf(),
      title: 'title',
      content: 'this is the content',
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}

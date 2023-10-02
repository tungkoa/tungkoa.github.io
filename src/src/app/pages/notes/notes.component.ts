import { Component, inject, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { AsyncPipe, NgForOf } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

interface Note {
  title?: string;
  content?: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [CdkDrag, AsyncPipe, NgForOf, MatGridListModule, MatCardModule],
})
export class NotesComponent implements OnInit {
  firebase: FirebaseService = inject(FirebaseService);
  notes$: Observable<Note[]> = this.firebase.getNotes();

  constructor() {}

  ngOnInit() {
    // this.notes$ = this.firebase.getNotes()
  }
}

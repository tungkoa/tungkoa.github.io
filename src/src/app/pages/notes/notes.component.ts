import { Component, inject, OnInit } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import { Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [CdkDrag, AsyncPipe],
})
export class NotesComponent implements OnInit{
  firebase: FirebaseService = inject(FirebaseService);

  constructor() {
  }

  ngOnInit() {
    this.firebase.get()
  }
}

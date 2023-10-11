import { Injectable, inject } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  docData,
  doc,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  constructor() {}

  getNotes() {
    const notesCollection = collection(this.firestore, 'notes');
    return collectionData(notesCollection);
  }

  addNote() {}
}

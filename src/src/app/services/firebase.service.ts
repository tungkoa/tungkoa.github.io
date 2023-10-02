import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore, docData, doc } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  constructor() { }

  get() {
    // docData(doc(this.firestore, 'notes')  )
    console.log(collection(this.firestore, 'notes'));
    // collectionData(collection(this.firestore, 'notes'), {})
  }
}

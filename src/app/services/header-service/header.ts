import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  accesoHeader = 'header service running...';
  private collectionName = 'header';

  constructor(private firestore: Firestore) { }

  // Create
  async add(data: any) {
    try {
      const colRef = collection(this.firestore, this.collectionName);
      return await addDoc(colRef, data);
    } catch (error) {
      console.error('Error adding header:', error);
      throw error;
    }
  }

  // Read all
  getAll(): Observable<any[]> {
    const colRef = collection(this.firestore, this.collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  // Update
  async update(id: string, data: any) {
    try {
      const docRef = doc(this.firestore, `${this.collectionName}/${id}`);
      return await setDoc(docRef, data, { merge: true });
    } catch (error) {
      console.error('Error updating header:', error);
      throw error;
    }
  }

  // Delete
  async delete(id: string) {
    try {
      const docRef = doc(this.firestore, `${this.collectionName}/${id}`);
      return await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting header:', error);
      throw error;
    }
  }
}
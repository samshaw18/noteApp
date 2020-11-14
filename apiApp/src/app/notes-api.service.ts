import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Note } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(environment.notesApi);
  }

  addNote(json): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json; charset=utf8' })
    console.log(json);
    

    return this.http.post(environment.notesApi, json, {headers: headers} )
  }
  putNote(json,id): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json; charset=utf8' })
    console.log(json);
    console.log(id);
    
    

    return this.http.put(environment.notesApi+`/${id}`, json, {headers: headers} )
  }
  deleteNote(id): Observable<{}> {
    console.log("service id " + id);   
    return this.http.delete(environment.notesApi+`/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  })
  
  }
  // getUserNames() : Observable<[]>
  // {
  //   // const example = source.pipe(map(({ name }) => name));
  //   return this.http.get(environment.usersApi).pipe(flatMap(user => user.name))
  // } 

}

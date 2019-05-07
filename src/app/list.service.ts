import { Injectable } from '@angular/core';
import {Stub_object} from './stub_object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  private objectUrl = 'api/objectsList';


  getObjects(): Observable<Stub_object[]> {
    return this.http.get<Stub_object[]>(this.objectUrl)
      .pipe(
        tap(_ => catchError(this.handleError<Stub_object[]>('getObjects', []))));
  }

  getObject(id: number): Observable<Stub_object> {
    const url = `${this.objectUrl}/${id}`;
    return this.http.get<Stub_object>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Stub_object>(`getObject id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateObject(object: Stub_object): Observable<any> {
    return this.http.put(this.objectUrl, object, httpOptions).pipe(
      tap(_ => this.log(`updated object id=${object.id}`)),
      catchError(this.handleError<any>('updateObject')));

  }
  /** DELETE: delete the hero from the server */
  deleteObject(id: number): Observable<{}> {
    const url = `${this.objectUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(catchError(this.handleError(`deleteObject`))
      );
  }
  /** POST: add a new hero to the database */
  addObject (object: Stub_object): Observable<any> {
    return this.http.post<Stub_object>(this.objectUrl, object, httpOptions)
      .pipe(
        catchError(this.handleError('addObject', object))
      );
  }
  /* GET heroes whose name contains search term */
  searchObjects(term: string): Observable<Stub_object[]> {
    if (!term.trim()) {
      // if not search term, return empty object array.
      return of([]);
    }
    return this.http.get<Stub_object[]>(`${this.objectUrl}/?name=${term}`).pipe(
      tap(),
      catchError(this.handleError<Stub_object[]>('searchObjects', []))
    );
  }
}

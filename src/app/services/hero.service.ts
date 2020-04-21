import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = '/Heros';
  heros: Hero[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getHeros(): Observable<Hero[]> {
    // return of(this.heros);
    return this.http.get<Hero[]>(this.heroUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeros', []))
      );
  }

  getHero(id: number): Observable <Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url)
              .pipe(
                catchError(this.handleError<Hero>(`getHero id=${id}`))
              );
  }

  updateHero(hero: Hero): Observable<any> {
    const url = `${this.heroUrl}/${hero.id}`;
    return this.http.put(url, hero , this.httpOptions)
              .pipe(
                catchError(this.handleError<any>('updateHero'))
              );
  }

  addHero(hero: Hero): Observable<any> {
    const url = `${this.heroUrl}`;
    return this.http.post(url, hero , this.httpOptions)
              .pipe(
                catchError(this.handleError<any>('addHero'))
              );
  }

  deleteHero(hero: Hero): Observable<any> {
    const url = `${this.heroUrl}/${hero.id}`;
    return this.http.delete(url, this.httpOptions)
              .pipe(
                catchError(this.handleError<any>('deleteHero'))
              );
  }

  resetHeros(): void {
    const defaultHeros: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }];

    this.http.get<Hero[]>(this.heroUrl)
        .subscribe(heros => heros.map(
          (hero) => {
            console.log(hero);
            const url = `${this.heroUrl}/${hero.id}`;
            this.http.delete(url, this.httpOptions)
                .subscribe((item) => {
                  console.log(item);
                  defaultHeros.map((thero) => {
                    this.http.post(this.heroUrl, thero , this.httpOptions)
                      .subscribe((result) => {
                        console.log(result);
                      });
                  });
                });
          }
          ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
  ) {}
}

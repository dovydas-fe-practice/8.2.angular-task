import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Hero} from './hero';
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            this.router.navigateByUrl('/dashboard')
              .then(() => {
                return throwError(() => new Error(err.body.error));
              });
          }

          return throwError(() => new Error(err.body.error));
        })
      )
  }
}

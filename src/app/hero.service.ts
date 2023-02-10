import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, EMPTY, Observable, throwError } from 'rxjs'
import { Hero } from './hero'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes'

  constructor(private httpClient: HttpClient, private router: Router) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`)
  }
}

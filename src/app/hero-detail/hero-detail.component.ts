import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = {} as Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((route) => {
      const id = convertToParamMap(route).get('id');

      if (!id) {
        console.warn('No id found');
      }

      this.getHero(Number(id));
    });
  }

  getHero(id: number): void {
    this.heroService
      .getHero(id)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            this.router.navigate(['/dashboard']);
          }

          return EMPTY;
        })
      )
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}

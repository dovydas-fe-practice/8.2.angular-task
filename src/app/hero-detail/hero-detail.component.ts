import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { catchError, EMPTY, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero = {} as Hero;
  private subscriptions!: Subscription[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const subscription = this.route.params.subscribe((route) => {
      const id = convertToParamMap(route).get('id');

      if (!id) {
        console.warn('No id found');
      }

      this.getHero(Number(id));
    });

    this.subscriptions.push(subscription);
  }

  getHero(id: number): void {
    const subscription = this.heroService
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

    this.subscriptions.push(subscription);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

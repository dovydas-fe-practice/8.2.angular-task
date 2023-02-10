import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../services/hero.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private service: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.service.getHeroes().subscribe((heroes) => {
      this.heroes = heroes
    })
  }

  goToHero(id: number): Promise<boolean> {
    return this.router.navigate([`details/${id}`])
  }
}

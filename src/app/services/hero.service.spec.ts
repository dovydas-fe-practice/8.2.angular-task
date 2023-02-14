import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../hero';
import { of } from 'rxjs';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let heroService: HeroService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  heroService = new HeroService(httpClientSpy);
});

describe('HeroService', () => {
  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('should return expected heroes', (done: DoneFn) => {
    const expectedHeroes: Hero[] = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    const subscription = heroService.getHeroes().subscribe({
      next: (heroes) => {
        expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);

    subscription.unsubscribe();
  });

  it('should return expected hero with provided ID', (done: DoneFn) => {
    const id = 2;
    const expectedHero: Hero = { id, name: 'A' };

    httpClientSpy.get.and.returnValue(of(expectedHero));

    const subscription = heroService.getHero(id).subscribe({
      next: (heroes) => {
        expect(heroes).withContext('expected heroes').toEqual(expectedHero);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledOnceWith(`api/heroes/${id}`);

    subscription.unsubscribe();
  });
});

import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { HeroService } from './hero.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { Hero } from '../hero'

describe('HeroService', () => {
  let service: HeroService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(HeroService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return heroes', function () {
    fakeAsync(() => {
      // let response: Hero[] = [
      //   { id: 1, name: 'John Doe' },
      //   { id: 2, name: 'Jane Doe' },
      // ]
      //
      // const actualResponse = service.getHeroes()
      //
      // const req = httpTestingController.expectOne('api/heroes')
      // expect(req.request.method).toEqual('GET')
      // // Respond with this data when called
      // req.flush(response)
      //
      // // Call tick whic actually processes te response
      // tick()
      //
      // console.log(actualResponse)
    })
  })
})

# HERO TASK (Angular)

---

### Dashboard (2pts):

_Here should be displayed all heroes. You should receive them with `HeroService`.
Of course you should configure it first :)
While clicking on each hero you will be navigated to details page_

- HTML
  - Please display here all heroes buttons with text of them name. Please keep in mind that you may not just make 9 blocks. Try to create something reusable and independent of count of heroes
- SCSS
  - Shouldn't be changed. Please use that you already have
- TS
  - `getHeroes()` method should ask for the heroes and set them to the `heroes` property

---

### Hero Details (3pts):

_Here should be displayed selected hero. You should receive them with `HeroService`.
Of course you should configure it first :)
While clicking on each hero you will be navigated to details page_

- HTML
  - `H2: 'hero name' (in upper case)`
  - Some row to display: `ID: 'hero id'`
  - Some row to display: `Hero name: 'hero name'`
  - Back button: to go back to the dashboard
  - _Note: Please check here is user already 'exists' in your property_
- SCSS
  - Shouldn't be changed. Please use that you already have
- TS
  - `getHero()` method should ask for the hero and set it to the `hero` property. Also, please remember that this component will be used to display every hero detailed view. So you could not create 9 independent component. The hint about it you could find in `Router` rules
  - `goBack()` method should redirect you to dashboard

---

### Hero Service (2pts):

This service should be middle layer between components and BE. So please be confident that you don't make any HTTP request from component
Also please don't care about how and from where data will be gotten. The only think that you need to do is to fill to methods with HTTP requests

- `getHeroes()` - this method should get all heroes from our Back-End. URL is `{heroesUrl}`
- `getHero()` - this method should get some hero on base of id from our Back-End. URL is `{heroesUrl}/{id}`
- _NOTE: I strongly recommend you to start your task from this service, because it will affect on component_

---

### Hero Directive (3pts):

You should prepare directive to change `background-color` on hover.
Acceptance criteria:

1. Use `HostBinding`
2. Use `HostListener`

If element is unhovered its color should be `#c4c3c3`, otherwise `#2b76f6`

---

### Router (3pts)

Here you will need to configure the router. If you forgot what is it, it will be great practice improving your 'Googling' skills

Routes:

1. Default path goes to `DashboardComponent`
2. `/dashboard` path goes also to `DashboardComponent`
3. `/detail` with some `{id}` should go to `HeroDetailComponent`

---

#### Some extra notes:

1. Please avoid changing of all other parts except listed before
2. Unit tests are not required, but if you want of course you could do them
3. If you have an error while first serving make sure that you already installed Angular and NodeJS
4. Import all necessary inputs. That's ok.
5. You could find all place you should fill with ctrl(cmd on mac)+shift+f and key phrase 'Your code here, please'

---

_BONUS POINT:_
If you could find weak place in program it will give you +2 points (pts).
What I mean about week place: Some user action could lead to error in console and will redirect you to empty page

##### You should reach at least 8 points to successfully end this section. If some parts will be not so good but make expecting logic you will get part of full point for the task. But of course `practice makes perfect` so you could make changes after my comments and receive full grade

Good luck 🍀

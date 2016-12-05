### Setup

* Clone/Download (green button)
* You will need nodejs from here: (https://nodejs.org/en/download/)
  * anything above 4 is probably fine
* then run these from the folder you cloned:
  * `npm i`
  * `npm i webpack` (It's not a dependancy)
  * `node server.js` and `webpack -w`

### Concerns

* How to filter items
* Firebase security?
* Latest runs table alongside top runs?

### TODO (most important at the top)

* ~~use instructor pictures as hazards to dodge~~
* ~~Style leaderboard page properly~~
* Fix alignment of counters/timer
* Add instructor quotes
* Rubot's Adventure title + styling
* Add ruby collection count to the endgame fail screen

### Deploying (my notes)

* `npm install -g surge` if you don't have it already (with an account/logged in too)
* Using surge, rename filepaths in `leaderboard.html`,  `index.html` and `src/game/preload.js`
* `npm run surge-deploy`
* This is farm from ideal but it's deal-able with for just now.

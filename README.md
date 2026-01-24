# aniswipe

rapid anime tracker. build your watched list in minutes. a tinder-like interface to quickly swipe through popular anime/manga and log what you've seen, plan to watch, or dropped.

**try it here:** https://eloypedrosa.github.io/aniswipe/

## features

- **zero dependencies:** made in plain js, html & css. no build steps.
- **gesture interface:**
  - swipe right: watched / read.
  - swipe up: plan to watch / read.
  - swipe down: dropped.
  - swipe left: skip.
- **dual mode:** switch between anime and manga.
- **privacy first:** data is stored in your browser (localstorage). no login required.
- **exportable:** download your list to csv anytime.
- **powered by anilist api:** real-time data from anilist.

## controls

| key | action |
| :--- | :--- |
| `arrow up` | plan |
| `arrow down` | drop |
| `arrow right` | seen |
| `arrow left` | skip |
| `backspace` | undo |

## tech stack

- html5
- css3 (variables & flexbox)
- vanilla javascript
- anilist graphql api

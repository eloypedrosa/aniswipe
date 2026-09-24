# aniswipe

rapid anime tracker. build your watched list in minutes. a tinder-like interface to quickly swipe through popular anime/manga and log what you've seen, plan to watch, or dropped — then import it into myanimelist or anilist.

**try it here:** https://eloypedrosa.github.io/aniswipe/

## features

- **zero dependencies:** made in plain js, html & css. no build steps.
- **gesture interface:**
  - swipe right: watched / read.
  - swipe up: plan to watch / read.
  - swipe down: dropped.
  - swipe left: skip.
  - quick flicks count too; tap a card for the synopsis, tap the title to copy it.
- **card stack:** the next card peeks from behind, covers are preloaded, and undo flies the card back in.
- **my list:** browse everything you've swiped by status, search it, change a status or remove an entry.
- **export to myanimelist / anilist:** download a mal-format xml ready for `myanimelist.net/import.php` or `anilist.co/settings/import`. also csv and a full json backup you can restore on another device.
- **filters:** sort (popular / top rated / trending), format, airing status, decade, genres and, for manga, origin (manga / manhwa / manhua). filters are remembered per mode.
- **resumes where you left off:** each filter combination remembers its page, so you don't re-swipe the same titles.
- **dual mode:** switch between anime and manga.
- **bilingual:** spanish / english, detected from your browser.
- **installable (pwa):** add it to your home screen; your list opens offline.
- **privacy first:** data is stored in your browser (localstorage). no login required.
- **powered by anilist api:** real-time data from anilist, with automatic back-off when the api is rate limited.

## controls

| key               | action       |
| :---------------- | :----------- |
| `arrow up`        | plan         |
| `arrow down`      | drop         |
| `arrow right`     | seen         |
| `arrow left`      | skip         |
| `backspace` / `z` | undo         |
| `i`               | card details |
| `esc`             | close panel  |

## tech stack

- html5 (`<dialog>` sheets)
- css3 (variables & flexbox)
- vanilla javascript (pointer events)
- anilist graphql api
- service worker + web app manifest

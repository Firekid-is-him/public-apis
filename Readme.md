# Free Public APIs - No Authentication Required

A comprehensive collection of free public APIs that require no authentication. Perfect for testing, learning, and building projects without API key hassles.

## Table of Contents

- [Animals](#animals)
- [Anime](#anime)
- [Art & Design](#art--design)
- [Books](#books)
- [Business](#business)
- [Calendar](#calendar)
- [Cloud Storage](#cloud-storage)
- [Cryptocurrency](#cryptocurrency)
- [Currency Exchange](#currency-exchange)
- [Development](#development)
- [Dictionaries](#dictionaries)
- [Email](#email)
- [Entertainment](#entertainment)
- [Environment](#environment)
- [Finance](#finance)
- [Food & Drink](#food--drink)
- [Games & Comics](#games--comics)
- [Geocoding](#geocoding)
- [Government](#government)
- [Health](#health)
- [Jobs](#jobs)
- [Machine Learning](#machine-learning)
- [Music](#music)
- [News](#news)
- [Open Data](#open-data)
- [Open Source Projects](#open-source-projects)
- [Personality](#personality)
- [Photography](#photography)
- [Science & Math](#science--math)
- [Security](#security)
- [Social](#social)
- [Sports & Fitness](#sports--fitness)
- [Test Data](#test-data)
- [Text Analysis](#text-analysis)
- [Transportation](#transportation)
- [Weather](#weather)

## Quick Start

```bash
npm install
node examples/animals.js
```

---

## Animals

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Random Dog](https://random.dog/woof.json) | Random dog images | `GET https://random.dog/woof.json` |
| [Random Fox](https://randomfox.ca/floof/) | Random fox images | `GET https://randomfox.ca/floof/` |
| [Random Duck](https://random-d.uk/api) | Random duck images | `GET https://random-d.uk/api/random` |
| [Dog Facts](https://kinduff.github.io/dog-api/) | Random dog facts | `GET https://dog-api.kinduff.com/api/facts` |
| [Cat Facts](https://alexwohlbruck.github.io/cat-facts/) | Random cat facts | `GET https://catfact.ninja/fact` |
| [HTTP Cat](https://http.cat/) | Cat images for HTTP status codes | `GET https://http.cat/404` |
| [HTTP Dog](https://http.dog/) | Dog images for HTTP status codes | `GET https://http.dog/404.jpg` |
| [Shibe.Online](http://shibe.online/) | Random Shiba Inu, cats or birds | `GET http://shibe.online/api/shibes?count=1` |
| [Zoo Animals](https://zoo-animal-api.herokuapp.com/) | Zoo animal facts and images | `GET https://zoo-animal-api.herokuapp.com/animals/rand` |

---

## Anime

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Studio Ghibli](https://ghibliapi.herokuapp.com) | Studio Ghibli films data | `GET https://ghibliapi.herokuapp.com/films` |
| [Jikan](https://jikan.moe) | Unofficial MyAnimeList API | `GET https://api.jikan.moe/v4/anime/1` |
| [AnimeChan](https://github.com/RocktimSaikia/anime-chan) | Anime quotes | `GET https://animechan.xyz/api/random` |
| [Waifu.pics](https://waifu.pics/docs) | Anime image sharing | `GET https://api.waifu.pics/sfw/waifu` |
| [NekosBest](https://docs.nekos.best) | Neko images and GIFs | `GET https://nekos.best/api/v2/neko` |

---

## Art & Design

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Art Institute of Chicago](https://api.artic.edu/docs/) | Museum artworks | `GET https://api.artic.edu/api/v1/artworks` |
| [Metropolitan Museum](https://metmuseum.github.io/) | Met Museum collection | `GET https://collectionapi.metmuseum.org/public/collection/v1/objects` |
| [Icon Horse](https://icon.horse) | Website favicons | `GET https://icon.horse/icon/github.com` |
| [Lordicon](https://lordicon.com/) | Animated icons | `GET https://cdn.lordicon.com/icons.json` |
| [EmojiHub](https://github.com/cheatsnake/emojihub) | Emoji data by category | `GET https://emojihub.yurace.pro/api/all` |

---

## Books

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Open Library](https://openlibrary.org/developers/api) | Books and cover data | `GET https://openlibrary.org/api/books?bibkeys=ISBN:0451526538` |
| [Gutendex](https://gutendex.com/) | Project Gutenberg books | `GET https://gutendex.com/books` |
| [Bible API](https://bible-api.com/) | Bible verses | `GET https://bible-api.com/john+3:16` |
| [Quran API](https://alquran.cloud/api) | Quran verses | `GET https://api.alquran.cloud/v1/surah/1` |
| [PoetryDB](https://github.com/thundercomb/poetrydb#readme) | Poetry collection | `GET https://poetrydb.org/author/Shakespeare` |

---

## Business

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Tenders Hungary](https://tenders.guru/hu/api) | Hungarian procurement data | `GET https://tenders.guru/api/hu/tenders` |
| [Tenders Poland](https://tenders.guru/pl/api) | Polish procurement data | `GET https://tenders.guru/api/pl/tenders` |
| [Tenders Spain](https://tenders.guru/es/api) | Spanish procurement data | `GET https://tenders.guru/api/es/tenders` |

---

## Calendar

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Nager.Date](https://date.nager.at) | Public holidays 90+ countries | `GET https://date.nager.at/api/v3/publicholidays/2025/US` |
| [Namedays](https://nameday.abalin.net) | Namedays for countries | `GET https://nameday.abalin.net/api/V1/today` |
| [UK Bank Holidays](https://www.gov.uk/bank-holidays.json) | UK bank holidays | `GET https://www.gov.uk/bank-holidays.json` |

---

## Cloud Storage

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [File.io](https://www.file.io) | Temporary file sharing | `POST https://file.io` |
| [Pantry](https://getpantry.cloud/) | Free JSON storage | `GET https://getpantry.cloud/apiv1/pantry/{pantryID}` |

---

## Cryptocurrency

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [CoinGecko](http://www.coingecko.com/api) | Crypto prices and data | `GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd` |
| [Coinlore](https://www.coinlore.com/cryptocurrency-data-api) | Crypto prices | `GET https://api.coinlore.net/api/tickers/` |
| [CoinCap](https://docs.coincap.io/) | Real-time crypto data | `GET https://api.coincap.io/v2/assets` |
| [Blockchain](https://www.blockchain.com/api) | Bitcoin data | `GET https://blockchain.info/ticker` |
| [Mempool](https://mempool.space/api) | Bitcoin mempool data | `GET https://mempool.space/api/v1/fees/recommended` |

---

## Currency Exchange

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Frankfurter](https://www.frankfurter.app/docs) | Exchange rates | `GET https://api.frankfurter.app/latest` |
| [Exchangerate.host](https://exchangerate.host) | Currency conversion | `GET https://api.exchangerate.host/latest` |
| [National Bank of Poland](http://api.nbp.pl/en.html) | Polish exchange rates | `GET http://api.nbp.pl/api/exchangerates/tables/a/` |

---

## Development

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [GitHub](https://api.github.com) | GitHub repositories | `GET https://api.github.com/users/{username}` |
| [Httpbin](https://httpbin.org/) | HTTP request testing | `GET https://httpbin.org/get` |
| [JSONPlaceholder](http://jsonplaceholder.typicode.com/) | Fake REST API | `GET https://jsonplaceholder.typicode.com/posts` |
| [ReqRes](https://reqres.in/) | Test API responses | `GET https://reqres.in/api/users` |
| [Bored API](https://www.boredapi.com/) | Random activities | `GET https://www.boredapi.com/api/activity` |
| [QR Code](http://goqr.me/api/) | Generate QR codes | `GET https://api.qrserver.com/v1/create-qr-code/?data=Hello` |
| [IP API](https://ipapi.co/) | IP geolocation | `GET https://ipapi.co/json/` |
| [Genderize](https://genderize.io) | Predict gender from name | `GET https://api.genderize.io?name=peter` |
| [Agify](https://agify.io) | Predict age from name | `GET https://api.agify.io?name=michael` |
| [Nationalize](https://nationalize.io) | Predict nationality from name | `GET https://api.nationalize.io?name=michael` |

---

## Dictionaries

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Free Dictionary](https://dictionaryapi.dev/) | Word definitions | `GET https://api.dictionaryapi.dev/api/v2/entries/en/hello` |
| [Wiktionary](https://en.wiktionary.org/w/api.php) | Dictionary data | `GET https://en.wiktionary.org/w/api.php?action=query` |

---

## Email

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Kickbox](https://open.kickbox.com/) | Email verification | `GET https://open.kickbox.com/v1/disposable/{email}` |
| [mail.gw](https://docs.mail.gw) | Temporary email | `POST https://api.mail.gw/accounts` |
| [EVA](https://eva.pingutil.com/) | Email validation | `GET https://eva.pingutil.com/email?email=test@example.com` |

---

## Entertainment

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Chuck Norris Jokes](https://api.chucknorris.io) | Random Chuck Norris jokes | `GET https://api.chucknorris.io/jokes/random` |
| [Random Useless Facts](https://uselessfacts.jsph.pl/) | Random facts | `GET https://uselessfacts.jsph.pl/api/v2/facts/random` |
| [Corporate Buzzwords](https://github.com/sameerkumar18/corporate-bs-generator-api) | Corporate buzzwords | `GET https://corporatebs-generator.sameerkumar.website/` |
| [Fun Facts](https://api.aakhilv.me) | Random fun facts | `GET https://api.aakhilv.me` |

---

## Environment

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [UK Carbon Intensity](https://carbon-intensity.github.io/api-definitions/) | UK carbon data | `GET https://api.carbonintensity.org.uk/intensity` |
| [OpenAQ](https://docs.openaq.org/) | Air quality data | `GET https://api.openaq.org/v2/latest` |

---

## Finance

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Yahoo Finance](https://www.yahoofinanceapi.com/) | Stock data | `GET https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL` |
| [Razorpay IFSC](https://razorpay.com/docs/) | Indian bank codes | `GET https://ifsc.razorpay.com/{ifsc}` |
| [Portfolio Optimizer](https://portfoliooptimizer.io/) | Portfolio analysis | `POST https://portfoliooptimizer.io/api/v1/portfolio/optimization` |

---

## Food & Drink

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [TheMealDB](https://www.themealdb.com/api.php) | Meal recipes | `GET https://www.themealdb.com/api/json/v1/1/random.php` |
| [TheCocktailDB](https://www.thecocktaildb.com/api.php) | Cocktail recipes | `GET https://www.thecocktaildb.com/api/json/v1/1/random.php` |
| [Coffee](https://coffee.alexflipnote.dev/) | Coffee images | `GET https://coffee.alexflipnote.dev/random.json` |
| [Fruityvice](https://www.fruityvice.com) | Fruit nutrition data | `GET https://www.fruityvice.com/api/fruit/all` |
| [Open Food Facts](https://world.openfoodfacts.org/data) | Food database | `GET https://world.openfoodfacts.org/api/v0/product/{barcode}.json` |
| [PunkAPI](https://punkapi.com/) | Beer recipes | `GET https://api.punkapi.com/v2/beers` |

---

## Games & Comics

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Pokemon](https://pokeapi.co) | Pokemon data | `GET https://pokeapi.co/api/v2/pokemon/ditto` |
| [Rick and Morty](https://rickandmortyapi.com) | Rick and Morty data | `GET https://rickandmortyapi.com/api/character` |
| [Deck of Cards](http://deckofcardsapi.com/) | Deck of cards | `GET https://deckofcardsapi.com/api/deck/new/shuffle/` |
| [Magic: The Gathering](http://magicthegathering.io/) | MTG card data | `GET https://api.magicthegathering.io/v1/cards` |
| [Yu-Gi-Oh](https://db.ygoprodeck.com/api-guide/) | Yu-Gi-Oh card data | `GET https://db.ygoprodeck.com/api/v7/cardinfo.php` |
| [XKCD](https://xkcd.com/json.html) | XKCD comics | `GET https://xkcd.com/info.0.json` |
| [Jikan](https://jikan.moe) | Anime/Manga data | `GET https://api.jikan.moe/v4/random/anime` |

---

## Geocoding

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [REST Countries](https://restcountries.com) | Country information | `GET https://restcountries.com/v3.1/all` |
| [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/) | OpenStreetMap geocoding | `GET https://nominatim.openstreetmap.org/search?q=London&format=json` |
| [IP-API](https://ip-api.com/docs) | IP geolocation | `GET http://ip-api.com/json/` |
| [Zippopotam](http://www.zippopotam.us) | Zip code data | `GET http://api.zippopotam.us/us/90210` |
| [Country.is](http://country.is/) | Country from IP | `GET https://api.country.is/` |

---

## Government

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [USA.gov](https://www.data.gov/) | US government data | Various endpoints |
| [FBI Wanted](https://www.fbi.gov/wanted/api) | FBI wanted list | `GET https://api.fbi.gov/@wanted` |
| [Census.gov](https://www.census.gov/data/developers/data-sets.html) | US census data | Various endpoints |

---

## Health

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Covid-19](https://covid19api.com/) | Covid data | `GET https://api.covid19api.com/summary` |
| [Disease.sh](https://disease.sh/) | Covid and disease data | `GET https://disease.sh/v3/covid-19/all` |
| [Makeup API](http://makeup-api.herokuapp.com/) | Makeup products | `GET http://makeup-api.herokuapp.com/api/v1/products.json` |

---

## Jobs

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Arbeitnow](https://documenter.getpostman.com/view/18545278/UVJbJdKh) | EU job listings | `GET https://www.arbeitnow.com/api/job-board-api` |
| [GraphQL Jobs](https://graphql.jobs/docs/api/) | GraphQL job listings | Various endpoints |

---

## Machine Learning

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [OpenVisionAPI](https://openvisionapi.com) | Computer vision | `POST https://api.openvisionapi.com/api/v1/detection` |

---

## Music

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Lyrics.ovh](https://lyricsovh.docs.apiary.io) | Song lyrics | `GET https://api.lyrics.ovh/v1/{artist}/{title}` |
| [MusicBrainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2) | Music metadata | `GET https://musicbrainz.org/ws/2/artist/{mbid}` |
| [Radio Browser](https://api.radio-browser.info/) | Radio stations | `GET https://de1.api.radio-browser.info/json/stations` |
| [iTunes Search](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) | iTunes catalog | `GET https://itunes.apple.com/search?term=jack+johnson` |

---

## News

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Spaceflight News](https://spaceflightnewsapi.net) | Space news | `GET https://api.spaceflightnewsapi.net/v4/articles` |
| [Inshorts News](https://github.com/cyberboysumanjay/Inshorts-News-API) | Indian news | `GET https://inshorts.deta.dev/news?category=all` |

---

## Open Data

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page) | Wikipedia data | `GET https://en.wikipedia.org/w/api.php` |
| [Universities](https://github.com/Hipo/university-domains-list) | University data | `GET http://universities.hipolabs.com/search?country=United+States` |
| [Nobel Prize](https://www.nobelprize.org/about/developer-zone-2/) | Nobel prize data | `GET https://api.nobelprize.org/v1/prize.json` |

---

## Open Source Projects

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [GitHub](https://api.github.com) | GitHub data | `GET https://api.github.com/repos/{owner}/{repo}` |
| [Shields.io](https://shields.io/) | README badges | `GET https://img.shields.io/badge/any-text-blue` |

---

## Personality

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Advice Slip](http://api.adviceslip.com/) | Random advice | `GET https://api.adviceslip.com/advice` |
| [Quotable](https://github.com/lukePeavey/quotable) | Random quotes | `GET https://api.quotable.io/random` |
| [Kanye Rest](https://kanye.rest) | Kanye quotes | `GET https://api.kanye.rest` |
| [FOAAS](http://www.foaas.com/) | Profanity service | `GET https://www.foaas.com/off/{name}/{from}` |
| [icanhazdadjoke](https://icanhazdadjoke.com/api) | Dad jokes | `GET https://icanhazdadjoke.com/` |

---

## Photography

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Lorem Picsum](https://picsum.photos/) | Random images | `GET https://picsum.photos/200/300` |
| [PlaceKeanu](https://placekeanu.com/) | Keanu Reeves images | `GET https://placekeanu.com/200/300` |
| [Unsplash](https://source.unsplash.com/) | Free images | `GET https://source.unsplash.com/random` |

---

## Science & Math

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [NASA](https://api.nasa.gov) | Space data | `GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` |
| [SpaceX](https://github.com/r-spacex/SpaceX-API) | SpaceX data | `GET https://api.spacexdata.com/v4/launches/latest` |
| [Numbers API](http://numbersapi.com) | Number facts | `GET http://numbersapi.com/42` |
| [Newton](https://newton.vercel.app) | Math calculator | `GET https://newton.vercel.app/api/v2/simplify/2^2+2(2)` |
| [Open Notify](http://open-notify.org/Open-Notify-API/) | ISS location | `GET http://api.open-notify.org/iss-now.json` |

---

## Security

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Have I Been Pwned](https://haveibeenpwned.com/API/v3) | Password breach check | `GET https://api.pwnedpasswords.com/range/{hash}` |
| [FilterLists](https://filterlists.com) | Adblocker lists | `GET https://filterlists.com/api/directory` |

---

## Social

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [4chan](https://github.com/4chan/4chan-API) | 4chan boards | `GET https://a.4cdn.org/{board}/catalog.json` |
| [HackerNews](https://github.com/HackerNews/API) | HackerNews stories | `GET https://hacker-news.firebaseio.com/v0/topstories.json` |

---

## Sports & Fitness

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [NBA Stats](https://any-api.com/nba_com/nba_com/docs/API_Description) | NBA statistics | Various endpoints |
| [Football Data](https://www.football-data.org/) | Football results | `GET https://api.football-data.org/v4/competitions` |
| [Ergast F1](http://ergast.com/mrd/) | Formula 1 data | `GET http://ergast.com/api/f1/current.json` |
| [OpenLigaDB](https://www.openligadb.de) | Sports league results | `GET https://api.openligadb.de/getavailableleagues` |

---

## Test Data

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [JSONPlaceholder](http://jsonplaceholder.typicode.com/) | Fake REST data | `GET https://jsonplaceholder.typicode.com/todos` |
| [Random User](https://randomuser.me) | Random user data | `GET https://randomuser.me/api/` |
| [FakerAPI](https://fakerapi.it/en) | Fake data generator | `GET https://fakerapi.it/api/v1/persons` |
| [UUID Generator](https://www.uuidtools.com/docs) | Generate UUIDs | `GET https://www.uuidtools.com/api/generate/v4` |
| [Yes No](https://yesno.wtf/api) | Random yes/no | `GET https://yesno.wtf/api` |

---

## Text Analysis

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [LibreTranslate](https://libretranslate.com/docs) | Translation | `POST https://libretranslate.com/translate` |

---

## Transportation

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [OpenSky Network](https://opensky-network.org/apidoc/index.html) | Flight tracking | `GET https://opensky-network.org/api/states/all` |
| [ADS-B Exchange](https://www.adsbexchange.com/data/) | Aircraft data | Various endpoints |

---

## Weather

| API | Description | Endpoint Example |
|-----|-------------|------------------|
| [Open-Meteo](https://open-meteo.com/) | Weather forecasts | `GET https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true` |
| [7Timer](http://www.7timer.info/doc.php) | Weather API | `GET http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json` |
| [Weather API](https://www.weatherapi.com/) | Weather data | `GET http://api.weatherapi.com/v1/current.json?key=demo&q=London` |

---

## Contributing

Feel free to contribute by adding new APIs or improving examples.

## License

MIT

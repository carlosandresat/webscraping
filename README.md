# Web Crawler with filtering

A web crawler using scrapping techniques to extract information from the first 30 entries of [Hacker News](https://news.ycombinator.com). For each entry, the script will get the:
- Title
- Number of the order
- Number of comments
- Score

Adittionaly, two filters are included:
- **filter1.** Filter all entries with a title longer than five words, and ordered by the number of comments first.
- **filter2.** Filter all entries with a title shorter than five words, and ordered by score.

## Technologies
- JavaScript
- Node.js
- Axios: Promise based HTTP client
- Cheerio: API for traversing/manipulating through DOM
- Jest: For filter functions testing


## Execution

First is needed to install axios and cheerios.

```bash
  npm install axios cheerios
```

For the execution of the script

```bash
  node script.js
```
## Automated Testing with Jest

Start installing Jest

```bash
  npm install jest
```

This automated testing consist in 4 tests (2 for each filter function).

- Expect the title to be greater than 5 words [filter1]
- Expect to be orderer by number of comments [filter1]
- Expect the title to be less than 5 words [filter2]
- Expect to be orderer by score [filter2]

Automated test can be run with

```bash
  jest script.test.js
```
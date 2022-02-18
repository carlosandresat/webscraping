const {filter1, filter2, countWords} = require("./script.js");

const mockData = [  
    {
    title: 'A brief history of gasoline: Searching for the magic bullet',
    order: 16,
    comments: 4,
    score: 24
  },
  {
    title: 'SuperTokens (YC S20) Is Hiring a frontent engineer (remote)',
    order: 17,
    comments: 0,
    score: 0
  },
  {
    title: 'The Patriot Missile Failure (2000)',
    order: 18,
    comments: 22,
    score: 46
  },
  {
    title: 'Launch HN: 1Flow (YC W22) – In-product user feedback for web/mobile apps',
    order: 19,
    comments: 51,
    score: 70
  },
  {
    title: 'What I Learned During My Three Days Offline',
    order: 20,
    comments: 0,
    score: 4
  },
  {
    title: '6 months of working at a hypergrowth startup',
    order: 21,
    comments: 22,
    score: 77
  },
  {
    title: 'The Wizards and the Sheep (2017)',
    order: 22,
    comments: 1,
    score: 12
  },
  {
    title: 'Transgenic glowing fish invades Brazilian streams',
    order: 23,
    comments: 39,
    score: 49
  },
  {
    title: 'S2n-QUIC (Rust implementation of QUIC)',
    order: 24,
    comments: 23,
    score: 92
  },
  {
    title: 'The U.S. is now energy independent',
    order: 25,
    comments: 77,
    score: 95
  },
  {
    title: 'How to commit murder inside a locked room',
    order: 26,
    comments: 68,
    score: 103
  },
  {
    title: 'SpaceX’s monstrous, dirt-cheap Starship may transform space travel',
    order: 27,
    comments: 261,
    score: 174
  },
  {
    title: 'WebCompat – Bug Reporting for the Web',
    order: 28,
    comments: 3,
    score: 19
  },
  {
    title: 'The Internals of PostgreSQL',
    order: 29,
    comments: 17,
    score: 252
  },
  {
    title: 'LanguageTool – FOSS Style and Grammar Checker for 25 Languages',
    order: 30,
    comments: 10,
    score: 53
  },
  {
    title: 'LanguageTool – FOSS ',
    order: 10,
    comments: 5,
    score: 5
  }
];

describe("This tests filter1.", () => {
    it("Expect the title to be greater than 5 words", () => {
        const filterData = filter1(mockData);
        filterData.map((entry) => expect(countWords(entry.title)).toBeGreaterThan(5));
    });
});
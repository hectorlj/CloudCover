import { combineReducers } from 'redux';

const INITIAL_STATE = {
  filters: {'plex' : true, 'hulu' : true, 'netflix' : true, 'amazon' : true},
  continueWatching : ["The Incredibles", "The Avengers", "Jurassic World"],
  yourList: ["Cars", "Jurassic World", "Coco", "The Hunger Games", "Aladdin", "Batman Begins", "The Lost World: Jurassic Park", "Man of Steel"],
  all: {
  "0": {
    "Title": "10 Cloverfield Lane",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "11 Mar 2016",
    "Runtime": "103 min",
    "Genre": "Drama, Horror, Mystery",
    "Director": "Dan Trachtenberg",
    "Writer": "Josh Campbell (screenplay by), Matthew Stuecken (screenplay by), Damien Chazelle (screenplay by), Josh Campbell (story by), Matthew Stuecken (story by)",
    "Actors": "John Goodman, Mary Elizabeth Winstead, John Gallagher Jr., Douglas M. Griffin",
    "Plot": "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.",
    "Language": "English",
    "Country": "USA",
    "Awards": "13 wins & 45 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "7.2",
    "imdbVotes": "245,993",
    "imdbID": "tt1179933",
    "Type": "movie",
    "DVD": "14 Jun 2016",
    "BoxOffice": "$59,481,553",
    "Production": "Bad Robot Productions",
    "Website": "http://www.10cloverfieldlane.com/",
    "Response": "True"
  },
  "1": {
    "Title": "27 Dresses",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jan 2008",
    "Runtime": "111 min",
    "Genre": "Comedy, Romance",
    "Director": "Anne Fletcher",
    "Writer": "Aline Brosh McKenna",
    "Actors": "Brian Kerwin, Charli Barcena, Peyton List, Jane Pfitsch",
    "Plot": "After serving as a bridesmaid 27 times, a young woman wrestles with the idea of standing by her sister's side as her sibling marries the man she's secretly in love with.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzI5OTM0OTg2MF5BMl5BanBnXkFtZTcwNjAyMTU1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "41%"
      },
      {
        "Source": "Metacritic",
        "Value": "47/100"
      }
    ],
    "Metascore": "47",
    "imdbRating": "6.1",
    "imdbVotes": "139,979",
    "imdbID": "tt0988595",
    "Type": "movie",
    "DVD": "29 Apr 2008",
    "BoxOffice": "$76,800,000",
    "Production": "20th Century Fox",
    "Website": "http://www.27dressesthemovie.com/",
    "Response": "True"
  },
  "2": {
    "Title": "50 First Dates",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "13 Feb 2004",
    "Runtime": "99 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Peter Segal",
    "Writer": "George Wing",
    "Actors": "Adam Sandler, Drew Barrymore, Rob Schneider, Sean Astin",
    "Plot": "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.",
    "Language": "English, Hawaiian, Mandarin, None",
    "Country": "USA",
    "Awards": "6 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "44%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "6.8",
    "imdbVotes": "294,368",
    "imdbID": "tt0343660",
    "Type": "movie",
    "DVD": "15 Jun 2004",
    "BoxOffice": "$120,776,832",
    "Production": "Sony Pictures",
    "Website": "http://www.sonypictures.com/movies/50firstdates/index.html",
    "Response": "True"
  },
  "3": {
    "Title": "Aladdin",
    "Year": "1992",
    "Rated": "G",
    "Released": "25 Nov 1992",
    "Runtime": "90 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Ron Clements, John Musker",
    "Writer": "Ron Clements (screenplay by), John Musker (screenplay by), Ted Elliott (screenplay by), Terry Rossio (screenplay by), Burny Mattinson (story), Roger Allers (story), Daan Jippes (story), Kevin Harkey (story), Sue C. Nichols (story), Francis Glebas (story), Darrell Rooney (story), Larry Leker (story), James Fujii (story), Kirk Hanson (story), Kevin Lima (story), Rebecca Rees (story), David S. Smith (story), Chris Sanders (story), Brian Pimental (story), Patrick A. Ventura (story)",
    "Actors": "Scott Weinger, Robin Williams, Linda Larkin, Jonathan Freeman",
    "Plot": "When a street urchin vies for the love of a beautiful princess, he uses a genie's magic power to make himself off as a prince in order to marry her.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 30 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "86/100"
      }
    ],
    "Metascore": "86",
    "imdbRating": "8.0",
    "imdbVotes": "304,619",
    "imdbID": "tt0103639",
    "Type": "movie",
    "DVD": "05 Oct 2004",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Distribution Compa",
    "Website": "http://disney.go.com/vault/archives/characters/aladdin/aladdin.html",
    "Response": "True"
  },
  "4": {
    "Title": "The Amazing Spider-Man",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "03 Jul 2012",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Marc Webb",
    "Writer": "James Vanderbilt (screenplay), Alvin Sargent (screenplay), Steve Kloves (screenplay), James Vanderbilt (story), Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)",
    "Actors": "Andrew Garfield, Emma Stone, Rhys Ifans, Denis Leary",
    "Plot": "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to solve the mystery of his parent's mysterious death.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 31 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.0",
    "imdbVotes": "508,124",
    "imdbID": "tt0948470",
    "Type": "movie",
    "DVD": "09 Nov 2012",
    "BoxOffice": "$262,030,663",
    "Production": "Sony Pictures",
    "Website": "http://www.theamazingspiderman.com/site/",
    "Response": "True"
  },
  "5": {
    "Title": "Anastasia",
    "Year": "1997",
    "Rated": "G",
    "Released": "21 Nov 1997",
    "Runtime": "94 min",
    "Genre": "Animation, Adventure, Drama",
    "Director": "Don Bluth, Gary Goldman",
    "Writer": "Susan Gauthier (screenplay), Bruce Graham (screenplay), Bob Tzudiker (screenplay), Noni White (screenplay), Eric Tuchman (animation adaptation)",
    "Actors": "Meg Ryan, John Cusack, Kelsey Grammer, Christopher Lloyd",
    "Plot": "The last surviving child of the Russian Royal Family joins two con men to reunite with her grandmother, the Dowager Empress, while the undead Rasputin seeks her death.",
    "Language": "English, Russian, French",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 10 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGJiNWFlYTMtZTBiZi00ZTVmLWJmZmMtNzEzYzZjNzYzZmRmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "7.1",
    "imdbVotes": "99,631",
    "imdbID": "tt0118617",
    "Type": "movie",
    "DVD": "16 Nov 1999",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "N/A",
    "Response": "True"
  },
  "6": {
    "Title": "Ant-Man",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "17 Jul 2015",
    "Runtime": "117 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Peyton Reed",
    "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
    "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
    "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 3 wins & 32 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "7.3",
    "imdbVotes": "449,307",
    "imdbID": "tt0478970",
    "Type": "movie",
    "DVD": "08 Dec 2015",
    "BoxOffice": "$138,002,223",
    "Production": "Disney/Marvel",
    "Website": "http://www.facebook.com/antman",
    "Response": "True"
  },
  "7": {
    "Title": "The Aristocats",
    "Year": "1970",
    "Rated": "G",
    "Released": "24 Dec 1970",
    "Runtime": "78 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Wolfgang Reitherman",
    "Writer": "Larry Clemmons (story), Vance Gerry (story), Ken Anderson (story), Frank Thomas (story), Eric Cleworth (story), Julius Svendsen (story), Ralph Wright (story), Tom McGowan (based on a story by), Tom Rowe (based on a story by)",
    "Actors": "Phil Harris, Eva Gabor, Sterling Holloway, Scatman Crothers",
    "Plot": "With the help of a smooth talking tomcat, a family of Parisian felines set to inherit a fortune from their owner try to make it back home after a jealous butler kidnaps them and leaves them in the country.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 wins & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MzM0MjcxMF5BMl5BanBnXkFtZTgwODQ0MzcxMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "68%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "7.1",
    "imdbVotes": "77,163",
    "imdbID": "tt0065421",
    "Type": "movie",
    "DVD": "04 Apr 2000",
    "BoxOffice": "N/A",
    "Production": "Buena Vista",
    "Website": "N/A",
    "Response": "True"
  },
  "8": {
    "Title": "Atlantis: The Lost Empire",
    "Year": "2001",
    "Rated": "PG",
    "Released": "15 Jun 2001",
    "Runtime": "95 min",
    "Genre": "Animation, Action, Adventure, Family, Fantasy, Sci-Fi",
    "Director": "Gary Trousdale, Kirk Wise",
    "Writer": "Tab Murphy (screenplay by), Kirk Wise (story by), Gary Trousdale (story by), Joss Whedon (story by), Bryce Zabel (story by), Jackie Zabel (story by), Tab Murphy (story by), David Reynolds (additional screenplay material)",
    "Actors": "Corey Burton, Claudia Christian, Michael J. Fox, James Garner",
    "Plot": "A young adventurer named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis.",
    "Language": "English, French, Spanish",
    "Country": "USA",
    "Awards": "2 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "49%"
      },
      {
        "Source": "Metacritic",
        "Value": "52/100"
      }
    ],
    "Metascore": "52",
    "imdbRating": "6.8",
    "imdbVotes": "88,071",
    "imdbID": "tt0230011",
    "Type": "movie",
    "DVD": "29 Jan 2002",
    "BoxOffice": "$83,561,615",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.go.com/disneypictures/atlantis/index.html",
    "Response": "True"
  },
  "9": {
    "Title": "August Rush",
    "Year": "2007",
    "Rated": "PG",
    "Released": "21 Nov 2007",
    "Runtime": "114 min",
    "Genre": "Drama, Music",
    "Director": "Kirsten Sheridan",
    "Writer": "Nick Castle (screenplay), James V. Hart (screenplay), Paul Castro (story), Nick Castle (story)",
    "Actors": "Freddie Highmore, Keri Russell, Jonathan Rhys Meyers, Terrence Howard",
    "Plot": "A drama with fairy tale elements, where an orphaned musical prodigy uses his gift as a clue to finding his birth parents.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 4 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDIwNjE3NjU2NV5BMl5BanBnXkFtZTcwNTQ2NjQzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "37%"
      },
      {
        "Source": "Metacritic",
        "Value": "38/100"
      }
    ],
    "Metascore": "38",
    "imdbRating": "7.5",
    "imdbVotes": "96,415",
    "imdbID": "tt0426931",
    "Type": "movie",
    "DVD": "11 Mar 2008",
    "BoxOffice": "$31,529,568",
    "Production": "Warner Bros. Pictures",
    "Website": "http://augustrushmovie.warnerbros.com/",
    "Response": "True"
  },
  "10": {
    "Title": "The Avengers",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "Language": "English, Russian, Hindi",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "69/100"
      }
    ],
    "Metascore": "69",
    "imdbRating": "8.1",
    "imdbVotes": "1,127,047",
    "imdbID": "tt0848228",
    "Type": "movie",
    "DVD": "25 Sep 2012",
    "BoxOffice": "$623,279,547",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/avengers_movie",
    "Response": "True"
  },
  "11": {
    "Title": "Avengers: Age of Ultron",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "01 May 2015",
    "Runtime": "141 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (character created by: Captain America), Jack Kirby (character created by: Captain America), Jim Starlin (character created by: Thanos)",
    "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    "Language": "English, Korean",
    "Country": "USA",
    "Awards": "7 wins & 45 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "75%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.4",
    "imdbVotes": "604,048",
    "imdbID": "tt2395427",
    "Type": "movie",
    "DVD": "02 Oct 2015",
    "BoxOffice": "$429,113,729",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/avengers",
    "Response": "True"
  },
  "12": {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "27 Apr 2018",
    "Runtime": "149 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
    "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "8.6",
    "imdbVotes": "482,760",
    "imdbID": "tt4154756",
    "Type": "movie",
    "DVD": "14 Aug 2018",
    "BoxOffice": "$664,987,816",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/movies/movie/223/avengers_infinity_war",
    "Response": "True"
  },
  "13": {
    "Title": "Back to the Future",
    "Year": "1985",
    "Rated": "PG",
    "Released": "03 Jul 1985",
    "Runtime": "116 min",
    "Genre": "Adventure, Comedy, Sci-Fi",
    "Director": "Robert Zemeckis",
    "Writer": "Robert Zemeckis, Bob Gale",
    "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
    "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 19 wins & 25 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": "87",
    "imdbRating": "8.5",
    "imdbVotes": "886,311",
    "imdbID": "tt0088763",
    "Type": "movie",
    "DVD": "17 Dec 2002",
    "BoxOffice": "$2,925,880",
    "Production": "Universal Pictures",
    "Website": "http://www.bttfmovie.com/",
    "Response": "True"
  },
  "14": {
    "Title": "Back to the Future Part II",
    "Year": "1989",
    "Rated": "PG",
    "Released": "22 Nov 1989",
    "Runtime": "108 min",
    "Genre": "Adventure, Comedy, Sci-Fi",
    "Director": "Robert Zemeckis",
    "Writer": "Robert Zemeckis (characters), Bob Gale (characters), Robert Zemeckis (story), Bob Gale (story), Bob Gale (screenplay)",
    "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Thomas F. Wilson",
    "Plot": "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 9 wins & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "64%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.8",
    "imdbVotes": "401,831",
    "imdbID": "tt0096874",
    "Type": "movie",
    "DVD": "17 Dec 2002",
    "BoxOffice": "N/A",
    "Production": "Universal Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "15": {
    "Title": "Back to the Future Part III",
    "Year": "1990",
    "Rated": "PG",
    "Released": "25 May 1990",
    "Runtime": "118 min",
    "Genre": "Adventure, Comedy, Sci-Fi",
    "Director": "Robert Zemeckis",
    "Writer": "Robert Zemeckis (characters), Bob Gale (characters), Robert Zemeckis (story), Bob Gale (story), Bob Gale (screenplay)",
    "Actors": "Michael J. Fox, Christopher Lloyd, Mary Steenburgen, Thomas F. Wilson",
    "Plot": "Enjoying a peaceable existence in 1885, Doctor Emmet Brown is about to be killed by Buford \"Mad Dog\" Tannen. Marty McFly travels back in time to save his friend.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "55/100"
      }
    ],
    "Metascore": "55",
    "imdbRating": "7.4",
    "imdbVotes": "340,443",
    "imdbID": "tt0099088",
    "Type": "movie",
    "DVD": "17 Dec 2002",
    "BoxOffice": "N/A",
    "Production": "MCA Universal Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "16": {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "70/100"
      }
    ],
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "1,145,761",
    "imdbID": "tt0372784",
    "Type": "movie",
    "DVD": "18 Oct 2005",
    "BoxOffice": "$204,100,000",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.batmanbegins.com/",
    "Response": "True"
  },
  "17": {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "25 Mar 2016",
    "Runtime": "151 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
    "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
    "Plot": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    "Language": "English",
    "Country": "USA",
    "Awards": "14 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "27%"
      },
      {
        "Source": "Metacritic",
        "Value": "44/100"
      }
    ],
    "Metascore": "44",
    "imdbRating": "6.6",
    "imdbVotes": "547,392",
    "imdbID": "tt2975590",
    "Type": "movie",
    "DVD": "19 Jul 2016",
    "BoxOffice": "$293,792,936",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.facebook.com/batmanvsuperman",
    "Response": "True"
  },
  "18": {
    "Title": "Be Kind Rewind",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "22 Feb 2008",
    "Runtime": "102 min",
    "Genre": "Comedy",
    "Director": "Michel Gondry",
    "Writer": "Michel Gondry",
    "Actors": "Jack Black, Yasiin Bey, Danny Glover, Mia Farrow",
    "Plot": "Two bumbling store clerks inadvertently erase the footage from all of the tapes in their video rental store. In order to keep the business running, they re-shoot every film in the store with their own camera, with a budget of zero dollars.",
    "Language": "English",
    "Country": "UK, France, USA",
    "Awards": "4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjY2MTU2MV5BMl5BanBnXkFtZTYwNjUzODc4._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "52/100"
      }
    ],
    "Metascore": "52",
    "imdbRating": "6.4",
    "imdbVotes": "84,624",
    "imdbID": "tt0799934",
    "Type": "movie",
    "DVD": "10 Jun 2008",
    "BoxOffice": "$11,200,000",
    "Production": "New Line Cinema",
    "Website": "http://www.bekindmovie.com/",
    "Response": "True"
  },
  "19": {
    "Title": "Beauty and the Beast",
    "Year": "1991",
    "Rated": "G",
    "Released": "22 Nov 1991",
    "Runtime": "84 min",
    "Genre": "Animation, Family, Fantasy",
    "Director": "Gary Trousdale, Kirk Wise",
    "Writer": "Linda Woolverton (animation screenplay by), Brenda Chapman (story by), Chris Sanders (story by), Burny Mattinson (story by), Kevin Harkey (story by), Brian Pimental (story by), Bruce Woodside (story by), Joe Ranft (story by), Tom Ellery (story by), Kelly Asbury (story by), Robert Lence (story by)",
    "Actors": "Robby Benson, Jesse Corti, Rex Everhart, Angela Lansbury",
    "Plot": "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 24 wins & 25 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "95/100"
      }
    ],
    "Metascore": "95",
    "imdbRating": "8.0",
    "imdbVotes": "374,645",
    "imdbID": "tt0101414",
    "Type": "movie",
    "DVD": "08 Oct 2002",
    "BoxOffice": "$47,611,331",
    "Production": "Buena Vista",
    "Website": "http://www.disney.com/beautyandthebeast",
    "Response": "True"
  },
  "20": {
    "Title": "Beauty and the Beast (2017)",
    "Year": "2017",
    "Rated": "PG",
    "Released": "17 Mar 2017",
    "Runtime": "129 min",
    "Genre": "Family, Fantasy, Musical",
    "Director": "Bill Condon",
    "Writer": "Stephen Chbosky (screenplay by), Evan Spiliotopoulos (screenplay by), Linda Woolverton (based on the 1991 animated film \"Beauty and the Beast\" animation screenplay by)",
    "Actors": "Emma Watson, Dan Stevens, Luke Evans, Josh Gad",
    "Plot": "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 12 wins & 65 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "71%"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
    ],
    "Metascore": "65",
    "imdbRating": "7.2",
    "imdbVotes": "217,538",
    "imdbID": "tt2771200",
    "Type": "movie",
    "DVD": "06 Jun 2017",
    "BoxOffice": "$503,974,884",
    "Production": "Walt Disney Pictures",
    "Website": "http://movies.disney.com/beauty-and-the-beast-2017",
    "Response": "True"
  },
  "21": {
    "Title": "The Best Two Years",
    "Year": "2004",
    "Rated": "PG",
    "Released": "20 Feb 2004",
    "Runtime": "112 min",
    "Genre": "Comedy, Drama",
    "Director": "Scott S. Anderson",
    "Writer": "Scott S. Anderson",
    "Actors": "K.C. Clyde, Kirby Heyborne, Cameron Hopkin, David Nibley",
    "Plot": "Two pairs of Mormon missionaries from America live in a beaten-up apartment in the Dutch city of Haarlem. Their personalities are distinctly different. Appropriately, the most responsible ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwNDc2NDk1OF5BMl5BanBnXkFtZTcwMDc3NDAwMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "73%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "1,199",
    "imdbID": "tt0377038",
    "Type": "movie",
    "DVD": "28 Mar 2006",
    "BoxOffice": "$221,039",
    "Production": "Halestorm Entertainment",
    "Website": "http://www.best2years.com",
    "Response": "True"
  },
  "22": {
    "Title": "Bewitched",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "24 Jun 2005",
    "Runtime": "102 min",
    "Genre": "Comedy, Fantasy, Romance",
    "Director": "Nora Ephron",
    "Writer": "Nora Ephron, Delia Ephron, Sol Saks (television series)",
    "Actors": "Nicole Kidman, Will Ferrell, Shirley MacLaine, Michael Caine",
    "Plot": "Thinking he can overshadow an unknown actress in the part, an egocentric actor unknowingly gets a witch cast in an upcoming television remake of the classic sitcom Bewitched (1964).",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "2 wins & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmNmYzJhODQtZWEyMS00NzUyLWFmYTAtZjYzMDNlNWU3NzVjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "4.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "25%"
      },
      {
        "Source": "Metacritic",
        "Value": "34/100"
      }
    ],
    "Metascore": "34",
    "imdbRating": "4.8",
    "imdbVotes": "63,427",
    "imdbID": "tt0374536",
    "Type": "movie",
    "DVD": "25 Oct 2005",
    "BoxOffice": "$62,252,415",
    "Production": "Columbia Pictures",
    "Website": "http://www.sonypictures.com/movies/bewitched",
    "Response": "True"
  },
  "23": {
    "Title": "Big",
    "Year": "1988",
    "Rated": "PG",
    "Released": "03 Jun 1988",
    "Runtime": "104 min",
    "Genre": "Comedy, Drama, Family",
    "Director": "Penny Marshall",
    "Writer": "Gary Ross, Anne Spielberg",
    "Actors": "Tom Hanks, Elizabeth Perkins, Robert Loggia, John Heard",
    "Plot": "After wishing to be made big, a teenage boy wakes the next morning to find himself mysteriously in the body of an adult.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 11 wins & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDQ1ODM5MTMtMjAwYi00ZGUxLTliNTMtN2ZhODAwMjVhMTRlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.3",
    "imdbVotes": "172,138",
    "imdbID": "tt0094737",
    "Type": "movie",
    "DVD": "18 Dec 2001",
    "BoxOffice": "N/A",
    "Production": "Twentieth Century Fox Home Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  "24": {
    "Title": "Big Hero 6",
    "Year": "2014",
    "Rated": "PG",
    "Released": "07 Nov 2014",
    "Runtime": "102 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Don Hall, Chris Williams",
    "Writer": "Jordan Roberts (screenplay by), Robert L. Baird (screenplay by), Daniel Gerson (screenplay by), Man of Action (Big Hero 6 team and characters created by), Steven T. Seagle (characters), Duncan Rouleau (characters)",
    "Actors": "Scott Adsit, Ryan Potter, Daniel Henney, T.J. Miller",
    "Plot": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 16 wins & 57 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "7.8",
    "imdbVotes": "347,166",
    "imdbID": "tt2245084",
    "Type": "movie",
    "DVD": "24 Feb 2015",
    "BoxOffice": "N/A",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.disney.com/BigHero6",
    "Response": "True"
  },
  "25": {
    "Title": "Black Panther",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "16 Feb 2018",
    "Runtime": "134 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Ryan Coogler",
    "Writer": "Ryan Coogler, Joe Robert Cole, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel Comics by)",
    "Actors": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
    "Plot": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    "Language": "Swahili, Nama, English, Xhosa, Korean",
    "Country": "USA, South Africa, South Korea, Australia",
    "Awards": "14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "88/100"
      }
    ],
    "Metascore": "88",
    "imdbRating": "7.4",
    "imdbVotes": "388,110",
    "imdbID": "tt1825683",
    "Type": "movie",
    "DVD": "15 May 2018",
    "BoxOffice": "$501,105,037",
    "Production": "Marvel Studios",
    "Website": "https://www.facebook.com/BlackPantherMovie/",
    "Response": "True"
  },
  "26": {
    "Title": "The Blind Side",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "20 Nov 2009",
    "Runtime": "129 min",
    "Genre": "Biography, Drama, Sport",
    "Director": "John Lee Hancock",
    "Writer": "John Lee Hancock, Michael Lewis (book)",
    "Actors": "Sandra Bullock, Tim McGraw, Quinton Aaron, Jae Head",
    "Plot": "The story of Michael Oher, a homeless and traumatized boy who became an All American football player and first round NFL draft pick with the help of a caring woman and her family.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 7 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "53/100"
      }
    ],
    "Metascore": "53",
    "imdbRating": "7.7",
    "imdbVotes": "257,079",
    "imdbID": "tt0878804",
    "Type": "movie",
    "DVD": "23 Mar 2010",
    "BoxOffice": "$255,900,000",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.TheBlindSideMovie.com",
    "Response": "True"
  },
  "27": {
    "Title": "Bolt",
    "Year": "2008",
    "Rated": "PG",
    "Released": "21 Nov 2008",
    "Runtime": "96 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Byron Howard, Chris Williams",
    "Writer": "Dan Fogelman (screenplay by), Chris Williams (screenplay by)",
    "Actors": "John Travolta, Miley Cyrus, Susie Essman, Mark Walton",
    "Plot": "The canine star of a fictional sci-fi/action show that believes his powers are real embarks on a cross country trek to save his co-star from a threat he believes is just as real.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 1 win & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDQyNDE5NjQ1N15BMl5BanBnXkFtZTcwMDExMTAwMg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "6.9",
    "imdbVotes": "167,542",
    "imdbID": "tt0397892",
    "Type": "movie",
    "DVD": "24 Mar 2009",
    "BoxOffice": "$114,053,579",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/Bolt",
    "Response": "True"
  },
  "28": {
    "Title": "The Book of Life",
    "Year": "2014",
    "Rated": "PG",
    "Released": "17 Oct 2014",
    "Runtime": "95 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Jorge R. Gutiérrez",
    "Writer": "Jorge R. Gutiérrez (screenplay by), Doug Langdale (screenplay by)",
    "Actors": "Diego Luna, Zoe Saldana, Channing Tatum, Ron Perlman",
    "Plot": "Manolo, a young man who is torn between fulfilling the expectations of his family and following his heart, embarks on an adventure that spans three fantastic worlds where he must face his greatest fears.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 3 wins & 28 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "7.3",
    "imdbVotes": "57,283",
    "imdbID": "tt2262227",
    "Type": "movie",
    "DVD": "27 Jan 2015",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.bookoflifemovie.com/",
    "Response": "True"
  },
  "29": {
    "Title": "The Bounty Hunter",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "19 Mar 2010",
    "Runtime": "110 min",
    "Genre": "Action, Comedy, Romance",
    "Director": "Andy Tennant",
    "Writer": "Sarah Thorp",
    "Actors": "Gerard Butler, Jennifer Aniston, Gio Perez, Joel Marsh Garland",
    "Plot": "A bounty hunter learns that his next target is his ex-wife, a reporter working on a murder cover-up. Soon after their reunion, the always-at-odds duo find themselves on a run-for-their-lives adventure.",
    "Language": "English, Ukrainian",
    "Country": "USA",
    "Awards": "4 wins & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwNjY4MjY0MV5BMl5BanBnXkFtZTcwNTA2OTYwMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "13%"
      },
      {
        "Source": "Metacritic",
        "Value": "22/100"
      }
    ],
    "Metascore": "22",
    "imdbRating": "5.5",
    "imdbVotes": "108,305",
    "imdbID": "tt1038919",
    "Type": "movie",
    "DVD": "13 Jul 2010",
    "BoxOffice": "$66,700,000",
    "Production": "Sony Pictures",
    "Website": "http://thepursuitbegins.com/",
    "Response": "True"
  },
  "30": {
    "Title": "The Bourne Identity",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "14 Jun 2002",
    "Runtime": "119 min",
    "Genre": "Action, Mystery, Thriller",
    "Director": "Doug Liman",
    "Writer": "Tony Gilroy (screenplay), W. Blake Herron (screenplay), Robert Ludlum (novel)",
    "Actors": "Matt Damon, Franka Potente, Chris Cooper, Clive Owen",
    "Plot": "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
    "Language": "English, French, German, Dutch, Italian",
    "Country": "USA, Germany, Czech Republic",
    "Awards": "3 wins & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.9",
    "imdbVotes": "462,051",
    "imdbID": "tt0258463",
    "Type": "movie",
    "DVD": "21 Jan 2003",
    "BoxOffice": "$121,500,000",
    "Production": "Universal Pictures",
    "Website": "http://www.thebourneidentity.com/",
    "Response": "True"
  },
  "31": {
    "Title": "The Bourne Supremacy",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "23 Jul 2004",
    "Runtime": "108 min",
    "Genre": "Action, Thriller",
    "Director": "Paul Greengrass",
    "Writer": "Robert Ludlum (novel), Tony Gilroy (screenplay)",
    "Actors": "Matt Damon, Franka Potente, Brian Cox, Julia Stiles",
    "Plot": "When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.",
    "Language": "English, Russian, German, Italian",
    "Country": "USA, Germany",
    "Awards": "5 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.8",
    "imdbVotes": "396,422",
    "imdbID": "tt0372183",
    "Type": "movie",
    "DVD": "07 Dec 2004",
    "BoxOffice": "$176,049,130",
    "Production": "Universal Pictures",
    "Website": "http://www.thebournesupremacy.com/",
    "Response": "True"
  },
  "32": {
    "Title": "The Bourne Ultimatum",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "03 Aug 2007",
    "Runtime": "115 min",
    "Genre": "Action, Mystery, Thriller",
    "Director": "Paul Greengrass",
    "Writer": "Tony Gilroy (screenplay), Scott Z. Burns (screenplay), George Nolfi (screenplay), Tony Gilroy (screen story), Robert Ludlum (novel)",
    "Actors": "Matt Damon, Julia Stiles, David Strathairn, Scott Glenn",
    "Plot": "Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.",
    "Language": "English, French, Arabic, Russian, Spanish",
    "Country": "USA, Germany, France, Spain",
    "Awards": "Won 3 Oscars. Another 26 wins & 39 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "85/100"
      }
    ],
    "Metascore": "85",
    "imdbRating": "8.0",
    "imdbVotes": "568,152",
    "imdbID": "tt0440963",
    "Type": "movie",
    "DVD": "11 Dec 2007",
    "BoxOffice": "$227,400,000",
    "Production": "Universal Pictures",
    "Website": "http://www.thebourneultimatum.com/",
    "Response": "True"
  },
  "33": {
    "Title": "Brother Bear",
    "Year": "2003",
    "Rated": "G",
    "Released": "01 Nov 2003",
    "Runtime": "85 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Aaron Blaise, Robert Walker",
    "Writer": "Tab Murphy (screenplay), Lorne Cameron (screenplay), David Hoselton (screenplay), Steve Bencich (screenplay), Ron J. Friedman (screenplay), Stephen J. Anderson (story supervisor), Stevie Wermers (story), Kevin Deters (story), Woody Woodman (story), Thom Enriquez (story), Kevin Harkey (story), Broose Johnson (story), John Norton (story), John Puglisi (story), Tim Hodge (additional story), Tom LaBaff (additional story), Ray Shenusay (additional story), Brian Pimental (additional story), Jim Story (additional story), Don Dougherty (additional story), Don Hall (additional story), Samuel Levine (additional story), Aurian Redson (additional story), Chris Williams (additional story), Jeff Hand (additional story material)",
    "Actors": "Joaquin Phoenix, Jeremy Suarez, Jason Raize, Rick Moranis",
    "Plot": "When a young Inuit hunter needlessly kills a bear, he is magically changed into a bear himself as punishment with a talkative cub being his only guide to changing back.",
    "Language": "English, Inuktitut, Croatian, Serbian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 2 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIyNTAyNDYxNF5BMl5BanBnXkFtZTYwNjYwMjg2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "38%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "6.8",
    "imdbVotes": "82,723",
    "imdbID": "tt0328880",
    "Type": "movie",
    "DVD": "30 Mar 2004",
    "BoxOffice": "$85,095,337",
    "Production": "Buena Vista Pictures",
    "Website": "http://disney.go.com/disneypictures/brotherbear/main.html",
    "Response": "True"
  },
  "34": {
    "Title": "A Bug's Life",
    "Year": "1998",
    "Rated": "G",
    "Released": "25 Nov 1998",
    "Runtime": "95 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "John Lasseter, Andrew Stanton(co-director)",
    "Writer": "John Lasseter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Andrew Stanton (screenplay by), Don McEnery (screenplay by), Bob Shaw (screenplay by)",
    "Actors": "Dave Foley, Kevin Spacey, Julia Louis-Dreyfus, Hayden Panettiere",
    "Plot": "A misfit ant, looking for \"warriors\" to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 14 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "77/100"
      }
    ],
    "Metascore": "77",
    "imdbRating": "7.2",
    "imdbVotes": "239,627",
    "imdbID": "tt0120623",
    "Type": "movie",
    "DVD": "20 Apr 1999",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Pictures",
    "Website": "http://www.abugslife.com",
    "Response": "True"
  },
  "35": {
    "Title": "Bye Bye Birdie",
    "Year": "1963",
    "Rated": "APPROVED",
    "Released": "27 May 1963",
    "Runtime": "112 min",
    "Genre": "Comedy, Musical",
    "Director": "George Sidney",
    "Writer": "Michael Stewart (book), Irving Brecher (screen play)",
    "Actors": "Janet Leigh, Dick Van Dyke, Ann-Margret, Maureen Stapleton",
    "Plot": "A rock singer travels to a small Ohio town to make his \"farewell\" television performance and kiss his biggest fan before he is drafted.",
    "Language": "English, Russian, Cantonese",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmFiMzUwNTctZWY0Ny00ZGIyLThhNzEtOWVhZWQyNjcwNjZjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.7",
    "imdbVotes": "6,400",
    "imdbID": "tt0056891",
    "Type": "movie",
    "DVD": "20 Jul 1999",
    "BoxOffice": "N/A",
    "Production": "Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "36": {
    "Title": "Captain America: Civil War",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "06 May 2016",
    "Runtime": "147 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Joe Simon (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
    "Actors": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
    "Plot": "Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man.",
    "Language": "English, German, Xhosa, Russian, Romanian, Hindi",
    "Country": "USA, Germany",
    "Awards": "16 wins & 65 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.8",
    "imdbVotes": "521,062",
    "imdbID": "tt3498820",
    "Type": "movie",
    "DVD": "13 Sep 2016",
    "BoxOffice": "$408,080,554",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/captainamerica#/home",
    "Response": "True"
  },
  "37": {
    "Title": "Captain America: The First Avenger",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "22 Jul 2011",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joe Johnston",
    "Writer": "Christopher Markus (screenplay), Stephen McFeely (screenplay), Joe Simon (comic books), Jack Kirby (comic books)",
    "Actors": "Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones",
    "Plot": "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    "Language": "English, Norwegian, French",
    "Country": "USA",
    "Awards": "3 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "6.9",
    "imdbVotes": "616,072",
    "imdbID": "tt0458339",
    "Type": "movie",
    "DVD": "25 Oct 2011",
    "BoxOffice": "$176,636,816",
    "Production": "Paramount Pictures",
    "Website": "http://captainamerica.marvel.com/",
    "Response": "True"
  },
  "38": {
    "Title": "Captain America: The Winter Soldier",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "04 Apr 2014",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Sci-Fi, Thriller",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Joe Simon (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
    "Actors": "Chris Evans, Samuel L. Jackson, Scarlett Johansson, Robert Redford",
    "Plot": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 5 wins & 50 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "70/100"
      }
    ],
    "Metascore": "70",
    "imdbRating": "7.8",
    "imdbVotes": "618,035",
    "imdbID": "tt1843866",
    "Type": "movie",
    "DVD": "09 Sep 2014",
    "BoxOffice": "$228,636,083",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/captainamerica",
    "Response": "True"
  },
  "39": {
    "Title": "Cars",
    "Year": "2006",
    "Rated": "G",
    "Released": "09 Jun 2006",
    "Runtime": "117 min",
    "Genre": "Animation, Comedy, Family",
    "Director": "John Lasseter, Joe Ranft(co-director)",
    "Writer": "John Lasseter (original story by), Joe Ranft (original story by), Jorgen Klubien (original story by), Dan Fogelman (screenplay by), John Lasseter (screenplay by), Joe Ranft (screenplay by), Kiel Murray (screenplay by), Phil Lorin (screenplay by), Jorgen Klubien (screenplay by), Steve Purcell (additional screenplay material)",
    "Actors": "Owen Wilson, Paul Newman, Bonnie Hunt, Larry the Cable Guy",
    "Plot": "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
    "Language": "English, Italian, Japanese, Yiddish",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 27 wins & 28 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.1",
    "imdbVotes": "310,926",
    "imdbID": "tt0317219",
    "Type": "movie",
    "DVD": "07 Nov 2006",
    "BoxOffice": "$244,052,771",
    "Production": "Buena Vista",
    "Website": "http://www.carsthemovie.com",
    "Response": "True"
  },
  "40": {
    "Title": "Cars 3",
    "Year": "2017",
    "Rated": "G",
    "Released": "16 Jun 2017",
    "Runtime": "102 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Brian Fee",
    "Writer": "Brian Fee (original story by), Ben Queen (original story by), Eyal Podell (original story by), Jonathon E. Stewart (original story by), Kiel Murray (screenplay by), Bob Peterson (screenplay by), Mike Rich (screenplay by), Scott Morse (additional story material)",
    "Actors": "Owen Wilson, Cristela Alonzo, Chris Cooper, Nathan Fillion",
    "Plot": "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "68%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.8",
    "imdbVotes": "50,123",
    "imdbID": "tt3606752",
    "Type": "movie",
    "DVD": "07 Nov 2017",
    "BoxOffice": "$152,603,003",
    "Production": "Walt Disney Pictures",
    "Website": "http://movies.disney.com/cars-3",
    "Response": "True"
  },
  "41": {
    "Title": "Casino Royale",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "17 Nov 2006",
    "Runtime": "144 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Martin Campbell",
    "Writer": "Neal Purvis (screenplay), Robert Wade (screenplay), Paul Haggis (screenplay), Ian Fleming (novel)",
    "Actors": "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
    "Plot": "Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007, and must defeat a private banker to terrorists in a high stakes game of poker at Casino Royale, Montenegro, but things are not what they seem.",
    "Language": "English, French",
    "Country": "UK, Czech Republic, USA, Germany, Bahamas, Italy",
    "Awards": "Won 1 BAFTA Film Award. Another 26 wins & 44 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "80/100"
      }
    ],
    "Metascore": "80",
    "imdbRating": "8.0",
    "imdbVotes": "524,033",
    "imdbID": "tt0381061",
    "Type": "movie",
    "DVD": "13 Mar 2007",
    "BoxOffice": "$167,007,184",
    "Production": "Sony",
    "Website": "http://www.sonypictures.com/movies/casinoroyale/site/",
    "Response": "True"
  },
  "42": {
    "Title": "Catch Me If You Can",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "25 Dec 2002",
    "Runtime": "141 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "Steven Spielberg",
    "Writer": "Jeff Nathanson (screenplay), Frank Abagnale Jr. (book), Stan Redding (book)",
    "Actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
    "Plot": "A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor.",
    "Language": "English, French",
    "Country": "USA, Canada",
    "Awards": "Nominated for 2 Oscars. Another 13 wins & 41 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "8.1",
    "imdbVotes": "676,409",
    "imdbID": "tt0264464",
    "Type": "movie",
    "DVD": "06 May 2003",
    "BoxOffice": "$164,400,000",
    "Production": "DreamWorks SKG",
    "Website": "http://www.dreamworks.com/catchthem/jump2.html",
    "Response": "True"
  },
  "43": {
    "Title": "Charly",
    "Year": "1968",
    "Rated": "M",
    "Released": "23 Sep 1968",
    "Runtime": "103 min",
    "Genre": "Drama, Romance, Sci-Fi",
    "Director": "Ralph Nelson",
    "Writer": "Daniel Keyes (novel), Stirling Silliphant (screenplay)",
    "Actors": "Cliff Robertson, Claire Bloom, Lilia Skala, Leon Janney",
    "Plot": "An intellectually disabled man undergoes an experiment that gives him the intelligence of a genius.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 3 wins & 6 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWUxOTM0YjEtNjM1Yi00ZmVlLTllNDYtMDdhYmNkYmE5YzgzXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.1",
    "imdbVotes": "5,374",
    "imdbID": "tt0062794",
    "Type": "movie",
    "DVD": "08 Mar 2005",
    "BoxOffice": "N/A",
    "Production": "Cinerama",
    "Website": "N/A",
    "Response": "True"
  },
  "44": {
    "Title": "Cheaper by the Dozen",
    "Year": "2003",
    "Rated": "PG",
    "Released": "25 Dec 2003",
    "Runtime": "98 min",
    "Genre": "Comedy, Family",
    "Director": "Shawn Levy",
    "Writer": "Frank B. Gilbreth Jr. (novel), Ernestine Gilbreth Carey (novel), Craig Titley (screen story), Sam Harper (screenplay), Joel Cohen (screenplay), Alec Sokolow (screenplay)",
    "Actors": "Steve Martin, Bonnie Hunt, Piper Perabo, Tom Welling",
    "Plot": "With his wife doing a book tour, a father of twelve must handle a new job and his unstable brood.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NzYxMjY0Ml5BMl5BanBnXkFtZTcwOTU0NDczMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "24%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "5.8",
    "imdbVotes": "84,346",
    "imdbID": "tt0349205",
    "Type": "movie",
    "DVD": "06 Apr 2004",
    "BoxOffice": "$138,507,634",
    "Production": "20th Century Fox",
    "Website": "http://www.cheaperbythedozenmovie.com/",
    "Response": "True"
  },
  "45": {
    "Title": "Chitty Chitty Bang Bang",
    "Year": "1968",
    "Rated": "G",
    "Released": "18 Dec 1968",
    "Runtime": "144 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Ken Hughes",
    "Writer": "Ian Fleming (novel), Roald Dahl (screenplay), Ken Hughes (screenplay), Richard Maibaum (additional dialogue)",
    "Actors": "Dick Van Dyke, Sally Ann Howes, Lionel Jeffries, Gert Fröbe",
    "Plot": "A down-on-his-luck inventor turns a broken-down Grand Prix car into a fancy vehicle for his children, and then they go off on a magical fantasy adventure to save their grandfather in a far-off land.",
    "Language": "English, German, French, Latin",
    "Country": "UK",
    "Awards": "Nominated for 1 Oscar. Another 4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWU3MTA3MmQtNTA0NS00MTA4LTg4MDgtZWQ4MDc2MTNlNmVkXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.9",
    "imdbVotes": "35,850",
    "imdbID": "tt0062803",
    "Type": "movie",
    "DVD": "10 Nov 1998",
    "BoxOffice": "N/A",
    "Production": "United Artists",
    "Website": "N/A",
    "Response": "True"
  },
  "46": {
    "Title": "The Chronicles of Narnia: Prince Caspian",
    "Year": "2008",
    "Rated": "PG",
    "Released": "16 May 2008",
    "Runtime": "150 min",
    "Genre": "Action, Adventure, Family",
    "Director": "Andrew Adamson",
    "Writer": "Andrew Adamson (screenplay), Christopher Markus (screenplay), Stephen McFeely (screenplay), C.S. Lewis (novel)",
    "Actors": "Ben Barnes, Georgie Henley, Skandar Keynes, William Moseley",
    "Plot": "The Pevensie siblings return to Narnia, where they are enlisted to once again help ward off an evil king and restore the rightful heir to the land's throne, Prince Caspian.",
    "Language": "English",
    "Country": "USA, Poland, Slovenia, Czech Republic",
    "Awards": "2 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIwOTA4NTE4Ml5BMl5BanBnXkFtZTcwOTI2NTg1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.5",
    "imdbVotes": "171,620",
    "imdbID": "tt0499448",
    "Type": "movie",
    "DVD": "02 Dec 2008",
    "BoxOffice": "$141,614,023",
    "Production": "Walt Disney Pictures",
    "Website": "http://narnia.com/",
    "Response": "True"
  },
  "47": {
    "Title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "Year": "2005",
    "Rated": "PG",
    "Released": "09 Dec 2005",
    "Runtime": "143 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Andrew Adamson",
    "Writer": "Ann Peacock (screenplay), Andrew Adamson (screenplay), Christopher Markus (screenplay), Stephen McFeely (screenplay), C.S. Lewis (book)",
    "Actors": "Georgie Henley, Skandar Keynes, William Moseley, Anna Popplewell",
    "Plot": "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
    "Language": "English, German, Brazilian Sign Language",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 14 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "76%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "6.9",
    "imdbVotes": "326,793",
    "imdbID": "tt0363771",
    "Type": "movie",
    "DVD": "04 Apr 2006",
    "BoxOffice": "$291,685,219",
    "Production": "Buena Vista",
    "Website": "http://www.narnia.com/",
    "Response": "True"
  },
  "48": {
    "Title": "The Chronicles of Narnia: The Voyage of the Dawn Treader",
    "Year": "2010",
    "Rated": "PG",
    "Released": "10 Dec 2010",
    "Runtime": "113 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Michael Apted",
    "Writer": "Christopher Markus (screenplay), Stephen McFeely (screenplay), Michael Petroni (screenplay), C.S. Lewis (novel)",
    "Actors": "Georgie Henley, Skandar Keynes, Ben Barnes, Will Poulter",
    "Plot": "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader. Along the way they encounter dragons, dwarves, merfolk, and a band of lost warriors before reaching the edge of the world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 1 win & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ2MDQzMzExNl5BMl5BanBnXkFtZTcwMTYzOTc5Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "50%"
      },
      {
        "Source": "Metacritic",
        "Value": "53/100"
      }
    ],
    "Metascore": "53",
    "imdbRating": "6.3",
    "imdbVotes": "123,271",
    "imdbID": "tt0980970",
    "Type": "movie",
    "DVD": "08 Apr 2011",
    "BoxOffice": "$104,383,624",
    "Production": "20th Century Fox",
    "Website": "http://www.narnia.com/",
    "Response": "True"
  },
  "49": {
    "Title": "Clash of the Titans",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "02 Apr 2010",
    "Runtime": "106 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Louis Leterrier",
    "Writer": "Travis Beacham (screenplay), Phil Hay (screenplay), Matt Manfredi (screenplay), Beverley Cross",
    "Actors": "Sam Worthington, Liam Neeson, Ralph Fiennes, Jason Flemyng",
    "Plot": "Perseus demigod, son of Zeus, battles the minions of the underworld to stop them from conquering heaven and earth.",
    "Language": "English",
    "Country": "USA, UK, Australia",
    "Awards": "4 wins & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "27%"
      },
      {
        "Source": "Metacritic",
        "Value": "39/100"
      }
    ],
    "Metascore": "39",
    "imdbRating": "5.8",
    "imdbVotes": "249,587",
    "imdbID": "tt0800320",
    "Type": "movie",
    "DVD": "27 Jul 2010",
    "BoxOffice": "$163,100,000",
    "Production": "Warner Bros.",
    "Website": "http://clash-of-the-titans.warnerbros.com/",
    "Response": "True"
  },
  "50": {
    "Title": "Cloverfield",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jan 2008",
    "Runtime": "85 min",
    "Genre": "Action, Horror, Sci-Fi, Thriller",
    "Director": "Matt Reeves",
    "Writer": "Drew Goddard",
    "Actors": "Lizzy Caplan, Jessica Lucas, T.J. Miller, Michael Stahl-David",
    "Plot": "A group of friends venture deep into the streets of New York on a rescue mission during a rampaging monster attack.",
    "Language": "English, Russian",
    "Country": "USA",
    "Awards": "5 wins & 27 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDNhNDJlNDktZDI4OC00OTE3LWI2M2UtOThkNTFkNjBjYzRmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "7.0",
    "imdbVotes": "341,481",
    "imdbID": "tt1060277",
    "Type": "movie",
    "DVD": "22 Apr 2008",
    "BoxOffice": "$79,952,254",
    "Production": "Paramount",
    "Website": "http://www.cloverfieldmovie.com/",
    "Response": "True"
  },
  "51": {
    "Title": "Coach Carter",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "14 Jan 2005",
    "Runtime": "136 min",
    "Genre": "Biography, Drama, Sport",
    "Director": "Thomas Carter",
    "Writer": "Mark Schwahn, John Gatins",
    "Actors": "Samuel L. Jackson, Rob Brown, Robert Ri'chard, Rick Gonzalez",
    "Plot": "Controversy surrounds high school basketball coach Ken Carter after he benches his entire team for breaking their academic contract with him.",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "3 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "64%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.3",
    "imdbVotes": "106,687",
    "imdbID": "tt0393162",
    "Type": "movie",
    "DVD": "21 Jun 2005",
    "BoxOffice": "$67,169,549",
    "Production": "Paramount Pictures",
    "Website": "http://www.coachcartermovie.com/index2.html",
    "Response": "True"
  },
  "52": {
    "Title": "Coco",
    "Year": "2017",
    "Rated": "PG",
    "Released": "22 Nov 2017",
    "Runtime": "105 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Lee Unkrich, Adrian Molina(co-director)",
    "Writer": "Lee Unkrich (original story by), Jason Katz (original story by), Matthew Aldrich (original story by), Adrian Molina (original story by), Adrian Molina (screenplay by), Matthew Aldrich (screenplay by)",
    "Actors": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach",
    "Plot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 86 wins & 28 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "8.4",
    "imdbVotes": "221,294",
    "imdbID": "tt2380307",
    "Type": "movie",
    "DVD": "27 Feb 2018",
    "BoxOffice": "&pound;208,487,719",
    "Production": "Disney/Pixar",
    "Website": "N/A",
    "Response": "True"
  },
  "53": {
    "Title": "The Conjuring",
    "Year": "2013",
    "Rated": "R",
    "Released": "19 Jul 2013",
    "Runtime": "112 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "James Wan",
    "Writer": "Chad Hayes, Carey W. Hayes",
    "Actors": "Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston",
    "Plot": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    "Language": "English, Latin",
    "Country": "USA",
    "Awards": "15 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.5",
    "imdbVotes": "371,987",
    "imdbID": "tt1457767",
    "Type": "movie",
    "DVD": "22 Oct 2013",
    "BoxOffice": "$137,387,272",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.theconjuring-movie.com",
    "Response": "True"
  },
  "54": {
    "Title": "Cool Runnings",
    "Year": "1993",
    "Rated": "PG",
    "Released": "01 Oct 1993",
    "Runtime": "98 min",
    "Genre": "Adventure, Comedy, Family",
    "Director": "Jon Turteltaub",
    "Writer": "Lynn Siefert (story), Michael Ritchie (story), Lynn Siefert (screenplay), Tommy Swerdlow (screenplay), Michael Goldberg (screenplay)",
    "Actors": "Leon, Doug E. Doug, Rawle D. Lewis, Malik Yoba",
    "Plot": "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
    "Language": "English, German, Russian",
    "Country": "USA",
    "Awards": "2 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxMTQ3MzMwMV5BMl5BanBnXkFtZTgwNTYxNzYxMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "76%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "6.9",
    "imdbVotes": "81,216",
    "imdbID": "tt0106611",
    "Type": "movie",
    "DVD": "17 Jul 2001",
    "BoxOffice": "N/A",
    "Production": "Disney",
    "Website": "N/A",
    "Response": "True"
  },
  "55": {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 152 wins & 155 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "9.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "84/100"
      }
    ],
    "Metascore": "84",
    "imdbRating": "9.0",
    "imdbVotes": "1,969,949",
    "imdbID": "tt0468569",
    "Type": "movie",
    "DVD": "09 Dec 2008",
    "BoxOffice": "$533,316,061",
    "Production": "Warner Bros. Pictures/Legendary",
    "Website": "http://thedarkknight.warnerbros.com/",
    "Response": "True"
  },
  "56": {
    "Title": "The Dark Knight Rises",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "20 Jul 2012",
    "Runtime": "164 min",
    "Genre": "Action, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Gary Oldman, Tom Hardy, Joseph Gordon-Levitt",
    "Plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
    "Language": "English, Arabic",
    "Country": "UK, USA",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 38 wins & 102 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "78/100"
      }
    ],
    "Metascore": "78",
    "imdbRating": "8.4",
    "imdbVotes": "1,332,466",
    "imdbID": "tt1345836",
    "Type": "movie",
    "DVD": "03 Dec 2012",
    "BoxOffice": "$448,130,642",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.thedarkknightrises.com/",
    "Response": "True"
  },
  "57": {
    "Title": "The Day the Earth Stood Still",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "12 Dec 2008",
    "Runtime": "104 min",
    "Genre": "Drama, Sci-Fi, Thriller",
    "Director": "Scott Derrickson",
    "Writer": "David Scarpa (screenplay), Edmund H. North",
    "Actors": "Keanu Reeves, Jennifer Connelly, Kathy Bates, Jaden Smith",
    "Plot": "A remake of the 1951 classic science fiction film about an alien visitor and his giant robot counterpart who visit Earth.",
    "Language": "English, Mandarin",
    "Country": "USA, Canada",
    "Awards": "3 wins & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzMyNjE0MTcxNF5BMl5BanBnXkFtZTcwODcyOTMwMg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "21%"
      },
      {
        "Source": "Metacritic",
        "Value": "40/100"
      }
    ],
    "Metascore": "40",
    "imdbRating": "5.5",
    "imdbVotes": "152,152",
    "imdbID": "tt0970416",
    "Type": "movie",
    "DVD": "07 Apr 2009",
    "BoxOffice": "$79,136,963",
    "Production": "20th Century Fox",
    "Website": "http://www.dtessmovie.com/",
    "Response": "True"
  },
  "58": {
    "Title": "The Devil Wears Prada",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "30 Jun 2006",
    "Runtime": "109 min",
    "Genre": "Comedy, Drama",
    "Director": "David Frankel",
    "Writer": "Aline Brosh McKenna (screenplay), Lauren Weisberger (novel)",
    "Actors": "Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci",
    "Plot": "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.",
    "Language": "English, French",
    "Country": "USA, France",
    "Awards": "Nominated for 2 Oscars. Another 16 wins & 50 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "75%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.9",
    "imdbVotes": "325,750",
    "imdbID": "tt0458352",
    "Type": "movie",
    "DVD": "12 Dec 2006",
    "BoxOffice": "$124,700,000",
    "Production": "20th Century Fox",
    "Website": "http://www.devilwearspradamovie.com/",
    "Response": "True"
  },
  "59": {
    "Title": "Dinosaur",
    "Year": "2000",
    "Rated": "PG",
    "Released": "19 May 2000",
    "Runtime": "82 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Eric Leighton, Ralph Zondag",
    "Writer": "Thom Enriquez (story), John Harrison (story), Robert Nelson Jacobs (story), Ralph Zondag (story), John Harrison (screenplay), Robert Nelson Jacobs (screenplay), Walon Green (based on an earlier screenplay by), Gregory Gunter (creative development), Shirley Pierce (screenplay), Jonathan Roberts (additional story material), Rhett Reese (additional story material), Tamara Lusher Stocker (additional story)",
    "Actors": "Alfre Woodard, Ossie Davis, Max Casella, Hayden Panettiere",
    "Plot": "An orphaned dinosaur raised by lemurs joins an arduous trek to a sancturary after a meteorite shower destroys his family home.",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ1NTZjMjUtODNmZS00NTVhLWFhM2ItNWZiOTdjMzdhZTY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "Metascore": "56",
    "imdbRating": "6.5",
    "imdbVotes": "45,382",
    "imdbID": "tt0130623",
    "Type": "movie",
    "DVD": "30 Jan 2001",
    "BoxOffice": "$135,606,304",
    "Production": "Buena Vista",
    "Website": "http://disney.go.com/disneypictures/dinosaur/dinomain.html",
    "Response": "True"
  },
  "60": {
    "Title": "Dirty Dancing",
    "Year": "1987",
    "Rated": "PG-13",
    "Released": "21 Aug 1987",
    "Runtime": "100 min",
    "Genre": "Drama, Music, Romance",
    "Director": "Emile Ardolino",
    "Writer": "Eleanor Bergstein",
    "Actors": "Jennifer Grey, Patrick Swayze, Jerry Orbach, Cynthia Rhodes",
    "Plot": "Spending the summer at a Catskills resort with her family, Frances \"Baby\" Houseman falls in love with the camp's dance instructor, Johnny Castle.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 11 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MDY3ODQ2OV5BMl5BanBnXkFtZTgwOTQ2NTYxMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "6.9",
    "imdbVotes": "166,624",
    "imdbID": "tt0092890",
    "Type": "movie",
    "DVD": "19 Aug 1997",
    "BoxOffice": "$1,899,606",
    "Production": "Vestron Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "61": {
    "Title": "Doctor Strange",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "04 Nov 2016",
    "Runtime": "115 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Scott Derrickson",
    "Writer": "Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)",
    "Actors": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
    "Plot": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 20 wins & 64 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.5",
    "imdbVotes": "450,734",
    "imdbID": "tt1211837",
    "Type": "movie",
    "DVD": "28 Feb 2017",
    "BoxOffice": "$232,630,718",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/doctorstrange",
    "Response": "True"
  },
  "62": {
    "Title": "Dreamgirls",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "25 Dec 2006",
    "Runtime": "130 min",
    "Genre": "Drama, Music, Musical",
    "Director": "Bill Condon",
    "Writer": "Tom Eyen (based on the original broadway production book by), Bill Condon (screenplay)",
    "Actors": "Jamie Foxx, Beyoncé, Eddie Murphy, Danny Glover",
    "Plot": "A trio of black female soul singers cross over to the pop charts in the early 1960s, facing their own personal struggles along the way.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 66 wins & 91 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1MzIwNDQyNl5BMl5BanBnXkFtZTcwNDEwNzYyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "6.5",
    "imdbVotes": "62,803",
    "imdbID": "tt0443489",
    "Type": "movie",
    "DVD": "01 May 2007",
    "BoxOffice": "$103,300,000",
    "Production": "Dreamworks",
    "Website": "http://www.dreamgirlsmovie.com/",
    "Response": "True"
  },
  "63": {
    "Title": "The Duff",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "20 Feb 2015",
    "Runtime": "101 min",
    "Genre": "Comedy, Romance",
    "Director": "Ari Sandel",
    "Writer": "Josh A. Cagan (screenplay), Kody Keplinger (novel)",
    "Actors": "Mae Whitman, Robbie Amell, Bella Thorne, Bianca A. Santos",
    "Plot": "A high school senior instigates a social pecking order revolution after finding out that she has been labeled the DUFF - Designated Ugly Fat Friend - by her prettier, more popular counterparts.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "1 win & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3OTg3MDUwN15BMl5BanBnXkFtZTgwMTAwMTkxNDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      },
      {
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "Metascore": "56",
    "imdbRating": "6.5",
    "imdbVotes": "68,382",
    "imdbID": "tt1666801",
    "Type": "movie",
    "DVD": "09 Jun 2015",
    "BoxOffice": "$30,777,437",
    "Production": "Lionsgate Films",
    "Website": "http://theduffmovie.com/",
    "Response": "True"
  },
  "64": {
    "Title": "Elf",
    "Year": "2003",
    "Rated": "PG",
    "Released": "07 Nov 2003",
    "Runtime": "97 min",
    "Genre": "Comedy, Family, Fantasy",
    "Director": "Jon Favreau",
    "Writer": "David Berenbaum",
    "Actors": "Will Ferrell, James Caan, Bob Newhart, Edward Asner",
    "Plot": "After inadvertently wreaking havoc on the elf community due to his ungainly size, a man raised as an elf at the North Pole is sent to the U.S. in search of his true identity.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "6.9",
    "imdbVotes": "174,890",
    "imdbID": "tt0319343",
    "Type": "movie",
    "DVD": "16 Nov 2004",
    "BoxOffice": "$173,400,000",
    "Production": "New Line Cinema",
    "Website": "http://elfmovie.com/",
    "Response": "True"
  },
  "65": {
    "Title": "The Emperor's New Groove",
    "Year": "2000",
    "Rated": "G",
    "Released": "15 Dec 2000",
    "Runtime": "78 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Mark Dindal",
    "Writer": "Chris Williams (story by), Mark Dindal (story by), David Reynolds (screenplay by), Stephen J. Anderson (additional story material by), Don Hall (additional story material by), John Norton (additional story material by), Roger Allers (based on an original story by), Matthew Jacobs (based on an original story by), Doug Frankel (additional story), Mark Kennedy (additional story), Mark Walton (additional story)",
    "Actors": "David Spade, John Goodman, Eartha Kitt, Patrick Warburton",
    "Plot": "Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne with the help of Pacha, the gentle llama herder.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 26 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzk1ZDcwY2YtMzRhZi00OTYwLTkzMmYtMGMwN2Y3ZjM1MTM0XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "70/100"
      }
    ],
    "Metascore": "70",
    "imdbRating": "7.3",
    "imdbVotes": "151,775",
    "imdbID": "tt0120917",
    "Type": "movie",
    "DVD": "01 May 2001",
    "BoxOffice": "$87,320,505",
    "Production": "Buena Vista Pictures",
    "Website": "http://disney.go.com/disneypictures/emperorsnewgroove",
    "Response": "True"
  },
  "66": {
    "Title": "Enchanted",
    "Year": "2007",
    "Rated": "PG",
    "Released": "21 Nov 2007",
    "Runtime": "107 min",
    "Genre": "Animation, Comedy, Family",
    "Director": "Kevin Lima",
    "Writer": "Bill Kelly",
    "Actors": "Amy Adams, Patrick Dempsey, James Marsden, Timothy Spall",
    "Plot": "A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil queen, where she falls in love with a lawyer.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 12 wins & 48 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NDQ2Mjc0OF5BMl5BanBnXkFtZTcwNzQ2NDE1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.1",
    "imdbVotes": "160,224",
    "imdbID": "tt0461770",
    "Type": "movie",
    "DVD": "18 Mar 2008",
    "BoxOffice": "$127,706,877",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.EnchantedMovie.com/",
    "Response": "True"
  },
  "67": {
    "Title": "Ender's Game",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "01 Nov 2013",
    "Runtime": "114 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Gavin Hood",
    "Writer": "Gavin Hood (screenplay by), Orson Scott Card (based on the book Ender's Game by)",
    "Actors": "Asa Butterfield, Harrison Ford, Hailee Steinfeld, Abigail Breslin",
    "Plot": "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, a genocidal alien race which nearly annihilated the human race in a previous invasion.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "61%"
      },
      {
        "Source": "Metacritic",
        "Value": "51/100"
      }
    ],
    "Metascore": "51",
    "imdbRating": "6.6",
    "imdbVotes": "205,381",
    "imdbID": "tt1731141",
    "Type": "movie",
    "DVD": "11 Feb 2014",
    "BoxOffice": "$61,656,849",
    "Production": "Summit Entertainment",
    "Website": "http://if-sentinel.com/",
    "Response": "True"
  },
  "68": {
    "Title": "Fantastic Beasts and Where to Find Them",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "18 Nov 2016",
    "Runtime": "133 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "J.K. Rowling",
    "Actors": "Eddie Redmayne, Sam Redford, Scott Goldman, Tim Bentinck",
    "Plot": "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
    "Language": "English, Khmer",
    "Country": "UK, USA",
    "Awards": "Won 1 Oscar. Another 14 wins & 51 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.4",
    "imdbVotes": "317,343",
    "imdbID": "tt3183660",
    "Type": "movie",
    "DVD": "28 Mar 2017",
    "BoxOffice": "$234,018,657",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.fantasticbeasts.com/",
    "Response": "True"
  },
  "69": {
    "Title": "The Fault in Our Stars",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "06 Jun 2014",
    "Runtime": "126 min",
    "Genre": "Drama, Romance",
    "Director": "Josh Boone",
    "Writer": "Scott Neustadter (screenplay), Michael H. Weber (screenplay), John Green (book)",
    "Actors": "Shailene Woodley, Ansel Elgort, Nat Wolff, Laura Dern",
    "Plot": "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
    "Language": "English",
    "Country": "USA",
    "Awards": "21 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "80%"
      },
      {
        "Source": "Metacritic",
        "Value": "69/100"
      }
    ],
    "Metascore": "69",
    "imdbRating": "7.8",
    "imdbVotes": "300,990",
    "imdbID": "tt2582846",
    "Type": "movie",
    "DVD": "16 Sep 2014",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.facebook.com/faultinourstarsmovie",
    "Response": "True"
  },
  "70": {
    "Title": "Fiddler on the Roof",
    "Year": "1971",
    "Rated": "G",
    "Released": "03 Nov 1971",
    "Runtime": "181 min",
    "Genre": "Drama, Family, Musical",
    "Director": "Norman Jewison",
    "Writer": "Sholom Aleichem (adapted from stories), Arnold Perl (adapted from Sholem Aleichem stories by special arrangement with), Joseph Stein (stageplay), Joseph Stein (screenplay)",
    "Actors": "Topol, Norma Crane, Leonard Frey, Molly Picon",
    "Plot": "In prerevolutionary Russia, a Jewish peasant contends with marrying off three of his daughters while growing anti-Semitic sentiment threatens his village.",
    "Language": "English, Hebrew, Russian",
    "Country": "USA",
    "Awards": "Won 3 Oscars. Another 6 wins & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMxNDYzNmUtYjFmNC00MGM2LWFmNzMtODhlMGNkNDg5MjE5XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.0",
    "imdbVotes": "33,655",
    "imdbID": "tt0067093",
    "Type": "movie",
    "DVD": "30 Jun 1998",
    "BoxOffice": "N/A",
    "Production": "United Artists",
    "Website": "N/A",
    "Response": "True"
  },
  "71": {
    "Title": "Finding Nemo",
    "Year": "2003",
    "Rated": "G",
    "Released": "30 May 2003",
    "Runtime": "100 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Andrew Stanton, Lee Unkrich(co-director)",
    "Writer": "Andrew Stanton (original story by), Andrew Stanton (screenplay by), Bob Peterson (screenplay by), David Reynolds (screenplay by)",
    "Actors": "Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
    "Plot": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 48 wins & 61 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjMxYzBiNjUtZDliNC00MDAyLTg3N2QtOWNjNmNhZGQzNDg5XkEyXkFqcGdeQXVyNjE2MjQwNjc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "Source": "Metacritic",
        "Value": "90/100"
      }
    ],
    "Metascore": "90",
    "imdbRating": "8.1",
    "imdbVotes": "827,869",
    "imdbID": "tt0266543",
    "Type": "movie",
    "DVD": "07 May 2013",
    "BoxOffice": "$380,529,370",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.go.com/disneyvideos/animatedfilms/findingnemo/index2.html",
    "Response": "True"
  },
  "72": {
    "Title": "Freedom Writers",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "05 Jan 2007",
    "Runtime": "123 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "Richard LaGravenese",
    "Writer": "Richard LaGravenese (screenplay), Freedom Writers (book), Erin Gruwell (book)",
    "Actors": "Hilary Swank, Patrick Dempsey, Scott Glenn, Imelda Staunton",
    "Plot": "A young teacher inspires her class of at-risk students to learn tolerance, apply themselves, and pursue education beyond high school.",
    "Language": "English",
    "Country": "Germany, USA",
    "Awards": "2 wins & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxMzExNTgxMV5BMl5BanBnXkFtZTcwNDUxODM0MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "7.5",
    "imdbVotes": "59,803",
    "imdbID": "tt0463998",
    "Type": "movie",
    "DVD": "17 Apr 2007",
    "BoxOffice": "$36,489,507",
    "Production": "Paramount Pictures",
    "Website": "http://www.freedomwritersmovie.com/",
    "Response": "True"
  },
  "73": {
    "Title": "Frozen",
    "Year": "2013",
    "Rated": "PG",
    "Released": "27 Nov 2013",
    "Runtime": "102 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Chris Buck, Jennifer Lee",
    "Writer": "Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by \"The Snow Queen\" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)",
    "Actors": "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
    "Plot": "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    "Language": "English, Norwegian",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 77 wins & 57 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "7.5",
    "imdbVotes": "493,818",
    "imdbID": "tt2294629",
    "Type": "movie",
    "DVD": "18 Mar 2014",
    "BoxOffice": "$400,736,600",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.disney.com/frozen",
    "Response": "True"
  },
  "74": {
    "Title": "Funny Girl",
    "Year": "1968",
    "Rated": "G",
    "Released": "19 Sep 1968",
    "Runtime": "151 min",
    "Genre": "Biography, Comedy, Drama",
    "Director": "William Wyler",
    "Writer": "Isobel Lennart (based on the musical play by), Isobel Lennart (screenplay by)",
    "Actors": "Barbra Streisand, Omar Sharif, Kay Medford, Anne Francis",
    "Plot": "The life of Fanny Brice, famed comedienne and entertainer of the early 1900s. We see her rise to fame as a Ziegfield girl, subsequent career, and her personal life, particularly her relationship with Nick Arnstein.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 7 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTAxZTA2OTAtYzY1OC00NGZlLWJlZDItOWZhMjU4YTc3YWRmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "89/100"
      }
    ],
    "Metascore": "89",
    "imdbRating": "7.6",
    "imdbVotes": "15,663",
    "imdbID": "tt0062994",
    "Type": "movie",
    "DVD": "21 Nov 2001",
    "BoxOffice": "N/A",
    "Production": "Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "75": {
    "Title": "Get Smart",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "20 Jun 2008",
    "Runtime": "110 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Peter Segal",
    "Writer": "Tom J. Astle, Matt Ember, Mel Brooks (characters), Buck Henry (characters)",
    "Actors": "Steve Carell, Anne Hathaway, Dwayne Johnson, Alan Arkin",
    "Plot": "A highly intellectual but socially awkward spy is tasked with preventing a terrorist attack from a Russian spy agency.",
    "Language": "English, Russian, Punjabi, Arabic",
    "Country": "USA",
    "Awards": "2 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NzQ4MDU0NV5BMl5BanBnXkFtZTcwMzA2NzQ2MQ@@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "50%"
        },
        {
          "Source": "Metacritic",
          "Value": "54/100"
        }
    ],
    "Metascore": "54",
    "imdbRating": "6.5",
    "imdbVotes": "184,873",
    "imdbID": "tt0425061",
    "Type": "movie",
    "DVD": "04 Nov 2008",
    "BoxOffice": "$130,246,343",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.getsmartmovie.com/",
    "Response": "True"
  },
  "76": {
    "Title": "Ghost Dad",
    "Year": "1990",
    "Rated": "PG",
    "Released": "29 Jun 1990",
    "Runtime": "83 min",
    "Genre": "Comedy, Family, Fantasy",
    "Director": "Sidney Poitier",
    "Writer": "Brent Maddock (story), S.S. Wilson (story), Phil Alden Robinson (screenplay), Brent Maddock (screenplay), S.S. Wilson (screenplay)",
    "Actors": "Bill Cosby, Kimberly Russell, Denise Nicholas, Ian Bannen",
    "Plot": "Elliot Hopper is a widower with three children, he is currently working on a deal. It seems like his wife's illness was very costly and this deal could put them out of the red. However, he ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzUxYmZlNzctYjZlNy00YTQzLWFiM2UtY2UxOGY4MDYyMjExXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "4.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "7%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.3",
    "imdbVotes": "6,844",
    "imdbID": "tt0099654",
    "Type": "movie",
    "DVD": "15 Feb 2000",
    "BoxOffice": "N/A",
    "Production": "MCA Universal Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "77": {
    "Title": "Ghostbusters",
    "Year": "1984",
    "Rated": "PG",
    "Released": "08 Jun 1984",
    "Runtime": "105 min",
    "Genre": "Action, Comedy, Fantasy",
    "Director": "Ivan Reitman",
    "Writer": "Dan Aykroyd, Harold Ramis",
    "Actors": "Bill Murray, Dan Aykroyd, Sigourney Weaver, Harold Ramis",
    "Plot": "Three former parapsychology professors set up shop as a unique ghost removal service.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 6 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "7.8",
    "imdbVotes": "311,827",
    "imdbID": "tt0087332",
    "Type": "movie",
    "DVD": "29 Jun 1999",
    "BoxOffice": "N/A",
    "Production": "Columbia Pictures",
    "Website": "http://www.sonypictures.ca/english/movies/ghostbusters/",
    "Response": "True"
  },
  "78": {
    "Title": "Ghostbusters: Answer the Call",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "15 Jul 2016",
    "Runtime": "116 min",
    "Genre": "Action, Comedy, Fantasy",
    "Director": "Paul Feig",
    "Writer": "Katie Dippold, Paul Feig, Ivan Reitman (based on the 1984 film \"Ghostbusters\" directed by), Dan Aykroyd (based on the 1984 film \"Ghostbusters\" written by), Harold Ramis (based on the 1984 film \"Ghostbusters\" written by)",
    "Actors": "Zach Woods, Kristen Wiig, Ed Begley Jr., Charles Dance",
    "Plot": "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
    "Language": "English",
    "Country": "USA, Australia",
    "Awards": "5 wins & 24 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3OTM4NTM4NV5BMl5BanBnXkFtZTgwOTI3NDc0OTE@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "74%"
        },
        {
          "Source": "Metacritic",
          "Value": "60/100"
        }
    ],
    "Metascore": "60",
    "imdbRating": "5.3",
    "imdbVotes": "176,729",
    "imdbID": "tt1289401",
    "Type": "movie",
    "DVD": "11 Oct 2016",
    "BoxOffice": "$128,344,089",
    "Production": "Sony Pictures",
    "Website": "http://www.ghostbusters.com/",
    "Response": "True"
  },
  "79": {
    "Title": "Gladiator",
    "Year": "2000",
    "Rated": "R",
    "Released": "05 May 2000",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Ridley Scott",
    "Writer": "David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)",
    "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 5 Oscars. Another 53 wins & 101 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "8.5",
    "imdbVotes": "1,156,399",
    "imdbID": "tt0172495",
    "Type": "movie",
    "DVD": "21 Nov 2000",
    "BoxOffice": "N/A",
    "Production": "Dreamworks Distribution LLC",
    "Website": "http://www.gladiator-thefilm.com",
    "Response": "True"
  },
  "80": {
    "Title": "Godzilla",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "16 May 2014",
    "Runtime": "123 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Writer": "Max Borenstein (screenplay), Dave Callaham (story), Ishirô Honda (based on the character created by), Takeo Murata (based on the character created by), Shigeru Kayama (based on the character created by)",
    "Actors": "Aaron Taylor-Johnson, CJ Adams, Ken Watanabe, Bryan Cranston",
    "Plot": "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
    "Language": "English, Japanese",
    "Country": "USA, Japan",
    "Awards": "6 wins & 31 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2E4ZDgxN2YtZjExMS00MWE5LTg3NjQtNTkxMzJhOTA3MDQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.4",
    "imdbVotes": "336,788",
    "imdbID": "tt0831387",
    "Type": "movie",
    "DVD": "16 Sep 2014",
    "BoxOffice": "$172,962,996",
    "Production": "Warner Bros Pictures",
    "Website": "http://godzillamovie.com",
    "Response": "True"
  },
  "81": {
    "Title": "A Goofy Movie",
    "Year": "1995",
    "Rated": "G",
    "Released": "07 Apr 1995",
    "Runtime": "78 min",
    "Genre": "Animation, Adventure, Comedy, Family, Musical, Romance",
    "Director": "Kevin Lima",
    "Writer": "Jymn Magon (story), Jymn Magon (screenplay), Chris Matheson (screenplay), Brian Pimental (screenplay), Brian Pimental (story supervisor), Curtis Armstrong (additional written material), John Doolittle (additional written material)",
    "Actors": "Bill Farmer, Jason Marsden, Jim Cummings, Kellie Martin",
    "Plot": "When Max makes a preposterous promise to a girl he has a crush on, his chances to fulfilling it seem hopeless when he is dragged onto a cross-country trip with his embarrassing father, Goofy.",
    "Language": "English",
    "Country": "USA, Australia, France, Canada",
    "Awards": "5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDczYjU4MDMtY2RjMy00Y2UyLWE2MmMtZjliYWUwNzQ3YjExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "53%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.8",
    "imdbVotes": "39,294",
    "imdbID": "tt0113198",
    "Type": "movie",
    "DVD": "20 Jun 2000",
    "BoxOffice": "N/A",
    "Production": "The Walt Disney Company",
    "Website": "N/A",
    "Response": "True"
  },
  "82": {
    "Title": "Grease",
    "Year": "1978",
    "Rated": "PG-13",
    "Released": "16 Jun 1978",
    "Runtime": "110 min",
    "Genre": "Musical, Romance",
    "Director": "Randal Kleiser",
    "Writer": "Jim Jacobs (original musical), Warren Casey (original musical), Bronte Woodard (screenplay), Allan Carr (adaptation)",
    "Actors": "John Travolta, Olivia Newton-John, Stockard Channing, Jeff Conaway",
    "Plot": "Good girl Sandy and greaser Danny fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 3 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDYwMDBiYWUtMDU0YS00YzEzLWJhYTctNGU0MDhmMzI4NWUxXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "70/100"
      }
    ],
    "Metascore": "70",
    "imdbRating": "7.2",
    "imdbVotes": "198,901",
    "imdbID": "tt0077631",
    "Type": "movie",
    "DVD": "24 Sep 2002",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "83": {
    "Title": "The Great Mouse Detective",
    "Year": "1986",
    "Rated": "G",
    "Released": "02 Jul 1986",
    "Runtime": "74 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Ron Clements, Burny Mattinson, David Michener, John Musker",
    "Writer": "Peter Young (story adapted by), Vance Gerry (story adapted by), Steve Hulett (story adapted by), Ron Clements (story adapted by), John Musker (story adapted by), Bruce Morris (story adapted by), Matthew O'Callaghan (story adapted by), Burny Mattinson (story adapted by), David Michener (story adapted by), Mel Shaw (story adapted by), Eve Titus (based on \"Basil Of Baker Street\"), Paul Galdone (based on \"Basil Of Baker Street\")",
    "Actors": "Vincent Price, Barrie Ingham, Val Bettin, Susanne Pollatschek",
    "Plot": "Basil, the rodent Sherlock Holmes, investigates the kidnapping of a toy-maker and uncovers its link to his arch-enemy, Professor Ratigan.",
    "Language": "English, French, German, Italian",
    "Country": "USA",
    "Awards": "1 win & 3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDUzMTliZDYtMmRjZS00Zjk3LWIwZjEtZjc4N2NjYjdmY2FjXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.2",
    "imdbVotes": "38,615",
    "imdbID": "tt0091149",
    "Type": "movie",
    "DVD": "23 Jul 2002",
    "BoxOffice": "N/A",
    "Production": "Walt Disney Productions",
    "Website": "N/A",
    "Response": "True"
  },
  "84": {
    "Title": "The Greatest Showman",
    "Year": "2017",
    "Rated": "PG",
    "Released": "20 Dec 2017",
    "Runtime": "105 min",
    "Genre": "Biography, Drama, Musical",
    "Director": "Michael Gracey",
    "Writer": "Jenny Bicks (screenplay by), Bill Condon (screenplay by), Jenny Bicks (story by)",
    "Actors": "Hugh Jackman, Michelle Williams, Zac Efron, Zendaya",
    "Plot": "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "56%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "7.7",
    "imdbVotes": "156,491",
    "imdbID": "tt1485796",
    "Type": "movie",
    "DVD": "10 Apr 2018",
    "BoxOffice": "$164,616,443",
    "Production": "20th Century Fox",
    "Website": "http://www.foxmovies.com/movies/the-greatest-showman",
    "Response": "True"
  },
  "85": {
    "Title": "Guardians of the Galaxy",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "01 Aug 2014",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "James Gunn",
    "Writer": "James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 52 wins & 99 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "8.1",
    "imdbVotes": "871,949",
    "imdbID": "tt2015381",
    "Type": "movie",
    "DVD": "09 Dec 2014",
    "BoxOffice": "$270,592,504",
    "Production": "Walt Disney Pictures",
    "Website": "http://marvel.com/guardians",
    "Response": "True"
  },
  "86": {
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "83%"
        },
        {
          "Source": "Metacritic",
          "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.7",
    "imdbVotes": "408,619",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "22 Aug 2017",
    "BoxOffice": "$389,804,217",
    "Production": "Walt Disney Pictures",
    "Website": "https://marvel.com/guardians",
    "Response": "True"
  },
  "87": {
    "Title": "Hairspray",
    "Year": "2007",
    "Rated": "PG",
    "Released": "20 Jul 2007",
    "Runtime": "117 min",
    "Genre": "Comedy, Drama, Music",
    "Director": "Adam Shankman",
    "Writer": "Leslie Dixon (screenplay), John Waters, Mark O'Donnell (musical play), Thomas Meehan (musical play)",
    "Actors": "John Travolta, Michelle Pfeiffer, Christopher Walken, Amanda Bynes",
    "Plot": "Pleasantly plump teenager Tracy Turnblad teaches 1962 Baltimore a thing or two about integration after landing a spot on a local TV dance show.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Nominated for 3 Golden Globes. Another 21 wins & 40 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmFhMzFkZTMtNmUxNS00OWQ1LTlhNjMtYzhmNTU4NmUzZDQwXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "6.7",
    "imdbVotes": "108,301",
    "imdbID": "tt0427327",
    "Type": "movie",
    "DVD": "20 Nov 2007",
    "BoxOffice": "$118,823,091",
    "Production": "New Line Cinema",
    "Website": "http://www.hairspraymovie.com/",
    "Response": "True"
  },
  "88": {
    "Title": "Hancock",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 Jul 2008",
    "Runtime": "92 min",
    "Genre": "Action, Drama, Fantasy",
    "Director": "Peter Berg",
    "Writer": "Vincent Ngo, Vince Gilligan",
    "Actors": "Will Smith, Charlize Theron, Jason Bateman, Jae Head",
    "Plot": "Hancock is a superhero whose ill considered behavior regularly causes damage in the millions. He changes when the person he saves helps him improve his public image.",
    "Language": "English, Japanese",
    "Country": "USA",
    "Awards": "4 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "41%"
      },
      {
        "Source": "Metacritic",
        "Value": "49/100"
      }
    ],
    "Metascore": "49",
    "imdbRating": "6.4",
    "imdbVotes": "395,669",
    "imdbID": "tt0448157",
    "Type": "movie",
    "DVD": "25 Nov 2008",
    "BoxOffice": "$227,946,274",
    "Production": "Columbia Pictures",
    "Website": "http://www.sonypictures.com/movies/hancock/",
    "Response": "True"
  },
  "89": {
    "Title": "Happiness Is a Warm Blanket, Charlie Brown",
    "Year": "2011",
    "Rated": "TV-G",
    "Released": "29 Mar 2011",
    "Runtime": "46 min",
    "Genre": "Animation, Comedy, Family",
    "Director": "Andrew Beall, Frank Molieri",
    "Writer": "Charles M. Schulz (based on the comic strip created by), Craig Schulz, Stephan Pastis",
    "Actors": "Austin Lux, Amanda Pace, Trenton Rogers, Grace Rolek",
    "Plot": "Linus is pushed to his limits when he learns Grandma is coming to visit and plans on ridding him of his childish security blanket.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win.",
    "Poster": "https://ia.media-imdb.com/images/M/MV5BOTE5NzU5Nzg0N15BMl5BanBnXkFtZTcwNjIxNzk3NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "991",
    "imdbID": "tt1810633",
    "Type": "movie",
    "DVD": "26 Apr 2011",
    "BoxOffice": "N/A",
    "Production": "WARNER BROTHERS PICTURES",
    "Website": "N/A",
    "Response": "True"
  },
  "90": {
    "Title": "Harry Potter and the Chamber of Secrets",
    "Year": "2002",
    "Rated": "PG",
    "Released": "15 Nov 2002",
    "Runtime": "161 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Chris Columbus",
    "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
    "Actors": "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths",
    "Plot": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
    "Language": "English",
    "Country": "UK, USA, Germany",
    "Awards": "Nominated for 3 BAFTA Film Awards. Another 11 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "7.4",
    "imdbVotes": "465,118",
    "imdbID": "tt0295297",
    "Type": "movie",
    "DVD": "11 Apr 2003",
    "BoxOffice": "$261,835,892",
    "Production": "Warner Bros. Pictures",
    "Website": "http://harrypotter.warnerbros.com/",
    "Response": "True"
  },
  "91": {
    "Title": "Harry Potter and the Deathly Hallows: Part 1",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "19 Nov 2010",
    "Runtime": "146 min",
    "Genre": "Adventure, Family, Fantasy, Mystery",
    "Director": "David Yates",
    "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
    "Actors": "Bill Nighy, Emma Watson, Richard Griffiths, Harry Melling",
    "Plot": "As Harry races against time and evil to destroy the Horcruxes, he uncovers the existence of three most powerful objects in the wizarding world: the Deathly Hallows.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 2 Oscars. Another 15 wins & 53 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "7.7",
    "imdbVotes": "399,729",
    "imdbID": "tt0926084",
    "Type": "movie",
    "DVD": "15 Apr 2011",
    "BoxOffice": "$294,980,434",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.HarryPotter.com/",
    "Response": "True"
  },
  "92": {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
    "Actors": "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": "87",
    "imdbRating": "8.1",
    "imdbVotes": "659,643",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,000,185",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.HarryPotter.com/",
    "Response": "True"
  },
  "93": {
    "Title": "Harry Potter and the Goblet of Fire",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "18 Nov 2005",
    "Runtime": "157 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Mike Newell",
    "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
    "Actors": "Eric Sykes, Timothy Spall, David Tennant, Daniel Radcliffe",
    "Plot": "A young wizard finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    "Language": "English, French",
    "Country": "UK, USA",
    "Awards": "Nominated for 1 Oscar. Another 13 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.7",
    "imdbVotes": "461,268",
    "imdbID": "tt0330373",
    "Type": "movie",
    "DVD": "07 Mar 2006",
    "BoxOffice": "$289,994,397",
    "Production": "Warner Bros. Pictures",
    "Website": "http://harrypotter.warnerbros.com/gobletoffire/",
    "Response": "True"
  },
  "94": {
    "Title": "Harry Potter and the Half-Blood Prince",
    "Year": "2009",
    "Rated": "PG",
    "Released": "15 Jul 2009",
    "Runtime": "153 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
    "Actors": "Daniel Radcliffe, Michael Gambon, Dave Legeno, Elarica Johnson",
    "Plot": "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort's dark past.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 1 Oscar. Another 8 wins & 35 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "78/100"
      }
    ],
    "Metascore": "78",
    "imdbRating": "7.6",
    "imdbVotes": "388,258",
    "imdbID": "tt0417741",
    "Type": "movie",
    "DVD": "08 Dec 2009",
    "BoxOffice": "$301,920,409",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.harrypotter.com/",
    "Response": "True"
  },
  "95": {
    "Title": "Harry Potter and the Order of the Phoenix",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "11 Jul 2007",
    "Runtime": "138 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Michael Goldenberg (screenplay), J.K. Rowling (novel)",
    "Actors": "Daniel Radcliffe, Harry Melling, Jason Boyd, Richard Macklin",
    "Plot": "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 2 BAFTA Film Awards. Another 14 wins & 40 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "7.5",
    "imdbVotes": "426,066",
    "imdbID": "tt0373889",
    "Type": "movie",
    "DVD": "11 Nov 2007",
    "BoxOffice": "$291,980,108",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.harrypotterorderofthephoenix.com/",
    "Response": "True"
  },
  "96": {
    "Title": "Harry Potter and the Sorcerer's Stone",
    "Year": "2001",
    "Rated": "PG",
    "Released": "16 Nov 2001",
    "Runtime": "152 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Chris Columbus",
    "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
    "Actors": "Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
    "Plot": "An orphaned boy enrolled in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 3 Oscars. Another 17 wins & 62 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
        },
        {
          "Source": "Metacritic",
          "Value": "64/100"
        }
    ],
    "Metascore": "64",
    "imdbRating": "7.6",
    "imdbVotes": "538,048",
    "imdbID": "tt0241527",
    "Type": "movie",
    "DVD": "28 May 2002",
    "BoxOffice": "$317,557,891",
    "Production": "Warner Bros. Pictures",
    "Website": "http://movies.warnerbros.com/awards/harry.html",
    "Response": "True"
  },
  "97": {
    "Title": "Harry Potter and the Prisoner of Azkaban",
    "Year": "2004",
    "Rated": "PG",
    "Released": "04 Jun 2004",
    "Runtime": "142 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Alfonso Cuarón",
    "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
    "Actors": "Daniel Radcliffe, Richard Griffiths, Pam Ferris, Fiona Shaw",
    "Plot": "It's Harry's third year at Hogwarts; not only does he have a new \"Defense Against the Dark Arts\" teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 2 Oscars. Another 14 wins & 45 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "7.9",
    "imdbVotes": "460,969",
    "imdbID": "tt0304141",
    "Type": "movie",
    "DVD": "22 Nov 2004",
    "BoxOffice": "$249,358,727",
    "Production": "Warner Bros. Pictures",
    "Website": "http://azkaban.warnerbros.com/",
    "Response": "True"
  },
  "98": {
    "Title": "Hercules",
    "Year": "1997",
    "Rated": "G",
    "Released": "27 Jun 1997",
    "Runtime": "93 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Ron Clements, John Musker",
    "Writer": "Ron Clements (animation screenplay by), John Musker (animation screenplay by), Don McEnery (animation screenplay by), Bob Shaw (animation screenplay by), Irene Mecchi (animation screenplay by), Kaan Kalyon (story), Kelly Wightman (story), Randy Cartwright (story), John Ramirez (story), Jeff Snow (story), Vance Gerry (story), Kirk Hanson (story), Tamara Lusher Stocker (story), Francis Glebas (story), Mark Kennedy (story), Bruce Morris (story), Don Dougherty (story), Thom Enriquez (story)",
    "Actors": "Tate Donovan, Josh Keaton, Roger Bart, Danny DeVito",
    "Plot": "The son of the Greek Gods Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.",
    "Language": "English, Spanish, Greek",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 9 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDcwYjEyNWItMGI1Mi00MjI1LWIyMDEtMTQ4YjhkNjM4NDU3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "7.3",
    "imdbVotes": "172,658",
    "imdbID": "tt0119282",
    "Type": "movie",
    "DVD": "09 Nov 1999",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Internationa",
    "Website": "N/A",
    "Response": "True"
  },
  "99": {
    "Title": "Here Comes the Boom",
    "Year": "2012",
    "Rated": "PG",
    "Released": "12 Oct 2012",
    "Runtime": "105 min",
    "Genre": "Action, Comedy, Sport",
    "Director": "Frank Coraci",
    "Writer": "Allan Loeb, Kevin James",
    "Actors": "Kevin James, Salma Hayek, Henry Winkler, Greg Germann",
    "Plot": "A high school biology teacher looks to become a successful mixed-martial arts fighter in an effort to raise money to prevent extra-curricular activities from being axed at his cash-strapped school.",
    "Language": "English, Dutch",
    "Country": "USA",
    "Awards": "3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzEzNDQ0Nl5BMl5BanBnXkFtZTcwMDI2NTY1OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "39%"
      },
      {
        "Source": "Metacritic",
        "Value": "40/100"
      }
    ],
    "Metascore": "40",
    "imdbRating": "6.4",
    "imdbVotes": "80,346",
    "imdbID": "tt1648179",
    "Type": "movie",
    "DVD": "05 Feb 2013",
    "BoxOffice": "$45,274,251",
    "Production": "Sony/Columbia Pictures",
    "Website": "http://boom-movie.com/",
    "Response": "True"
  },
  "100": {
    "Title": "The Hobbit: An Unexpected Journey",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "14 Dec 2012",
    "Runtime": "169 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), Guillermo del Toro (screenplay), J.R.R. Tolkien (novel)",
    "Actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
    "Plot": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
    "Language": "English",
    "Country": "USA, New Zealand",
    "Awards": "Nominated for 3 Oscars. Another 10 wins & 72 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "7.9",
    "imdbVotes": "702,417",
    "imdbID": "tt0903624",
    "Type": "movie",
    "DVD": "19 Mar 2013",
    "BoxOffice": "$303,001,229",
    "Production": "Warner Bros.",
    "Website": "http://www.thehobbit.com/index.html",
    "Response": "True"
  },
  "101": {
    "Title": "The Hobbit: The Battle of the Five Armies",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "17 Dec 2014",
    "Runtime": "144 min",
    "Genre": "Adventure, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), Guillermo del Toro (screenplay), J.R.R. Tolkien (novel)",
    "Actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
    "Plot": "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
    "Language": "English",
    "Country": "New Zealand, USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 51 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODAzMDgxMDc1MF5BMl5BanBnXkFtZTgwMTI0OTAzMjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "59%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "7.4",
    "imdbVotes": "421,503",
    "imdbID": "tt2310332",
    "Type": "movie",
    "DVD": "24 Mar 2015",
    "BoxOffice": "$187,747,747",
    "Production": "Warner Bros.",
    "Website": "http://www.thehobbit.com/",
    "Response": "True"
  },
  "102": {
    "Title": "The Hobbit: The Desolation of Smaug",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "13 Dec 2013",
    "Runtime": "161 min",
    "Genre": "Adventure, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), Guillermo del Toro (screenplay), J.R.R. Tolkien (novel)",
    "Actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
    "Plot": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
    "Language": "English",
    "Country": "USA, New Zealand",
    "Awards": "Nominated for 3 Oscars. Another 16 wins & 86 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "75%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.9",
    "imdbVotes": "547,830",
    "imdbID": "tt1170358",
    "Type": "movie",
    "DVD": "08 Apr 2014",
    "BoxOffice": "$180,443,783",
    "Production": "Warner Bros.",
    "Website": "http://www.thehobbit.com/index.html",
    "Response": "True"
  },
  "103": {
    "Title": "Home on the Range",
    "Year": "2004",
    "Rated": "PG",
    "Released": "02 Apr 2004",
    "Runtime": "76 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Will Finn, John Sanford",
    "Writer": "Will Finn, John Sanford, Will Finn (story), John Sanford (story), Michael LaBash (story), Sam Levine (story), Mark Kennedy (story), Robert Lence (story), Keith Baxter (additional story), Mike Kunkel (additional story), Jason Lethcoe (additional story), Donnie Long (additional story), Shirley Pierce, Brian Pimental (additional story), David Moses Pimentel (additional story), Ralph Zondag (additional story), Davy Liu (additional story)",
    "Actors": "G.W. Bailey, Roseanne Barr, Bobby Block, Steve Buscemi",
    "Plot": "To save their farm, the resident animals go bounty hunting for a notorious outlaw.",
    "Language": "English, Mandarin",
    "Country": "USA",
    "Awards": "5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWIyNWEwZDctMzkzNC00NzkyLTk5YWUtOWQ5MzBhMGE1NTE4XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "54%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "5.4",
    "imdbVotes": "16,649",
    "imdbID": "tt0299172",
    "Type": "movie",
    "DVD": "14 Sep 2004",
    "BoxOffice": "$49,887,802",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.go.com/disneypictures/homeontherange/main.html",
    "Response": "True"
  },
  "104": {
    "Title": "Hook",
    "Year": "1991",
    "Rated": "PG",
    "Released": "11 Dec 1991",
    "Runtime": "142 min",
    "Genre": "Adventure, Comedy, Family, Fantasy",
    "Director": "Steven Spielberg",
    "Writer": "J.M. Barrie (books), J.M. Barrie (play), James V. Hart (screen story), Nick Castle (screen story), James V. Hart (screenplay), Malia Scotch Marmo (screenplay)",
    "Actors": "Dustin Hoffman, Robin Williams, Julia Roberts, Bob Hoskins",
    "Plot": "When Captain Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 5 Oscars. Another 5 wins & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "28%"
      },
      {
        "Source": "Metacritic",
        "Value": "52/100"
      }
    ],
    "Metascore": "52",
    "imdbRating": "6.7",
    "imdbVotes": "206,574",
    "imdbID": "tt0102057",
    "Type": "movie",
    "DVD": "21 Mar 2000",
    "BoxOffice": "N/A",
    "Production": "TriStar Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "105": {
    "Title": "Horton Hears a Who!",
    "Year": "2008",
    "Rated": "G",
    "Released": "14 Mar 2008",
    "Runtime": "86 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Jimmy Hayward, Steve Martino",
    "Writer": "Cinco Paul (screenplay by), Ken Daurio (screenplay by), Dr. Seuss (based upon the book by)",
    "Actors": "Jim Carrey, Steve Carell, Carol Burnett, Will Arnett",
    "Plot": "Horton the Elephant struggles to protect a microscopic community from his neighbors who refuse to believe it exists.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 18 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzk5YzhjODYtZDc3Mi00OTYyLWIyYzAtMzZjYTljYTYzODM1XkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "6.8",
    "imdbVotes": "117,751",
    "imdbID": "tt0451079",
    "Type": "movie",
    "DVD": "09 Dec 2008",
    "BoxOffice": "$154,388,002",
    "Production": "20th Century Fox",
    "Website": "http://www.hortonmovie.com/site/index.html",
    "Response": "True"
  },
  "106": {
    "Title": "Hot Pursuit",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "08 May 2015",
    "Runtime": "87 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Anne Fletcher",
    "Writer": "David Feeney, John Quaintance",
    "Actors": "Reese Witherspoon, Sofía Vergara, Matthew Del Negro, Michael Mosley",
    "Plot": "An uptight and by-the-book cop tries to protect the outgoing widow of a drug boss as they race through Texas pursued by crooked cops and murderous gunmen.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzc0MDk0NDMwM15BMl5BanBnXkFtZTgwNTIzMjE1NTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "7%"
      },
      {
        "Source": "Metacritic",
        "Value": "31/100"
      }
    ],
    "Metascore": "31",
    "imdbRating": "5.1",
    "imdbVotes": "43,240",
    "imdbID": "tt2967224",
    "Type": "movie",
    "DVD": "11 Aug 2015",
    "BoxOffice": "$26,863,875",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.facebook.com/HotPursuitMovie",
    "Response": "True"
  },
  "107": {
    "Title": "Hotel Transylvania",
    "Year": "2012",
    "Rated": "PG",
    "Released": "28 Sep 2012",
    "Runtime": "91 min",
    "Genre": "Animation, Comedy, Family",
    "Director": "Genndy Tartakovsky",
    "Writer": "Peter Baynham (screenplay by), Robert Smigel (screenplay by), Todd Durham (story by), Dan Hageman (story by), Kevin Hageman (story by)",
    "Actors": "Adam Sandler, Andy Samberg, Selena Gomez, Kevin James",
    "Plot": "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 2 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "44%"
      },
      {
        "Source": "Metacritic",
        "Value": "47/100"
      }
    ],
    "Metascore": "47",
    "imdbRating": "7.1",
    "imdbVotes": "195,132",
    "imdbID": "tt0837562",
    "Type": "movie",
    "DVD": "29 Jan 2013",
    "BoxOffice": "$148,280,635",
    "Production": "Sony Pictures",
    "Website": "http://www.welcometohotelt.com/",
    "Response": "True"
  },
  "108": {
    "Title": "How to Lose a Guy in 10 Days",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "07 Feb 2003",
    "Runtime": "116 min",
    "Genre": "Comedy, Romance",
    "Director": "Donald Petrie",
    "Writer": "Michele Alexander (book), Jeannie Long (book), Kristen Buckley (screenplay), Brian Regan (screenplay), Burr Steers (screenplay)",
    "Actors": "Kate Hudson, Matthew McConaughey, Kathryn Hahn, Annie Parisse",
    "Plot": "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days. Andie Anderson covers the \"How To\" beat for \"Composure\" magazine and is assigned to write an article on \"How to Lose a Guy in 10 days.\" They meet in a bar shortly after the bet is made.",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "1 win & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "42%"
      },
      {
        "Source": "Metacritic",
        "Value": "45/100"
      }
    ],
    "Metascore": "45",
    "imdbRating": "6.4",
    "imdbVotes": "182,101",
    "imdbID": "tt0251127",
    "Type": "movie",
    "DVD": "01 Jul 2003",
    "BoxOffice": "$105,765,605",
    "Production": "Paramount Pictures",
    "Website": "http://www.howtoloseaguymovie.com/",
    "Response": "True"
  },
  "109": {
    "Title": "How to Train Your Dragon",
    "Year": "2010",
    "Rated": "PG",
    "Released": "26 Mar 2010",
    "Runtime": "98 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Dean DeBlois, Chris Sanders",
    "Writer": "William Davies (screenplay by), Dean DeBlois (screenplay by), Chris Sanders (screenplay by), Cressida Cowell (based on the book by)",
    "Actors": "Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera",
    "Plot": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 25 wins & 60 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "98%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "8.1",
    "imdbVotes": "578,657",
    "imdbID": "tt0892769",
    "Type": "movie",
    "DVD": "15 Oct 2010",
    "BoxOffice": "$216,900,000",
    "Production": "Paramount/DWA",
    "Website": "http://www.HowToTrainYourDragon.com/",
    "Response": "True"
  },
  "110": {
    "Title": "How to Train Your Dragon 2",
    "Year": "2014",
    "Rated": "PG",
    "Released": "13 Jun 2014",
    "Runtime": "102 min",
    "Genre": "Animation, Action, Adventure, Comedy, Family, Fantasy",
    "Director": "Dean DeBlois",
    "Writer": "Dean DeBlois, Cressida Cowell (based upon the \"How to Train Your Dragon\" book series by)",
    "Actors": "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
    "Plot": "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 14 wins & 60 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "7.8",
    "imdbVotes": "259,131",
    "imdbID": "tt1646971",
    "Type": "movie",
    "DVD": "11 Nov 2014",
    "BoxOffice": "$147,065,544",
    "Production": "20th Century Fox",
    "Website": "http://www.howtotrainyourdragon.com",
    "Response": "True"
  },
  "111": {
    "Title": "The Hunchback of Notre Dame",
    "Year": "1996",
    "Rated": "G",
    "Released": "21 Jun 1996",
    "Runtime": "91 min",
    "Genre": "Animation, Drama, Family",
    "Director": "Gary Trousdale, Kirk Wise",
    "Writer": "Tab Murphy (animation story by), Victor Hugo (from the novel \"Notre Dame de Paris\" by), Tab Murphy (animation screenplay by), Irene Mecchi (animation screenplay by), Bob Tzudiker (animation screenplay by), Noni White (animation screenplay by), Jonathan Roberts (animation screenplay by), Kevin Harkey (story), Gaëtan Brizzi (story), Paul Brizzi (story), Ed Gombert (story), Brenda Chapman (story), Jeff Snow (story), Jim Capobianco (story), Denis Rich (story), Burny Mattinson (story), John Sanford (story), Kelly Wightman (story), James Fujii (story), Geefwee Boedoe (story), Floyd Norman (story), Francis Glebas (story), Kirk Hanson (story), Christine Blum (story), Sue C. Nichols (story), Will Finn (additional screenplay material by)",
    "Actors": "Jason Alexander, Mary Kay Bergman, Corey Burton, Jim Cummings",
    "Plot": "A deformed bell-ringer must assert his independence from a vicious government minister in order to help his friend, a gypsy dancer.",
    "Language": "English, Latin",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 8 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzMxMDc4OGItODBiZi00NjYyLThiMzctMzQwZjgzYWE0MzQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.9",
    "imdbVotes": "121,225",
    "imdbID": "tt0116583",
    "Type": "movie",
    "DVD": "16 Dec 1997",
    "BoxOffice": "N/A",
    "Production": "Walt Disney Feature Animation",
    "Website": "N/A",
    "Response": "True"
  },
  "112": {
    "Title": "The Hunger Games",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "23 Mar 2012",
    "Runtime": "142 min",
    "Genre": "Adventure, Sci-Fi, Thriller",
    "Director": "Gary Ross",
    "Writer": "Gary Ross (screenplay), Suzanne Collins (screenplay), Billy Ray (screenplay), Suzanne Collins (novel)",
    "Actors": "Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields",
    "Plot": "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 33 wins & 47 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.2",
    "imdbVotes": "775,502",
    "imdbID": "tt1392170",
    "Type": "movie",
    "DVD": "18 Aug 2012",
    "BoxOffice": "$407,981,652",
    "Production": "Lionsgate",
    "Website": "http://thehungergamesmovie.com",
    "Response": "True"
  },
  "113": {
    "Title": "The Hunger Games: Catching Fire",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "22 Nov 2013",
    "Runtime": "146 min",
    "Genre": "Action, Adventure, Mystery",
    "Director": "Francis Lawrence",
    "Writer": "Simon Beaufoy (screenplay), Michael Arndt (screenplay), Suzanne Collins (novel)",
    "Actors": "Jennifer Lawrence, Liam Hemsworth, Jack Quaid, Taylor St. Clair",
    "Plot": "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 22 wins & 66 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "7.5",
    "imdbVotes": "557,754",
    "imdbID": "tt1951264",
    "Type": "movie",
    "DVD": "07 Mar 2014",
    "BoxOffice": "$336,663,349",
    "Production": "Lionsgate Films",
    "Website": "http://www.thehungergamesexplorer.com/us/",
    "Response": "True"
  },
  "114": {
    "Title": "The Hunger Games: Mockingjay - Part 1",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "21 Nov 2014",
    "Runtime": "123 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Peter Craig (screenplay), Danny Strong (screenplay), Suzanne Collins (adaptation), Suzanne Collins (novel)",
    "Actors": "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson",
    "Plot": "Katniss Everdeen is in District 13 after she shatters the games forever. Under the leadership of President Coin and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta and a nation moved by her courage.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 21 wins & 31 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "6.7",
    "imdbVotes": "362,634",
    "imdbID": "tt1951265",
    "Type": "movie",
    "DVD": "06 Mar 2015",
    "BoxOffice": "$295,457,212",
    "Production": "Lionsgate Films",
    "Website": "http://www.facebook.com/thehungergamesmovie",
    "Response": "True"
  },
  "115": {
    "Title": "The Hunger Games: Mockingjay - Part 2",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "20 Nov 2015",
    "Runtime": "137 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Peter Craig (screenplay), Danny Strong (screenplay), Suzanne Collins (adaptation), Suzanne Collins (novel)",
    "Actors": "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson",
    "Plot": "Katniss and a team of rebels from District 13 prepare for the final battle that will decide the future of Panem.",
    "Language": "English",
    "Country": "Germany, USA",
    "Awards": "17 wins & 34 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "6.5",
    "imdbVotes": "236,239",
    "imdbID": "tt1951266",
    "Type": "movie",
    "DVD": "22 Mar 2016",
    "BoxOffice": "$254,641,329",
    "Production": "Lionsgate Films",
    "Website": "http://www.thehungergames.movie/",
    "Response": "True"
  },
  "116": {
    "Title": "I Am Legend",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "14 Dec 2007",
    "Runtime": "101 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
    "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    "Language": "English",
    "Country": "USA",
    "Awards": "9 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "69%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "7.2",
    "imdbVotes": "609,895",
    "imdbID": "tt0480249",
    "Type": "movie",
    "DVD": "18 Mar 2008",
    "BoxOffice": "$256,399,999",
    "Production": "Warner Bros. Pictures",
    "Website": "http://iamlegend.warnerbros.com/",
    "Response": "True"
  },
  "117": {
    "Title": "Ice Age",
    "Year": "2002",
    "Rated": "PG",
    "Released": "15 Mar 2002",
    "Runtime": "81 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Chris Wedge, Carlos Saldanha(co-director)",
    "Writer": "Michael J. Wilson (story), Michael Berg (screenplay), Michael J. Wilson (screenplay), Peter Ackerman (screenplay), James Bresnahan (additional story), Doug Compton (additional story), Jeff Siergey (additional story), Mike Thurmeier (additional story), Galen T. Chu (additional story), Xeth Feinberg (additional story)",
    "Actors": "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
    "Plot": "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 5 wins & 29 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "7.5",
    "imdbVotes": "380,901",
    "imdbID": "tt0268380",
    "Type": "movie",
    "DVD": "26 Nov 2002",
    "BoxOffice": "$176,400,000",
    "Production": "20th Century Fox",
    "Website": "http://www.iceagemovie.com",
    "Response": "True"
  },
  "118": {
    "Title": "Ice Age: Collision Course",
    "Year": "2016",
    "Rated": "PG",
    "Released": "22 Jul 2016",
    "Runtime": "94 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Mike Thurmeier, Galen T. Chu(co-director)",
    "Writer": "Michael J. Wilson (screenplay), Michael Berg (screenplay), Yoni Brenner (screenplay), Aubrey Solomon (story)",
    "Actors": "Stephanie Beatriz, Robert Cardone, Neil deGrasse Tyson, Adam Devine",
    "Plot": "Manny, Diego, and Sid join up with Buck to fend off a meteor strike that would destroy the world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzFjYWM5NzgtMGIwMi00MmE3LWE3NTgtNmIwMmRkNmFmYzJkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "17%"
      },
      {
        "Source": "Metacritic",
        "Value": "34/100"
      }
    ],
    "Metascore": "34",
    "imdbRating": "5.7",
    "imdbVotes": "44,726",
    "imdbID": "tt3416828",
    "Type": "movie",
    "DVD": "11 Oct 2016",
    "BoxOffice": "$64,060,187",
    "Production": "20th Century Fox",
    "Website": "https://www.facebook.com/iceage",
    "Response": "True"
  },
  "119": {
    "Title": "Ice Age: Continental Drift",
    "Year": "2012",
    "Rated": "PG",
    "Released": "13 Jul 2012",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Steve Martino, Mike Thurmeier",
    "Writer": "Michael Berg (screenplay), Jason Fuchs (screenplay), Michael Berg (story), Lori Forte (story)",
    "Actors": "Aziz Ansari, Joy Behar, Christopher Campbell, Alain Chabat",
    "Plot": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "38%"
      },
      {
        "Source": "Metacritic",
        "Value": "49/100"
      }
    ],
    "Metascore": "49",
    "imdbRating": "6.6",
    "imdbVotes": "167,481",
    "imdbID": "tt1667889",
    "Type": "movie",
    "DVD": "11 Dec 2012",
    "BoxOffice": "$161,317,423",
    "Production": "20th Century Fox",
    "Website": "http://www.iceagemovie.com/",
    "Response": "True"
  },
  "120": {
    "Title": "Ice Age: Dawn of the Dinosaurs",
    "Year": "2009",
    "Rated": "PG",
    "Released": "01 Jul 2009",
    "Runtime": "94 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Carlos Saldanha, Mike Thurmeier(co-director)",
    "Writer": "Peter Ackerman (screenplay), Michael Berg (screenplay), Yoni Brenner (screenplay), Jason Carter Eaton (story), Mike Reiss (screenplay)",
    "Actors": "Eunice Cho, Karen Disher, Harrison Fahn, Maile Flanagan",
    "Plot": "When Sid's attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 wins & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "46%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.0",
    "imdbVotes": "193,180",
    "imdbID": "tt1080016",
    "Type": "movie",
    "DVD": "27 Oct 2009",
    "BoxOffice": "$124,605,432",
    "Production": "20th Century Fox/Emerging Pictures",
    "Website": "http://www.iceagemovie.com/",
    "Response": "True"
  },
  "121": {
    "Title": "Ice Age: The Meltdown",
    "Year": "2006",
    "Rated": "PG",
    "Released": "31 Mar 2006",
    "Runtime": "91 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Carlos Saldanha",
    "Writer": "Peter Gaulke (screenplay), Gerry Swallow (screenplay), Jim Hecht (screenplay), Peter Gaulke (story), Gerry Swallow (story)",
    "Actors": "Ray Romano, John Leguizamo, Denis Leary, Seann William Scott",
    "Plot": "Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths.",
    "Language": "English",
    "Country": "USA",
    "Awards": "7 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.8",
    "imdbVotes": "224,524",
    "imdbID": "tt0438097",
    "Type": "movie",
    "DVD": "21 Nov 2006",
    "BoxOffice": "$195,300,000",
    "Production": "20th Century Fox",
    "Website": "http://www.iceagemovie.com/",
    "Response": "True"
  },
  "122": {
    "Title": "The Imitation Game",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "25 Dec 2014",
    "Runtime": "114 min",
    "Genre": "Biography, Drama, Thriller",
    "Director": "Morten Tyldum",
    "Writer": "Graham Moore, Andrew Hodges (book)",
    "Actors": "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
    "Plot": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
    "Language": "English, German",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 46 wins & 155 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "8.0",
    "imdbVotes": "587,179",
    "imdbID": "tt2084970",
    "Type": "movie",
    "DVD": "31 Mar 2015",
    "BoxOffice": "N/A",
    "Production": "The Weinstein Company",
    "Website": "http://theimitationgamemovie.com/",
    "Response": "True"
  },
  "123": {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 152 wins & 204 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,745,967",
    "imdbID": "tt1375666",
    "Type": "movie",
    "DVD": "07 Dec 2010",
    "BoxOffice": "$292,568,851",
    "Production": "Warner Bros. Pictures",
    "Website": "http://inceptionmovie.warnerbros.com/",
    "Response": "True"
  },
  "124": {
    "Title": "The Incredibles",
    "Year": "2004",
    "Rated": "PG",
    "Released": "05 Nov 2004",
    "Runtime": "115 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Brad Bird",
    "Writer": "Brad Bird",
    "Actors": "Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee",
    "Plot": "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 65 wins & 55 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Metacritic",
        "Value": "90/100"
      }
    ],
    "Metascore": "90",
    "imdbRating": "8.0",
    "imdbVotes": "565,980",
    "imdbID": "tt0317705",
    "Type": "movie",
    "DVD": "29 Mar 2005",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  "125": {
    "Title": "Independence Day",
    "Year": "1996",
    "Rated": "PG-13",
    "Released": "03 Jul 1996",
    "Runtime": "145 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Roland Emmerich",
    "Writer": "Dean Devlin, Roland Emmerich",
    "Actors": "Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",
    "Plot": "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 34 wins & 34 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "63%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "7.0",
    "imdbVotes": "481,327",
    "imdbID": "tt0116629",
    "Type": "movie",
    "DVD": "27 Jun 2000",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.foxhome.com/id4dvd/html/index_flash.html",
    "Response": "True"
  },
  "126": {
    "Title": "Indiana Jones and the Last Crusade",
    "Year": "1989",
    "Rated": "PG-13",
    "Released": "24 May 1989",
    "Runtime": "127 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Steven Spielberg",
    "Writer": "Jeffrey Boam (screenplay), George Lucas (story), Menno Meyjes (story), George Lucas (characters), Philip Kaufman (characters)",
    "Actors": "Harrison Ford, Sean Connery, Denholm Elliott, Alison Doody",
    "Plot": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against Adolf Hitler's Nazis again to stop them obtaining its powers.",
    "Language": "English, German, Greek, Arabic",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 6 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "8.3",
    "imdbVotes": "607,252",
    "imdbID": "tt0097576",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://www.indianajones.com/",
    "Response": "True"
  },
  "127": {
    "Title": "Raiders of the Lost Ark",
    "Year": "1981",
    "Rated": "PG",
    "Released": "12 Jun 1981",
    "Runtime": "115 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Lawrence Kasdan (screenplay by), George Lucas (story by), Philip Kaufman (story by)",
    "Actors": "Harrison Ford, Karen Allen, Paul Freeman, Ronald Lacey",
    "Plot": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    "Language": "English, German, Hebrew, Spanish, Arabic, Nepali",
    "Country": "USA",
    "Awards": "Won 4 Oscars. Another 30 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "95%"
        },
        {
          "Source": "Metacritic",
          "Value": "85/100"
        }
    ],
    "Metascore": "85",
    "imdbRating": "8.5",
    "imdbVotes": "771,724",
    "imdbID": "tt0082971",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://www.indianajones.com/raiders/",
    "Response": "True"
  },
  "128": {
    "Title": "Indiana Jones and the Temple of Doom",
    "Year": "1984",
    "Rated": "PG",
    "Released": "23 May 1984",
    "Runtime": "118 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Willard Huyck (screenplay by), Gloria Katz (screenplay by), George Lucas (story by)",
    "Actors": "Harrison Ford, Kate Capshaw, Jonathan Ke Quan, Amrish Puri",
    "Plot": "In 1935, Indiana Jones arrives in India, still part of the British Empire, and is asked to find a mystical stone. He then stumbles upon a secret cult committing enslavement and human sacrifices in the catacombs of an ancient palace.",
    "Language": "English, Sinhalese",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 8 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.6",
    "imdbVotes": "386,272",
    "imdbID": "tt0087469",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://www.indianajones.com/",
    "Response": "True"
  },
  "129": {
    "Title": "Inside Out",
    "Year": "2015",
    "Rated": "PG",
    "Released": "19 Jun 2015",
    "Runtime": "95 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Pete Docter, Ronnie Del Carmen(co-director)",
    "Writer": "Pete Docter (original story by), Ronnie Del Carmen (original story by), Pete Docter (screenplay by), Meg LeFauve (screenplay by), Josh Cooley (screenplay by), Michael Arndt (additional story material by), Simon Rich (additional story material by), Bill Hader (additional dialogue by), Amy Poehler (additional dialogue by)",
    "Actors": "Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader",
    "Plot": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 93 wins & 112 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "98%"
      },
      {
        "Source": "Metacritic",
        "Value": "94/100"
      }
    ],
    "Metascore": "94",
    "imdbRating": "8.2",
    "imdbVotes": "500,417",
    "imdbID": "tt2096673",
    "Type": "movie",
    "DVD": "03 Nov 2015",
    "BoxOffice": "$264,317,903",
    "Production": "Disney/Pixar",
    "Website": "https://www.facebook.com/PixarInsideOut",
    "Response": "True"
  },
  "130": {
    "Title": "The Intern",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "25 Sep 2015",
    "Runtime": "121 min",
    "Genre": "Comedy, Drama",
    "Director": "Nancy Meyers",
    "Writer": "Nancy Meyers",
    "Actors": "Robert De Niro, Anne Hathaway, Rene Russo, Anders Holm",
    "Plot": "Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "59%"
      },
      {
        "Source": "Metacritic",
        "Value": "51/100"
      }
    ],
    "Metascore": "51",
    "imdbRating": "7.1",
    "imdbVotes": "180,663",
    "imdbID": "tt2361509",
    "Type": "movie",
    "DVD": "19 Jan 2016",
    "BoxOffice": "$60,886,513",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.theinternmovie.com/",
    "Response": "True"
  },
  "131": {
    "Title": "Invincible",
    "Year": "2006",
    "Rated": "PG",
    "Released": "25 Aug 2006",
    "Runtime": "105 min",
    "Genre": "Biography, Drama, Sport",
    "Director": "Ericson Core",
    "Writer": "Brad Gann",
    "Actors": "Mark Wahlberg, Greg Kinnear, Elizabeth Banks, Kevin Conway",
    "Plot": "Based on the story of Vince Papale, a 30-year-old bartender from South Philadelphia who overcame long odds to play for the NFL's Philadelphia Eagles in 1976.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1NjI2ODA5MF5BMl5BanBnXkFtZTcwNjMyMTMzMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "7.1",
    "imdbVotes": "58,718",
    "imdbID": "tt0445990",
    "Type": "movie",
    "DVD": "19 Dec 2006",
    "BoxOffice": "$57,789,574",
    "Production": "Buena Vista",
    "Website": "http://www.invincible.movies.com",
    "Response": "True"
  },
  "132": {
    "Title": "Iron Man",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 May 2008",
    "Runtime": "126 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Favreau",
    "Writer": "Mark Fergus (screenplay), Hawk Ostby (screenplay), Art Marcum (screenplay), Matt Holloway (screenplay), Stan Lee (characters), Don Heck (characters), Larry Lieber (characters), Jack Kirby (characters)",
    "Actors": "Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",
    "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "Language": "English, Persian, Urdu, Arabic, Hungarian",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 20 wins & 65 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "7.9",
    "imdbVotes": "812,955",
    "imdbID": "tt0371746",
    "Type": "movie",
    "DVD": "30 Sep 2008",
    "BoxOffice": "$318,298,180",
    "Production": "Paramount Pictures",
    "Website": "http://www.ironmanmovie.com/",
    "Response": "True"
  },
  "133": {
    "Title": "Iron Man 2",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "07 May 2010",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Favreau",
    "Writer": "Justin Theroux (screenplay), Stan Lee (Marvel comic book), Don Heck (Marvel comic book), Larry Lieber (Marvel comic book), Jack Kirby (Marvel comic book)",
    "Actors": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Scarlett Johansson",
    "Plot": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    "Language": "English, French, Russian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "73%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.0",
    "imdbVotes": "616,188",
    "imdbID": "tt1228705",
    "Type": "movie",
    "DVD": "28 Sep 2010",
    "BoxOffice": "$312,057,433",
    "Production": "Paramount Studios",
    "Website": "http://www.ironmanmovie.com/",
    "Response": "True"
  },
  "134": {
    "Title": "Iron Man 3",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "03 May 2013",
    "Runtime": "130 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Shane Black",
    "Writer": "Drew Pearce (screenplay by), Shane Black (screenplay by), Stan Lee (based on the Marvel comic book by), Don Heck (based on the Marvel comic book by), Larry Lieber (based on the Marvel comic book by), Jack Kirby (based on the Marvel comic book by), Warren Ellis (based on the \"Extremis\" mini-series written by), Adi Granov (based on the \"Extremis\" mini-series illustrated by)",
    "Actors": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce",
    "Plot": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    "Language": "English",
    "Country": "China, USA",
    "Awards": "Nominated for 1 Oscar. Another 17 wins & 61 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "7.2",
    "imdbVotes": "649,411",
    "imdbID": "tt1300854",
    "Type": "movie",
    "DVD": "24 Sep 2013",
    "BoxOffice": "$408,992,272",
    "Production": "Walt Disney Pictures",
    "Website": "http://IronManMovie3.com",
    "Response": "True"
  },
  "135": {
    "Title": "It's Flashbeagle, Charlie Brown",
    "Year": "1984",
    "Rated": "NOT RATED",
    "Released": "16 Apr 1984",
    "Runtime": "24 min",
    "Genre": "Animation, Short, Comedy",
    "Director": "Sam Jaimes, Bill Melendez",
    "Writer": "Charles M. Schulz (creator), Charles M. Schulz, Joseph A. Bailey, Mark Saltzman, Norman Stiles, Christopher Cerf, Nancy Sans, Sharon Lerner",
    "Actors": "Fergie, Gary Goren, Gini Holtzman, Keri Houlihan",
    "Plot": "Snoopy assumes the alter ego of insanely hot and charismatic dance machine Flashbeagle. Meanwhile, Sally pines for Linus and Lucy bosses everyone around.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzOTIxNTc1Ml5BMl5BanBnXkFtZTcwNzA1MzMyMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "467",
    "imdbID": "tt0123122",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Charles M Schulz Creative Associates",
    "Website": "N/A",
    "Response": "True"
  },
  "136": {
    "Title": "Joseph and the Amazing Technicolor Dreamcoat",
    "Year": "1999",
    "Rated": "N/A",
    "Released": "05 Apr 2000",
    "Runtime": "76 min",
    "Genre": "Musical",
    "Director": "David Mallet",
    "Writer": "Tim Rice (book), Michael Walsh",
    "Actors": "Donny Osmond, Maria Friedman, Richard Attenborough, Joan Collins",
    "Plot": "A humourously musical retelling of the Biblical story of Joseph.",
    "Language": "English",
    "Country": "UK",
    "Awards": "1 win & 3 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NzY3NzU2OV5BMl5BanBnXkFtZTcwNDYwMTIyMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.4",
    "imdbVotes": "2,956",
    "imdbID": "tt0175790",
    "Type": "movie",
    "DVD": "28 Mar 2000",
    "BoxOffice": "N/A",
    "Production": "Universal",
    "Website": "http://www.FathomEvents.com",
    "Response": "True"
  },
  "137": {
    "Title": "Julie",
    "Year": "1956",
    "Rated": "APPROVED",
    "Released": "17 Oct 1956",
    "Runtime": "99 min",
    "Genre": "Crime, Drama, Film-Noir",
    "Director": "Andrew L. Stone",
    "Writer": "Andrew L. Stone",
    "Actors": "Doris Day, Louis Jourdan, Barry Sullivan, Frank Lovejoy",
    "Plot": "A terrified wife tries to escape from her insanely jealous husband who is bent on killing her.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODk4ZmRkZjgtMWMyMC00MmFhLTgwZTMtZDg0YzJjMWU3MGQ4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.2/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.2",
    "imdbVotes": "1,058",
    "imdbID": "tt0049388",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Warner Home Video",
    "Website": "http://www.wbshop.com/",
    "Response": "True"
  },
  "138": {
    "Title": "Juno",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "25 Dec 2007",
    "Runtime": "96 min",
    "Genre": "Comedy, Drama",
    "Director": "Jason Reitman",
    "Writer": "Diablo Cody",
    "Actors": "Ellen Page, Michael Cera, Jennifer Garner, Jason Bateman",
    "Plot": "Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding her unborn child.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 89 wins & 95 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIwMDgwODc5Nl5BMl5BanBnXkFtZTYwMjQzMDM4._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.5",
    "imdbVotes": "455,301",
    "imdbID": "tt0467406",
    "Type": "movie",
    "DVD": "15 Apr 2008",
    "BoxOffice": "$143,380,890",
    "Production": "Fox Searchlight",
    "Website": "http://www.foxsearchlight.com/juno/",
    "Response": "True"
  },
  "139": {
    "Title": "Jurassic Park",
    "Year": "1993",
    "Rated": "PG-13",
    "Released": "11 Jun 1993",
    "Runtime": "127 min",
    "Genre": "Adventure, Sci-Fi, Thriller",
    "Director": "Steven Spielberg",
    "Writer": "Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)",
    "Actors": "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    "Plot": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 3 Oscars. Another 32 wins & 25 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "8.1",
    "imdbVotes": "747,324",
    "imdbID": "tt0107290",
    "Type": "movie",
    "DVD": "10 Oct 2000",
    "BoxOffice": "$45,299,680",
    "Production": "Universal City Studios",
    "Website": "http://www.jurassicpark.com/maingate_flash.html",
    "Response": "True"
  },
  "140": {
    "Title": "Jurassic Park III",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "18 Jul 2001",
    "Runtime": "92 min",
    "Genre": "Action, Adventure, Sci-Fi, Thriller",
    "Director": "Joe Johnston",
    "Writer": "Michael Crichton (characters), Peter Buchman, Alexander Payne, Jim Taylor",
    "Actors": "Sam Neill, William H. Macy, Téa Leoni, Alessandro Nivola",
    "Plot": "A decidedly odd couple with ulterior motives convince Dr. Grant to go to Isla Sorna, resulting in an unexpected landing, and unexpected new inhabitants on the island.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "5 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDMyZGJjOGItYjJkZC00MDVlLWE0Y2YtZGIwMDExYWE3MGQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "50%"
      },
      {
        "Source": "Metacritic",
        "Value": "42/100"
      }
    ],
    "Metascore": "42",
    "imdbRating": "5.9",
    "imdbVotes": "259,993",
    "imdbID": "tt0163025",
    "Type": "movie",
    "DVD": "11 Dec 2001",
    "BoxOffice": "N/A",
    "Production": "Universal Pictures",
    "Website": "http://www.jurassicpark.com",
    "Response": "True"
  },
  "141": {
    "Title": "Jurassic World",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "12 Jun 2015",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Colin Trevorrow",
    "Writer": "Rick Jaffa (screenplay by), Amanda Silver (screenplay by), Colin Trevorrow (screenplay by), Derek Connolly (screenplay by), Rick Jaffa (story by), Amanda Silver (story by), Michael Crichton (based on the characters created by)",
    "Actors": "Chris Pratt, Bryce Dallas Howard, Irrfan Khan, Vincent D'Onofrio",
    "Plot": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree.",
    "Language": "English",
    "Country": "USA",
    "Awards": "14 wins & 57 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "7.0",
    "imdbVotes": "515,266",
    "imdbID": "tt0369610",
    "Type": "movie",
    "DVD": "20 Oct 2015",
    "BoxOffice": "$528,757,749",
    "Production": "Universal Pictures",
    "Website": "http://www.jurassicworldmovie.com/",
    "Response": "True"
  },
  "142": {
    "Title": "Just Friends",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "23 Nov 2005",
    "Runtime": "96 min",
    "Genre": "Comedy, Romance",
    "Director": "Roger Kumble",
    "Writer": "Adam 'Tex' Davis",
    "Actors": "Ryan Reynolds, Amy Smart, Anna Faris, Chris Klein",
    "Plot": "While visiting his hometown during Christmas, a man comes face-to-face with his old high school crush whom he was best friends with -- a woman whose rejection of him turned him into a ferocious womanizer.",
    "Language": "English",
    "Country": "Germany, USA, Canada",
    "Awards": "3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "42%"
      },
      {
        "Source": "Metacritic",
        "Value": "47/100"
      }
    ],
    "Metascore": "47",
    "imdbRating": "6.2",
    "imdbVotes": "93,635",
    "imdbID": "tt0433400",
    "Type": "movie",
    "DVD": "07 Mar 2006",
    "BoxOffice": "$32,596,916",
    "Production": "New Line Cinema",
    "Website": "http://www.justfriendsmovie.com/",
    "Response": "True"
  },
  "143": {
    "Title": "Justice League",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "17 Nov 2017",
    "Runtime": "120 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Jerry Siegel (Superman created by), Joe Shuster (Superman created by), Chris Terrio (story by), Zack Snyder (story by), Chris Terrio (screenplay by), Joss Whedon (screenplay by), Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger (Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)",
    "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot",
    "Plot": "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.",
    "Language": "English, Irish, Russian, Icelandic",
    "Country": "UK, Canada, USA",
    "Awards": "1 win & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "40%"
      },
      {
        "Source": "Metacritic",
        "Value": "45/100"
      }
    ],
    "Metascore": "45",
    "imdbRating": "6.6",
    "imdbVotes": "282,730",
    "imdbID": "tt0974015",
    "Type": "movie",
    "DVD": "13 Mar 2018",
    "BoxOffice": "$227,032,490",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.justiceleaguethemovie.com/",
    "Response": "True"
  },
  "144": {
    "Title": "Kabluey",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "25 Jun 2007",
    "Runtime": "86 min",
    "Genre": "Comedy",
    "Director": "Scott Prendergast",
    "Writer": "Scott Prendergast",
    "Actors": "Lisa Kudrow, Scott Prendergast, Christine Taylor, Conchata Ferrell",
    "Plot": "Inept Salman comes to help his sister-in-law tend to his holy terror nephews while Salman's brother is off fighting in Iraq. Salman must take a humiliating job as a giant blue corporate ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMwMzMwOTA3NF5BMl5BanBnXkFtZTcwNDE2NjU3MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.7",
    "imdbVotes": "4,154",
    "imdbID": "tt0816545",
    "Type": "movie",
    "DVD": "16 Sep 2008",
    "BoxOffice": "N/A",
    "Production": "Regent Releasing/Whitewater Films",
    "Website": "http://www.kabluey.com/",
    "Response": "True"
  },
  "145": {
    "Title": "Kong: Skull Island",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "10 Mar 2017",
    "Runtime": "118 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Jordan Vogt-Roberts",
    "Writer": "Dan Gilroy (screenplay by), Max Borenstein (screenplay by), Derek Connolly (screenplay by), John Gatins (story by)",
    "Actors": "Tom Hiddleston, Samuel L. Jackson, Brie Larson, John C. Reilly",
    "Plot": "A team of scientists explore an uncharted island in the Pacific, venturing into the domain of the mighty Kong, and must fight to escape a primal Eden.",
    "Language": "English, Vietnamese",
    "Country": "USA, China",
    "Awards": "Nominated for 1 Oscar. Another 1 win & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "75%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.7",
    "imdbVotes": "216,722",
    "imdbID": "tt3731562",
    "Type": "movie",
    "DVD": "18 Jul 2017",
    "BoxOffice": "$167,986,460",
    "Production": "Warner Bros. Pictures/Legendary Pictures",
    "Website": "http://kongskullislandmovie.com/",
    "Response": "True"
  },
  "146": {
    "Title": "Kung Fu Panda",
    "Year": "2008",
    "Rated": "PG",
    "Released": "06 Jun 2008",
    "Runtime": "92 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Mark Osborne, John Stevenson",
    "Writer": "Jonathan Aibel (screenplay), Glenn Berger (screenplay), Ethan Reiff (story), Cyrus Voris (story)",
    "Actors": "Jack Black, Dustin Hoffman, Angelina Jolie, Ian McShane",
    "Plot": "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 14 wins & 37 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.6",
    "imdbVotes": "361,006",
    "imdbID": "tt0441773",
    "Type": "movie",
    "DVD": "09 Nov 2008",
    "BoxOffice": "$215,395,021",
    "Production": "Paramount Pictures",
    "Website": "http://www.KungFuPanda.com",
    "Response": "True"
  },
  "147": {
    "Title": "Kung Fu Panda 2",
    "Year": "2011",
    "Rated": "PG",
    "Released": "26 May 2011",
    "Runtime": "90 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Jennifer Yuh Nelson",
    "Writer": "Jonathan Aibel, Glenn Berger",
    "Actors": "Jack Black, Angelina Jolie, Dustin Hoffman, Gary Oldman",
    "Plot": "Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 5 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "7.2",
    "imdbVotes": "216,695",
    "imdbID": "tt1302011",
    "Type": "movie",
    "DVD": "13 Dec 2011",
    "BoxOffice": "$165,230,261",
    "Production": "Paramount Studios/Dreamworks",
    "Website": "http://www.kungfupanda.com/",
    "Response": "True"
  },
  "148": {
    "Title": "Kung Fu Panda 3",
    "Year": "2016",
    "Rated": "PG",
    "Released": "29 Jan 2016",
    "Runtime": "95 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Alessandro Carloni, Jennifer Yuh Nelson",
    "Writer": "Jonathan Aibel, Glenn Berger",
    "Actors": "Jack Black, Bryan Cranston, Dustin Hoffman, Angelina Jolie",
    "Plot": "Continuing his \"legendary adventures of awesomeness\", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.",
    "Language": "English, Mandarin",
    "Country": "China, USA",
    "Awards": "1 win & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.1",
    "imdbVotes": "106,361",
    "imdbID": "tt2267968",
    "Type": "movie",
    "DVD": "28 Jun 2016",
    "BoxOffice": "$128,341,070",
    "Production": "DreamWorks Animation",
    "Website": "https://www.facebook.com/kungfupanda",
    "Response": "True"
  },
  "149": {
    "Title": "La La Land",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "25 Dec 2016",
    "Runtime": "128 min",
    "Genre": "Comedy, Drama, Music",
    "Director": "Damien Chazelle",
    "Writer": "Damien Chazelle",
    "Actors": "Ryan Gosling, Emma Stone, Amiée Conn, Terry Walters",
    "Plot": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "Language": "English",
    "Country": "USA, Hong Kong",
    "Awards": "Won 6 Oscars. Another 215 wins & 254 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "93/100"
      }
    ],
    "Metascore": "93",
    "imdbRating": "8.1",
    "imdbVotes": "395,144",
    "imdbID": "tt3783958",
    "Type": "movie",
    "DVD": "25 Apr 2017",
    "BoxOffice": "$151,058,124",
    "Production": "Liongate Films",
    "Website": "http://www.lalaland.movie/",
    "Response": "True"
  },
  "150": {
    "Title": "Lady in the Water",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "21 Jul 2006",
    "Runtime": "110 min",
    "Genre": "Drama, Fantasy, Mystery, Thriller",
    "Director": "M. Night Shyamalan",
    "Writer": "M. Night Shyamalan",
    "Actors": "Paul Giamatti, Bryce Dallas Howard, Jeffrey Wright, Bob Balaban",
    "Plot": "Apartment building superintendent Cleveland Heep rescues what he thinks is a young woman from the pool he maintains. When he discovers that she is actually a character from a bedtime story who is trying to make the journey back to her home, he works with his tenants to protect his new friend from the creatures that are determined to keep her in our world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "10 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNTc0NTk5M15BMl5BanBnXkFtZTcwMDE5NzkyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "25%"
      },
      {
        "Source": "Metacritic",
        "Value": "36/100"
      }
    ],
    "Metascore": "36",
    "imdbRating": "5.6",
    "imdbVotes": "87,365",
    "imdbID": "tt0452637",
    "Type": "movie",
    "DVD": "19 Dec 2006",
    "BoxOffice": "$42,219,433",
    "Production": "Warner Bros. Pictures",
    "Website": "http://ladyinthewater.warnerbros.com/",
    "Response": "True"
  },
  "151": {
    "Title": "The Last Five Years",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "18 Feb 2015",
    "Runtime": "94 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Richard LaGravenese",
    "Writer": "Jason Robert Brown (based on the musical play by), Richard LaGravenese (screenplay)",
    "Actors": "Anna Kendrick, Jeremy Jordan, Tamara Mintz, Cassandra Inman",
    "Plot": "A struggling actress and her novelist lover each illustrate the struggle and deconstruction of their love affair.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2MTMwMjIxMTdeQTJeQWpwZ15BbWU4MDAwMTYxNzMx._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "59%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "5.9",
    "imdbVotes": "8,351",
    "imdbID": "tt2474024",
    "Type": "movie",
    "DVD": "05 May 2015",
    "BoxOffice": "N/A",
    "Production": "Radius-TWC",
    "Website": "http://lastfiveyearsmovie.com/",
    "Response": "True"
  },
  "152": {
    "Title": "The Last Samurai",
    "Year": "2003",
    "Rated": "R",
    "Released": "05 Dec 2003",
    "Runtime": "154 min",
    "Genre": "Action, Drama, History, War",
    "Director": "Edward Zwick",
    "Writer": "John Logan (story), John Logan (screenplay), Edward Zwick (screenplay), Marshall Herskovitz (screenplay)",
    "Actors": "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
    "Plot": "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
    "Language": "English, Japanese",
    "Country": "USA, New Zealand, Japan",
    "Awards": "Nominated for 4 Oscars. Another 21 wins & 62 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "55/100"
      }
    ],
    "Metascore": "55",
    "imdbRating": "7.7",
    "imdbVotes": "358,565",
    "imdbID": "tt0325710",
    "Type": "movie",
    "DVD": "04 May 2004",
    "BoxOffice": "$111,000,000",
    "Production": "Warner Bros. Pictures",
    "Website": "http://lastsamurai.warnerbros.com/html_index.php",
    "Response": "True"
  },
  "153": {
    "Title": "The Legend of Johnny Lingo",
    "Year": "2003",
    "Rated": "G",
    "Released": "29 Aug 2003",
    "Runtime": "91 min",
    "Genre": "Action, Adventure, Family",
    "Director": "Steven Ramirez",
    "Writer": "Riwia Brown (screenplay), John Garbett (screenplay)",
    "Actors": "George Henare, Rawiri Paratene, Joe Folau, Alvin Fitisemanu",
    "Plot": "When a storm washes a canoe bearing an infant boy ashore upon a small South Pacific island, he is at first well-received as a gift from the heavens, even to the point of the tribal chief ...",
    "Language": "English",
    "Country": "New Zealand",
    "Awards": "1 win.",
    "Poster": "https://ia.media-imdb.com/images/M/MV5BMjA5NjcyMzIwNV5BMl5BanBnXkFtZTcwMTI0NTAwMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "13%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.4",
    "imdbVotes": "655",
    "imdbID": "tt0367960",
    "Type": "movie",
    "DVD": "11 May 2004",
    "BoxOffice": "N/A",
    "Production": "Number 8 Production LLC",
    "Website": "http://www.johnnylingo.com",
    "Response": "True"
  },
  "154": {
    "Title": "The Lego Movie",
    "Year": "2014",
    "Rated": "PG",
    "Released": "07 Feb 2014",
    "Runtime": "100 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Phil Lord, Christopher Miller",
    "Writer": "Phil Lord (screenplay), Christopher Miller (screenplay), Dan Hageman (story), Kevin Hageman (story), Phil Lord (story), Christopher Miller (story), Ole Kirk Christiansen (based on LEGO Construction Toys created by), Godtfred Kirk Christiansen (based on LEGO Construction Toys created by), Jens Nygaard Knudsen (based on LEGO Construction Toys created by), Peter Laird (characters created by: Teenage Mutant Ninja Turtles), Kevin Eastman (characters created by: Teenage Mutant Ninja Turtles)",
    "Actors": "Will Arnett, Elizabeth Banks, Craig Berry, Alison Brie",
    "Plot": "An ordinary LEGO construction worker, thought to be the prophesied as \"special\", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
    "Language": "English",
    "Country": "Australia, USA, Denmark",
    "Awards": "Nominated for 1 Oscar. Another 73 wins & 61 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "83/100"
      }
    ],
    "Metascore": "83",
    "imdbRating": "7.8",
    "imdbVotes": "289,992",
    "imdbID": "tt1490017",
    "Type": "movie",
    "DVD": "17 Jun 2014",
    "BoxOffice": "$244,870,202",
    "Production": "Warner Bros. Pictures",
    "Website": "http://thelegomovie.warnerbros.com/",
    "Response": "True"
  },
  "155": {
    "Title": "A Series of Unfortunate Events",
    "Year": "2004",
    "Rated": "PG",
    "Released": "17 Dec 2004",
    "Runtime": "108 min",
    "Genre": "Adventure, Comedy, Family",
    "Director": "Brad Silberling",
    "Writer": "Robert Gordon (screenplay), Daniel Handler (books)",
    "Actors": "Jim Carrey, Liam Aiken, Emily Browning, Kara Hoffman",
    "Plot": "When a massive fire kills their parents, three children are delivered to the custody of cousin and stage actor Count Olaf, who is secretly plotting to steal their parents' vast fortune.",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "Won 1 Oscar. Another 9 wins & 27 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_SX300.jpg",
    "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
        },
        {
        "Source": "Metacritic",
        "Value": "62/100"
        }
    ],
    "Metascore": "62",
    "imdbRating": "6.8",
    "imdbVotes": "179,854",
    "imdbID": "tt0339291",
    "Type": "movie",
    "DVD": "26 Apr 2005",
    "BoxOffice": "$118,461,298",
    "Production": "Paramount Pictures",
    "Website": "http://www.unfortunateeventsmovie.com/",
    "Response": "True"
  },
  "156": {
    "Title": "Letters to Juliet",
    "Year": "2010",
    "Rated": "PG",
    "Released": "14 May 2010",
    "Runtime": "105 min",
    "Genre": "Adventure, Comedy, Drama",
    "Director": "Gary Winick",
    "Writer": "Jose Rivera, Tim Sullivan",
    "Actors": "Amanda Seyfried, Marcia DeBonis, Gael García Bernal, Giordano Formenti",
    "Plot": "Sophie dreams of becoming a writer and travels to Verona, Italy where she meets the \"Secretaries of Juliet\".",
    "Language": "English, Italian, Spanish",
    "Country": "USA",
    "Awards": "6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjg0OTU0NDYwNF5BMl5BanBnXkFtZTcwNzUwNTMyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "41%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "6.6",
    "imdbVotes": "82,688",
    "imdbID": "tt0892318",
    "Type": "movie",
    "DVD": "14 Sep 2010",
    "BoxOffice": "$53,021,560",
    "Production": "Summit Entertainment",
    "Website": "http://LettersToJuliet-Movie.com/",
    "Response": "True"
  },
  "157": {
    "Title": "Lilo & Stitch",
    "Year": "2002",
    "Rated": "PG",
    "Released": "21 Jun 2002",
    "Runtime": "85 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Dean DeBlois, Chris Sanders",
    "Writer": "Chris Sanders (based on an idea by), Chris Sanders, Dean DeBlois",
    "Actors": "Daveigh Chase, Chris Sanders, Tia Carrere, David Ogden Stiers",
    "Plot": "A Hawaiian girl adopts an unusual pet who is actually a notorious extra-terrestrial fugitive.",
    "Language": "English, Hawaiian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 10 wins & 26 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTU5MTA2M15BMl5BanBnXkFtZTYwMjYyNTc3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.2",
    "imdbVotes": "142,253",
    "imdbID": "tt0275847",
    "Type": "movie",
    "DVD": "03 Dec 2002",
    "BoxOffice": "$145,771,527",
    "Production": "Buena Vista Distribution Compa",
    "Website": "http://disney.go.com/disneypictures/liloandstitch",
    "Response": "True"
  },
  "158": {
    "Title": "The Lion King",
    "Year": "1994",
    "Rated": "G",
    "Released": "24 Jun 1994",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Drama",
    "Director": "Roger Allers, Rob Minkoff",
    "Writer": "Irene Mecchi (screenplay by), Jonathan Roberts (screenplay by), Linda Woolverton (screenplay by), Burny Mattinson (story), Barry Johnson (story), Lorna Cook (story), Thom Enriquez (story), Andy Gaskill (story), Gary Trousdale (story), Jim Capobianco (story), Kevin Harkey (story), Jorgen Klubien (story), Chris Sanders (story), Tom Sito (story), Larry Leker (story), Joe Ranft (story), Rick Maki (story), Ed Gombert (story), Francis Glebas (story), Mark Kausler (story), J.T. Allen (additional story material), George Scribner (additional story material), Miguel Tejada-Flores (additional story material), Jenny Tripp (additional story material), Bob Tzudiker (additional story material), Christopher Vogler (additional story material), Kirk Wise (additional story material), Noni White (additional story material), Brenda Chapman (story supervisor)",
    "Actors": "Rowan Atkinson, Matthew Broderick, Niketa Calame-Harris, Jim Cummings",
    "Plot": "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
    "Language": "English, Swahili, Xhosa, Zulu",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 33 wins & 29 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "83/100"
      }
    ],
    "Metascore": "83",
    "imdbRating": "8.5",
    "imdbVotes": "787,506",
    "imdbID": "tt0110357",
    "Type": "movie",
    "DVD": "07 Oct 2003",
    "BoxOffice": "$94,240,635",
    "Production": "Buena Vista",
    "Website": "http://disney.go.com/lionking/",
    "Response": "True"
  },
  "159": {
    "Title": "The Little Mermaid",
    "Year": "1989",
    "Rated": "G",
    "Released": "17 Nov 1989",
    "Runtime": "83 min",
    "Genre": "Animation, Family, Fantasy",
    "Director": "Ron Clements, John Musker",
    "Writer": "John Musker, Ron Clements, Hans Christian Andersen (fairy tale), Howard Ashman (additional dialogue), Gerrit Graham (additional dialogue), Sam Graham (additional dialogue), Chris Hubbell (additional dialogue)",
    "Actors": "Rene Auberjonois, Christopher Daniel Barnes, Jodi Benson, Pat Carroll",
    "Plot": "A mermaid princess makes a Faustian bargain with an unscrupulous sea-witch in order to meet a human prince on land.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 10 wins & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2JlZTBhYTEtZDE3OC00NTA3LTk5NTQtNjg5M2RjODllM2M0XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "88/100"
      }
    ],
    "Metascore": "88",
    "imdbRating": "7.6",
    "imdbVotes": "202,294",
    "imdbID": "tt0097757",
    "Type": "movie",
    "DVD": "07 Dec 1999",
    "BoxOffice": "N/A",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.facebook.com/DisneyTheLittleMermaid",
    "Response": "True"
  },
  "160": {
    "Title": "London Has Fallen",
    "Year": "2016",
    "Rated": "R",
    "Released": "04 Mar 2016",
    "Runtime": "99 min",
    "Genre": "Action, Thriller",
    "Director": "Babak Najafi",
    "Writer": "Creighton Rothenberger (based on characters created by), Katrin Benedikt (based on characters created by), Creighton Rothenberger (story by), Katrin Benedikt (story by), Creighton Rothenberger (screenplay by), Katrin Benedikt (screenplay by), Christian Gudegast (screenplay by), Chad St. John (screenplay by)",
    "Actors": "Alon Aboutboul, Waleed Zuaiter, Adel Bencherif, Mehdi Dehbi",
    "Plot": "In London for the Prime Minister's funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.",
    "Language": "English, Italian, French, Japanese",
    "Country": "UK, Bulgaria, USA",
    "Awards": "1 win & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1ODY2MTgwM15BMl5BanBnXkFtZTgwOTY3Nzc3NzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "25%"
      },
      {
        "Source": "Metacritic",
        "Value": "28/100"
      }
    ],
    "Metascore": "28",
    "imdbRating": "5.9",
    "imdbVotes": "117,680",
    "imdbID": "tt3300542",
    "Type": "movie",
    "DVD": "14 Jun 2016",
    "BoxOffice": "N/A",
    "Production": "Focus Features",
    "Website": "http://www.londonhasfallen.com/",
    "Response": "True"
  },
  "161": {
    "Title": "The Lone Ranger",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "03 Jul 2013",
    "Runtime": "150 min",
    "Genre": "Action, Adventure, Western",
    "Director": "Gore Verbinski",
    "Writer": "Justin Haythe (screenplay), Ted Elliott (screenplay), Terry Rossio (screenplay), Ted Elliott (screen story), Terry Rossio (screen story), Justin Haythe (screen story)",
    "Actors": "Johnny Depp, Armie Hammer, William Fichtner, Tom Wilkinson",
    "Plot": "Native American warrior Tonto recounts the untold tales that transformed John Reid, a man of the law, into a legend of justice.",
    "Language": "English, North American Indian",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 4 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjFiMTc2MTAtZDA0My00OGRmLTk5M2ItNTlmYTUwZmU2YmRiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "30%"
      },
      {
        "Source": "Metacritic",
        "Value": "37/100"
      }
    ],
    "Metascore": "37",
    "imdbRating": "6.4",
    "imdbVotes": "202,890",
    "imdbID": "tt1210819",
    "Type": "movie",
    "DVD": "17 Dec 2013",
    "BoxOffice": "$89,289,910",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.go.com/the-lone-ranger/",
    "Response": "True"
  },
  "162": {
    "Title": "The Longest Yard",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "27 May 2005",
    "Runtime": "113 min",
    "Genre": "Comedy, Crime, Sport",
    "Director": "Peter Segal",
    "Writer": "Albert S. Ruddy (story), Tracy Keenan Wynn, Sheldon Turner (screenplay)",
    "Actors": "Adam Sandler, Chris Rock, Burt Reynolds, Nelly",
    "Plot": "Prison inmates form a football team to challenge the prison guards.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1NTQyNDk2NV5BMl5BanBnXkFtZTcwOTE2OTQzMw@@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "32%"
        },
        {
          "Source": "Metacritic",
          "Value": "48/100"
        }
    ],
    "Metascore": "48",
    "imdbRating": "6.4",
    "imdbVotes": "145,736",
    "imdbID": "tt0398165",
    "Type": "movie",
    "DVD": "03 Aug 2004",
    "BoxOffice": "$157,900,000",
    "Production": "Paramount Pictures",
    "Website": "http://www.longestyard.com",
    "Response": "True"
  },
  "163": {
    "Title": "Looney Tunes: Back in Action",
    "Year": "2003",
    "Rated": "PG",
    "Released": "14 Nov 2003",
    "Runtime": "91 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi",
    "Director": "Joe Dante",
    "Writer": "Larry Doyle",
    "Actors": "Brendan Fraser, Jenna Elfman, Steve Martin, Timothy Dalton",
    "Plot": "The Looney Tunes search for a man's missing father and the mythical Blue Monkey diamond.",
    "Language": "English",
    "Country": "Germany, USA",
    "Awards": "10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNDk5MDQ2MF5BMl5BanBnXkFtZTYwMTA0Nzc2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "56%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "5.7",
    "imdbVotes": "28,881",
    "imdbID": "tt0318155",
    "Type": "movie",
    "DVD": "02 Mar 2004",
    "BoxOffice": "$21,000,000",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www2.warnerbros.com/looneytunesbackinaction/index.html",
    "Response": "True"
  },
  "164": {
    "Title": "The Lord of the Rings: The Fellowship of the Ring Part 1",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, USA",
    "Awards": "Won 4 Oscars. Another 113 wins & 123 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "92/100"
      }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,441,532",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$314,000,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/film/trilogy/thefellowship.html",
    "Response": "True"
  },
  "165": {
    "Title": "The Lord of the Rings: The Fellowship of the Ring Part 2",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, USA",
    "Awards": "Won 4 Oscars. Another 113 wins & 123 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "92/100"
      }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,441,532",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$314,000,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/film/trilogy/thefellowship.html",
    "Response": "True"
  },
  "166": {
    "Title": "The Lord of the Rings: The Return of the King Part 1",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "17 Dec 2003",
    "Runtime": "201 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "Actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
    "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Language": "English, Quenya, Old English, Sindarin",
    "Country": "New Zealand, USA",
    "Awards": "Won 11 Oscars. Another 197 wins & 122 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "94/100"
      }
    ],
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,424,665",
    "imdbID": "tt0167260",
    "Type": "movie",
    "DVD": "25 May 2004",
    "BoxOffice": "$364,000,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/",
    "Response": "True"
  },
  "167": {
    "Title": "The Lord of the Rings: The Return of the King Part 2",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "17 Dec 2003",
    "Runtime": "201 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "Actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
    "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Language": "English, Quenya, Old English, Sindarin",
    "Country": "New Zealand, USA",
    "Awards": "Won 11 Oscars. Another 197 wins & 122 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "94/100"
      }
    ],
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,424,665",
    "imdbID": "tt0167260",
    "Type": "movie",
    "DVD": "25 May 2004",
    "BoxOffice": "$364,000,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/",
    "Response": "True"
  },
  "168": {
    "Title": "The Lord of the Rings: The Two Towers Part 1",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "18 Dec 2002",
    "Runtime": "179 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)",
    "Actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
    "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "Language": "English, Sindarin, Old English",
    "Country": "New Zealand, USA",
    "Awards": "Won 2 Oscars. Another 118 wins & 137 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDY0NmI4ZjctN2VhZS00YzExLTkyZGItMTJhOTU5NTg4MDU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": "87",
    "imdbRating": "8.7",
    "imdbVotes": "1,287,948",
    "imdbID": "tt0167261",
    "Type": "movie",
    "DVD": "26 Aug 2003",
    "BoxOffice": "$339,700,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/",
    "Response": "True"
  },
  "169": {
    "Title": "The Lord of the Rings: The Two Towers Part 2",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "18 Dec 2002",
    "Runtime": "179 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)",
    "Actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
    "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "Language": "English, Sindarin, Old English",
    "Country": "New Zealand, USA",
    "Awards": "Won 2 Oscars. Another 118 wins & 137 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDY0NmI4ZjctN2VhZS00YzExLTkyZGItMTJhOTU5NTg4MDU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": "87",
    "imdbRating": "8.7",
    "imdbVotes": "1,287,948",
    "imdbID": "tt0167261",
    "Type": "movie",
    "DVD": "26 Aug 2003",
    "BoxOffice": "$339,700,000",
    "Production": "New Line Cinema",
    "Website": "http://www.lordoftherings.net/",
    "Response": "True"
  },
  "170": {
    "Title": "The Lost World: Jurassic Park",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "23 May 1997",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven Spielberg",
    "Writer": "Michael Crichton (novel), David Koepp (screenplay)",
    "Actors": "Jeff Goldblum, Julianne Moore, Pete Postlethwaite, Arliss Howard",
    "Plot": "A research team is sent to the Jurassic Park Site B island to study the dinosaurs there while another team approaches with another agenda.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 4 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "53%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.5",
    "imdbVotes": "328,644",
    "imdbID": "tt0119567",
    "Type": "movie",
    "DVD": "10 Oct 2000",
    "BoxOffice": "N/A",
    "Production": "Universal Pictures",
    "Website": "http://www.lost-world.com/",
    "Response": "True"
  },
  "171": {
    "Title": "The Lucky One",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "20 Apr 2012",
    "Runtime": "101 min",
    "Genre": "Drama, Romance",
    "Director": "Scott Hicks",
    "Writer": "Will Fetters (screenplay), Nicholas Sparks (novel)",
    "Actors": "Zac Efron, Taylor Schilling, Blythe Danner, Riley Thomas Stewart",
    "Plot": "A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NDk3MjAzMF5BMl5BanBnXkFtZTcwMjUyNzExNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "21%"
      },
      {
        "Source": "Metacritic",
        "Value": "39/100"
      }
    ],
    "Metascore": "39",
    "imdbRating": "6.5",
    "imdbVotes": "90,520",
    "imdbID": "tt1327194",
    "Type": "movie",
    "DVD": "28 Aug 2012",
    "BoxOffice": "$60,443,237",
    "Production": "Warner Bros. Pictures",
    "Website": "http://theluckyonemovie.warnerbros.com/index.html",
    "Response": "True"
  },
  "172": {
    "Title": "Made of Honor",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 May 2008",
    "Runtime": "101 min",
    "Genre": "Comedy, Romance",
    "Director": "Paul Weiland",
    "Writer": "Adam Sztykiel (screenplay), Deborah Kaplan (screenplay), Harry Elfont (screenplay), Adam Sztykiel (story)",
    "Actors": "Patrick Dempsey, Michelle Monaghan, Kevin McKidd, Kadeem Hardison",
    "Plot": "A guy in love with an engaged woman tries to win her over after she asks him to be her maid of honor.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "1 win & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk1MzA5MjEzMF5BMl5BanBnXkFtZTcwNTk0MjU1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "14%"
      },
      {
        "Source": "Metacritic",
        "Value": "37/100"
      }
    ],
    "Metascore": "37",
    "imdbRating": "5.9",
    "imdbVotes": "61,204",
    "imdbID": "tt0866439",
    "Type": "movie",
    "DVD": "16 Sep 2008",
    "BoxOffice": "$46,012,734",
    "Production": "Sony Pictures/Columbia",
    "Website": "http://www.sonypictures.com/movies/madeofhonor/",
    "Response": "True"
  },
  "173": {
    "Title": "Maleficent",
    "Year": "2014",
    "Rated": "PG",
    "Released": "30 May 2014",
    "Runtime": "97 min",
    "Genre": "Action, Adventure, Family",
    "Director": "Robert Stromberg",
    "Writer": "Linda Woolverton (screenplay by), Charles Perrault (based on \"La Belle au bois dormant\" written by)",
    "Actors": "Angelina Jolie, Elle Fanning, Sharlto Copley, Lesley Manville",
    "Plot": "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 10 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "51%"
      },
      {
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "Metascore": "56",
    "imdbRating": "7.0",
    "imdbVotes": "292,411",
    "imdbID": "tt1587310",
    "Type": "movie",
    "DVD": "04 Nov 2014",
    "BoxOffice": "$190,871,149",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.com/Maleficent",
    "Response": "True"
  },
  "174": {
    "Title": "The Man from U.N.C.L.E.",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "14 Aug 2015",
    "Runtime": "116 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Guy Ritchie",
    "Writer": "Guy Ritchie (screenplay by), Lionel Wigram (screenplay by), Jeff Kleeman (story by), David C. Wilson (story by), Guy Ritchie (story by), Lionel Wigram (story by), Sam Rolfe (based on the television series created by)",
    "Actors": "Henry Cavill, Armie Hammer, Alicia Vikander, Elizabeth Debicki",
    "Plot": "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
    "Language": "English, Russian, German, Italian",
    "Country": "USA, UK",
    "Awards": "7 wins & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTZmMWFhYmQtZDE5YS00YzBlLWJlOGEtYzAwNGU1YzVlYjZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "Metascore": "56",
    "imdbRating": "7.3",
    "imdbVotes": "230,564",
    "imdbID": "tt1638355",
    "Type": "movie",
    "DVD": "17 Nov 2015",
    "BoxOffice": "$38,140,180",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.manfromuncle.com/",
    "Response": "True"
  },
  "175": {
    "Title": "Man of Steel",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "14 Jun 2013",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)",
    "Actors": "Henry Cavill, Amy Adams, Michael Shannon, Diane Lane",
    "Plot": "Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "7 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "55%"
      },
      {
        "Source": "Metacritic",
        "Value": "55/100"
      }
    ],
    "Metascore": "55",
    "imdbRating": "7.1",
    "imdbVotes": "624,186",
    "imdbID": "tt0770828",
    "Type": "movie",
    "DVD": "12 Nov 2013",
    "BoxOffice": "$291,021,565",
    "Production": "Warner Bros. Pictures",
    "Website": "http://manofsteel.warnerbros.com",
    "Response": "True"
  },
  "176": {
    "Title": "Master and Commander: The Far Side of the World",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "14 Nov 2003",
    "Runtime": "138 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Weir",
    "Writer": "Patrick O'Brian (novels), Peter Weir (screenplay), John Collee (screenplay)",
    "Actors": "Russell Crowe, Paul Bettany, James D'Arcy, Edward Woodall",
    "Plot": "During the Napoleonic Wars, a brash British captain pushes his ship and crew to their limits in pursuit of a formidable French war vessel around South America.",
    "Language": "English, French, Portuguese",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 21 wins & 90 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NjYyMDM5NV5BMl5BanBnXkFtZTYwOTU5MDY2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.4",
    "imdbVotes": "184,960",
    "imdbID": "tt0311113",
    "Type": "movie",
    "DVD": "20 Apr 2004",
    "BoxOffice": "$92,100,000",
    "Production": "20th Century Fox",
    "Website": "http://www.masterandcommanderthefarsideoftheworld.com/",
    "Response": "True"
  },
  "177": {
    "Title": "Matilda",
    "Year": "1996",
    "Rated": "PG",
    "Released": "02 Aug 1996",
    "Runtime": "102 min",
    "Genre": "Comedy, Family, Fantasy",
    "Director": "Danny DeVito",
    "Writer": "Roald Dahl (book), Nicholas Kazan (screenplay), Robin Swicord (screenplay)",
    "Actors": "Mara Wilson, Danny DeVito, Rhea Perlman, Embeth Davidtz",
    "Plot": "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTA4MmI5YzgtOTU1Yy00NGVjLTgyMGQtNjNlMDY2YWVlZmYyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "6.9",
    "imdbVotes": "105,553",
    "imdbID": "tt0117008",
    "Type": "movie",
    "DVD": "05 Aug 1997",
    "BoxOffice": "N/A",
    "Production": "Sony Pictures Home Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  "178": {
    "Title": "Mean Girls",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "30 Apr 2004",
    "Runtime": "97 min",
    "Genre": "Comedy",
    "Director": "Mark Waters",
    "Writer": "Rosalind Wiseman (book), Tina Fey (screenplay)",
    "Actors": "Lindsay Lohan, Rachel McAdams, Tina Fey, Tim Meadows",
    "Plot": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    "Language": "English, German, Vietnamese, Swahili",
    "Country": "USA, Canada",
    "Awards": "7 wins & 25 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.0",
    "imdbVotes": "288,510",
    "imdbID": "tt0377092",
    "Type": "movie",
    "DVD": "21 Sep 2004",
    "BoxOffice": "$85,974,306",
    "Production": "Paramount Pictures",
    "Website": "http://www.meangirlsmovie.com/indexflash.html",
    "Response": "True"
  },
  "179": {
    "Title": "Meet the Mormons",
    "Year": "2014",
    "Rated": "PG",
    "Released": "26 Feb 2015",
    "Runtime": "78 min",
    "Genre": "Documentary",
    "Director": "Blair Treu",
    "Writer": "N/A",
    "Actors": "Jermaine Sullivan, Ken Niumatalolo, Carolina Muñoz Marin, Bishnu Adhikari",
    "Plot": "Meet the Mormons examines the very diverse lives of six devout members of the Church of Jesus Christ of Latter-day Saints. Filmed on location and across the globe, Meet the Mormons takes ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MzgzMjY0OF5BMl5BanBnXkFtZTgwNDMyMjA2MjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "18%"
      },
      {
        "Source": "Metacritic",
        "Value": "29/100"
      }
    ],
    "Metascore": "29",
    "imdbRating": "7.0",
    "imdbVotes": "1,789",
    "imdbID": "tt4003774",
    "Type": "movie",
    "DVD": "31 Mar 2015",
    "BoxOffice": "$5,833,665",
    "Production": "Purdie Distribution",
    "Website": "http://meetthemormons.com/",
    "Response": "True"
  },
  "180": {
    "Title": "Meet the Robinsons",
    "Year": "2007",
    "Rated": "G",
    "Released": "30 Mar 2007",
    "Runtime": "95 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Stephen J. Anderson",
    "Writer": "Jon Bernstein (screenplay by), Michelle Bochner Spitz (screenplay by), Don Hall (screenplay by), Nathan Greno (screenplay by), Aurian Redson (screenplay by), Joseph Mateo (screenplay by), Stephen J. Anderson (screenplay by), William Joyce (based upon the book \"A Day with Wilbur Robinson\" by), Diego Garzon (story editor)",
    "Actors": "Angela Bassett, Daniel Hansen, Jordan Fry, Matthew Josten",
    "Plot": "Lewis is a brilliant inventor who meets mysterious stranger named Wilbur Robinson, whisking Lewis away in a time machine and together they team up to track down Bowler Hat Guy in a showdown that ends with an unexpected twist of fate.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDAyZTI5ZjktYmI1Yy00Mzk5LTg1MGMtMDQ0OGE4MjgwMTliXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      },
      {
        "Source": "Metacritic",
        "Value": "61/100"
      }
    ],
    "Metascore": "61",
    "imdbRating": "6.9",
    "imdbVotes": "77,213",
    "imdbID": "tt0396555",
    "Type": "movie",
    "DVD": "23 Oct 2007",
    "BoxOffice": "$97,690,955",
    "Production": "Buena Vista",
    "Website": "http://www.meettherobinsons.com/",
    "Response": "True"
  },
  "181": {
    "Title": "Megamind",
    "Year": "2010",
    "Rated": "PG",
    "Released": "05 Nov 2010",
    "Runtime": "95 min",
    "Genre": "Animation, Action, Comedy",
    "Director": "Tom McGrath",
    "Writer": "Alan Schoolcraft, Brent Simons",
    "Actors": "Will Ferrell, Brad Pitt, Tina Fey, Jonah Hill",
    "Plot": "The supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "7.3",
    "imdbVotes": "199,366",
    "imdbID": "tt1001526",
    "Type": "movie",
    "DVD": "25 Feb 2011",
    "BoxOffice": "$148,244,405",
    "Production": "Paramount Studios/DWA",
    "Website": "http://www.megamind.com/",
    "Response": "True"
  },
  "182": {
    "Title": "Men in Black",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "02 Jul 1997",
    "Runtime": "98 min",
    "Genre": "Adventure, Comedy, Mystery",
    "Director": "Barry Sonnenfeld",
    "Writer": "Lowell Cunningham (comic), Ed Solomon (screen story), Ed Solomon (screenplay)",
    "Actors": "Tommy Lee Jones, Will Smith, Linda Fiorentino, Vincent D'Onofrio",
    "Plot": "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 19 wins & 39 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "7.3",
    "imdbVotes": "457,104",
    "imdbID": "tt0119654",
    "Type": "movie",
    "DVD": "23 Oct 1997",
    "BoxOffice": "N/A",
    "Production": "Columbia TriStar International",
    "Website": "N/A",
    "Response": "True"
  },
  "183": {
    "Title": "Men in Black 3",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "25 May 2012",
    "Runtime": "106 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Barry Sonnenfeld",
    "Writer": "Etan Cohen, Lowell Cunningham (based on the Malibu comic by)",
    "Actors": "Will Smith, Tommy Lee Jones, Josh Brolin, Jemaine Clement",
    "Plot": "Agent J travels in time to M.I.B.'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.",
    "Language": "English, Ukrainian",
    "Country": "USA",
    "Awards": "1 win & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.8",
    "imdbVotes": "296,767",
    "imdbID": "tt1409024",
    "Type": "movie",
    "DVD": "30 Nov 2012",
    "BoxOffice": "$179,020,854",
    "Production": "Sony Pictures",
    "Website": "http://www.meninblack.com/",
    "Response": "True"
  },
  "184": {
    "Title": "Men in Black II",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "03 Jul 2002",
    "Runtime": "88 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Barry Sonnenfeld",
    "Writer": "Lowell Cunningham (comic book \"Malibu Comics\"), Robert Gordon (story), Robert Gordon (screenplay), Barry Fanaro (screenplay)",
    "Actors": "Tommy Lee Jones, Will Smith, Rip Torn, Lara Flynn Boyle",
    "Plot": "Agent J needs help so he is sent to find Agent K and restore his memory.",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "39%"
      },
      {
        "Source": "Metacritic",
        "Value": "49/100"
      }
    ],
    "Metascore": "49",
    "imdbRating": "6.1",
    "imdbVotes": "299,240",
    "imdbID": "tt0120912",
    "Type": "movie",
    "DVD": "26 Nov 2002",
    "BoxOffice": "$190,400,000",
    "Production": "Columbia Pictures",
    "Website": "http://www.sonypictures.com/movies/meninblack/",
    "Response": "True"
  },
  "185": {
    "Title": "Miss Congeniality",
    "Year": "2000",
    "Rated": "PG-13",
    "Released": "22 Dec 2000",
    "Runtime": "109 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Donald Petrie",
    "Writer": "Marc Lawrence, Katie Ford, Caryn Lucas",
    "Actors": "Sandra Bullock, Michael Caine, Benjamin Bratt, Candice Bergen",
    "Plot": "An F.B.I. Agent must go undercover in the Miss United States beauty pageant to prevent a group from bombing the event.",
    "Language": "English, Russian, French, Hawaiian, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 7 wins & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDhjNzc4N2MtNWE5ZC00N2M4LWFiYjEtMTE5YmYyMTg3OGY5XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "42%"
      },
      {
        "Source": "Metacritic",
        "Value": "43/100"
      }
    ],
    "Metascore": "43",
    "imdbRating": "6.2",
    "imdbVotes": "160,680",
    "imdbID": "tt0212346",
    "Type": "movie",
    "DVD": "01 May 2001",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.misscongeniality.net",
    "Response": "True"
  },
  "186": {
    "Title": "Mission: Impossible",
    "Year": "1996",
    "Rated": "PG-13",
    "Released": "22 May 1996",
    "Runtime": "110 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Brian De Palma",
    "Writer": "Bruce Geller (television series), David Koepp (story), Steven Zaillian (story), David Koepp (screenplay), Robert Towne (screenplay)",
    "Actors": "Tom Cruise, Jon Voight, Emmanuelle Béart, Henry Czerny",
    "Plot": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
    "Language": "English, French, Czech",
    "Country": "USA",
    "Awards": "3 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "64%"
        },
        {
          "Source": "Metacritic",
          "Value": "59/100"
        }
    ],
    "Metascore": "59",
    "imdbRating": "7.1",
    "imdbVotes": "345,174",
    "imdbID": "tt0117060",
    "Type": "movie",
    "DVD": "17 Jan 1998",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://www.missionimpossible.com/",
    "Response": "True"
  },
  "187": {
    "Title": "Mission: Impossible - Ghost Protocol",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "21 Dec 2011",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Brad Bird",
    "Writer": "Bruce Geller (television series \"Mission: Impossible\"), Josh Appelbaum, André Nemec",
    "Actors": "Tom Cruise, Paula Patton, Simon Pegg, Jeremy Renner",
    "Plot": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
    "Language": "English, Russian, French, Arabic, Swedish",
    "Country": "USA, United Arab Emirates, Czech Republic, Russia, India, Canada",
    "Awards": "5 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.4",
    "imdbVotes": "413,078",
    "imdbID": "tt1229238",
    "Type": "movie",
    "DVD": "17 Apr 2012",
    "BoxOffice": "$209,364,921",
    "Production": "Paramount Studios",
    "Website": "http://www.missionimpossible.com",
    "Response": "True"
  },
  "188": {
    "Title": "Mission: Impossible - Rogue Nation",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "31 Jul 2015",
    "Runtime": "131 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Christopher McQuarrie",
    "Writer": "Christopher McQuarrie (screenplay), Christopher McQuarrie (story), Drew Pearce (story), Bruce Geller (television series)",
    "Actors": "Tom Cruise, Jeremy Renner, Simon Pegg, Rebecca Ferguson",
    "Plot": "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
    "Language": "English, Swedish, German",
    "Country": "China, Hong Kong, USA",
    "Awards": "6 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.4",
    "imdbVotes": "291,583",
    "imdbID": "tt2381249",
    "Type": "movie",
    "DVD": "15 Dec 2015",
    "BoxOffice": "$154,979,949",
    "Production": "Paramount Pictures",
    "Website": "http://www.missionimpossible.com/",
    "Response": "True"
  },
  "189": {
    "Title": "Mission: Impossible II",
    "Year": "2000",
    "Rated": "PG-13",
    "Released": "24 May 2000",
    "Runtime": "123 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "John Woo",
    "Writer": "Bruce Geller (creator television series Mission: Impossible), Ronald D. Moore (story), Brannon Braga (story), Robert Towne (screenplay)",
    "Actors": "Tom Cruise, Dougray Scott, Thandie Newton, Ving Rhames",
    "Plot": "IMF Agent Ethan Hunt is sent to Sydney, to find and destroy a genetically modified disease called \"Chimera\".",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "11 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.1",
    "imdbVotes": "279,908",
    "imdbID": "tt0120755",
    "Type": "movie",
    "DVD": "08 Jul 2003",
    "BoxOffice": "N/A",
    "Production": "Vanguard",
    "Website": "N/A",
    "Response": "True"
  },
  "190": {
    "Title": "Mission: Impossible III",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "05 May 2006",
    "Runtime": "126 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "J.J. Abrams",
    "Writer": "Alex Kurtzman, Roberto Orci, J.J. Abrams, Bruce Geller (television series)",
    "Actors": "Tom Cruise, Philip Seymour Hoffman, Ving Rhames, Billy Crudup",
    "Plot": "IMF Agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancee in response.",
    "Language": "English, Italian, Mandarin, Cantonese, German, Czech",
    "Country": "USA, Germany, China, Italy",
    "Awards": "7 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "6.9",
    "imdbVotes": "294,786",
    "imdbID": "tt0317919",
    "Type": "movie",
    "DVD": "30 Oct 2006",
    "BoxOffice": "$133,400,000",
    "Production": "Paramount Pictures",
    "Website": "http://www.missionimpossible.com/",
    "Response": "True"
  },
  "191": {
    "Title": "Moana",
    "Year": "2016",
    "Rated": "PG",
    "Released": "23 Nov 2016",
    "Runtime": "107 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Ron Clements, John Musker, Don Hall(co-director), Chris Williams(co-director)",
    "Writer": "Jared Bush (screenplay by), Ron Clements (story by), John Musker (story by), Chris Williams (story by), Don Hall (story by), Pamela Ribon (story by), Aaron Kandell (story by), Jordan Kandell (story by)",
    "Actors": "Auli'i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison",
    "Plot": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 18 wins & 83 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.6",
    "imdbVotes": "203,152",
    "imdbID": "tt3521164",
    "Type": "movie",
    "DVD": "07 Mar 2017",
    "BoxOffice": "$248,752,120",
    "Production": "Walt Disney Pictures",
    "Website": "http://movies.disney.com/moana",
    "Response": "True"
  },
  "192": {
    "Title": "Monsters, Inc.",
    "Year": "2001",
    "Rated": "G",
    "Released": "02 Nov 2001",
    "Runtime": "92 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Pete Docter, David Silverman(co-director), Lee Unkrich(co-director)",
    "Writer": "Pete Docter (original story by), Jill Culton (original story by), Jeff Pidgeon (original story by), Ralph Eggleston (original story by), Andrew Stanton (screenplay by), Daniel Gerson (screenplay by), Bob Peterson (additional story material), David Silverman (additional story material), Joe Ranft (additional story material), Robert L. Baird (additional screenplay material), Rhett Reese (additional screenplay material), Jonathan Roberts (additional screenplay material)",
    "Actors": "John Goodman, Billy Crystal, Mary Gibbs, Steve Buscemi",
    "Plot": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, 2 monsters realize things may not be what they think.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 13 wins & 38 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "78/100"
      }
    ],
    "Metascore": "78",
    "imdbRating": "8.1",
    "imdbVotes": "704,946",
    "imdbID": "tt0198781",
    "Type": "movie",
    "DVD": "19 Feb 2013",
    "BoxOffice": "$34,034,168",
    "Production": "Buena Vista Distribution Compa",
    "Website": "http://disney.go.com/monstersinc/index.html",
    "Response": "True"
  },
  "193": {
    "Title": "Moulin Rouge!",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "01 Jun 2001",
    "Runtime": "127 min",
    "Genre": "Drama, Musical, Romance",
    "Director": "Baz Luhrmann",
    "Writer": "Baz Luhrmann, Craig Pearce",
    "Actors": "Nicole Kidman, Ewan McGregor, John Leguizamo, Jim Broadbent",
    "Plot": "A poet falls for a beautiful courtesan whom a jealous duke covets.",
    "Language": "English, French, Spanish",
    "Country": "Australia, USA",
    "Awards": "Won 2 Oscars. Another 84 wins & 129 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWFhYjliNjYtYjNhNS00OGExLWFhMjQtNDgwOWYyNWJiYzhmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "76%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.6",
    "imdbVotes": "245,452",
    "imdbID": "tt0203009",
    "Type": "movie",
    "DVD": "18 Dec 2001",
    "BoxOffice": "$55,093,223",
    "Production": "20th Century Fox",
    "Website": "http://www.moulinrougemovie.com",
    "Response": "True"
  },
  "194": {
    "Title": "Mulan",
    "Year": "1998",
    "Rated": "G",
    "Released": "19 Jun 1998",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Tony Bancroft, Barry Cook",
    "Writer": "Robert D. San Souci (based on a story by), Rita Hsiao (screenplay by), Chris Sanders (screenplay by), Philip LaZebnik (screenplay by), Raymond Singer (screenplay by), Eugenia Bostwick-Singer (screenplay by), Dean DeBlois (story co-head), John Sanford (story), Chris Williams (story), Tim Hodge (story), Julius Aguimatang (story), Burny Mattinson (story), Lorna Cook (story), Barry Johnson (story), Thom Enriquez (story), Ed Gombert (story), Joe Grant (story), Floyd Norman (story), Linda Woolverton (additional story material), Jodi Ann Johnson (additional story material), Alan Ormsby (additional story material), David Reynolds (additional story material), Don Dougherty (additional story material), Jorgen Klubien (additional story material), Denis Rich (additional story material), Joe Ekers (additional story material), Theodore Newton (additional story material), Larry Scholl (additional story material), Daan Jippes (additional story material), Frank Nissen (additional story material), Jeff Snow (additional story material)",
    "Actors": "Miguel Ferrer, Harvey Fierstein, Freda Foh Shen, June Foray",
    "Plot": "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.",
    "Language": "English, Mandarin",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 17 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODkxNGQ1NWYtNzg0Ny00Yjg3LThmZTItMjE2YjhmZTQ0ODY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "7.6",
    "imdbVotes": "210,016",
    "imdbID": "tt0120762",
    "Type": "movie",
    "DVD": "09 Nov 1999",
    "BoxOffice": "N/A",
    "Production": "Buena Vista",
    "Website": "N/A",
    "Response": "True"
  },
  "195": {
    "Title": "The Mummy",
    "Year": "1999",
    "Rated": "PG-13",
    "Released": "07 May 1999",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Stephen Sommers",
    "Writer": "Stephen Sommers (screen story), Lloyd Fonvielle (screen story), Kevin Jarre (screen story), Stephen Sommers (screenplay)",
    "Actors": "Brendan Fraser, Rachel Weisz, John Hannah, Arnold Vosloo",
    "Plot": "An American serving in the French Foreign Legion on an archaeological dig at the ancient city of Hamunaptra accidentally awakens a mummy that wreaks havoc on him, and his crew.",
    "Language": "English, Egyptian (Ancient), Arabic, Chinese, Hebrew, Hungarian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 5 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjc2MDY0NzItY2JlMi00ZmZmLTkxMTQtZTcwYmMwNzdmYzdjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "7.0",
    "imdbVotes": "355,993",
    "imdbID": "tt0120616",
    "Type": "movie",
    "DVD": "28 Sep 1999",
    "BoxOffice": "N/A",
    "Production": "Universal Pictures",
    "Website": "http://www.themummy.com",
    "Response": "True"
  },
  "196": {
    "Title": "The Mummy Returns",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "04 May 2001",
    "Runtime": "130 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Stephen Sommers",
    "Writer": "Stephen Sommers",
    "Actors": "Brendan Fraser, Rachel Weisz, John Hannah, Arnold Vosloo",
    "Plot": "The mummified body of Imhotep is shipped to a museum in London, where he once again wakes and begins his campaign of rage and terror.",
    "Language": "English, Arabic",
    "Country": "USA",
    "Awards": "6 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NzU1NTk2MV5BMl5BanBnXkFtZTgwMjIwMzcxMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "47%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "6.3",
    "imdbVotes": "275,224",
    "imdbID": "tt0209163",
    "Type": "movie",
    "DVD": "02 Oct 2001",
    "BoxOffice": "$200,691,120",
    "Production": "Universal Pictures",
    "Website": "http://www.themummy.com",
    "Response": "True"
  },
  "197": {
    "Title": "The Mummy: Tomb of the Dragon Emperor",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "01 Aug 2008",
    "Runtime": "112 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Rob Cohen",
    "Writer": "Alfred Gough, Miles Millar",
    "Actors": "Brendan Fraser, Jet Li, Maria Bello, John Hannah",
    "Plot": "In the Far East, Alex O'Connell, the son of famed mummy fighters Rick and Evy O'Connell, unearths the mummy of the first Emperor of Qin -- a shape-shifting entity cursed by a witch centuries ago.",
    "Language": "English, Mandarin, Sanskrit",
    "Country": "USA, Germany, China",
    "Awards": "2 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "13%"
      },
      {
        "Source": "Metacritic",
        "Value": "31/100"
      }
    ],
    "Metascore": "31",
    "imdbRating": "5.2",
    "imdbVotes": "135,472",
    "imdbID": "tt0859163",
    "Type": "movie",
    "DVD": "16 Dec 2008",
    "BoxOffice": "$101,600,000",
    "Production": "Universal Pictures",
    "Website": "http://www.themummy.com/",
    "Response": "True"
  },
  "198": {
    "Title": "My Big Fat Greek Wedding",
    "Year": "2002",
    "Rated": "PG",
    "Released": "02 Aug 2002",
    "Runtime": "95 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Joel Zwick",
    "Writer": "Nia Vardalos",
    "Actors": "Nia Vardalos, Michael Constantine, Christina Eleusiniotis, Kaylee Vieira",
    "Plot": "A young Greek woman falls in love with a non-Greek and struggles to get her family to accept him while she comes to terms with her heritage and cultural identity.",
    "Language": "English, Greek",
    "Country": "Canada, USA",
    "Awards": "Nominated for 1 Oscar. Another 20 wins & 28 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzcwOWU4NGEtYjUyMy00MDNlLThiN2MtYzFlMjk4Y2FhNjlmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "76%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "6.6",
    "imdbVotes": "111,083",
    "imdbID": "tt0259446",
    "Type": "movie",
    "DVD": "11 Feb 2003",
    "BoxOffice": "$241,250,669",
    "Production": "IFC Films",
    "Website": "http://movies.yahoo.com/greekwedding",
    "Response": "True"
  },
  "199": {
    "Title": "Nacho Libre",
    "Year": "2006",
    "Rated": "PG",
    "Released": "16 Jun 2006",
    "Runtime": "92 min",
    "Genre": "Comedy, Family, Sport",
    "Director": "Jared Hess",
    "Writer": "Jared Hess, Jerusha Hess, Mike White",
    "Actors": "Jack Black, Ana de la Reguera, Héctor Jiménez, Darius Rose",
    "Plot": "Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).",
    "Language": "English, Spanish",
    "Country": "Germany, USA",
    "Awards": "1 win & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2ZkNDgxMjMtZmRiYS00MzFkLTk5ZjgtZDJkZWMzYmUxYjg4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "40%"
      },
      {
        "Source": "Metacritic",
        "Value": "52/100"
      }
    ],
    "Metascore": "52",
    "imdbRating": "5.7",
    "imdbVotes": "73,389",
    "imdbID": "tt0457510",
    "Type": "movie",
    "DVD": "24 Oct 2006",
    "BoxOffice": "$80,200,000",
    "Production": "Paramount Pictures",
    "Website": "http://www.nacholibre.com/",
    "Response": "True"
  },
  "200": {
    "Title": "Newsies",
    "Year": "1992",
    "Rated": "PG",
    "Released": "10 Apr 1992",
    "Runtime": "121 min",
    "Genre": "Drama, Family, History",
    "Director": "Kenny Ortega",
    "Writer": "Bob Tzudiker, Noni White",
    "Actors": "Christian Bale, David Moscow, Luke Edwards, Max Casella",
    "Plot": "A musical based on the New York City newsboy strike of 1899. When young newspaper sellers are exploited beyond reason by their bosses they set out to enact change and are met by the ruthlessness of big business.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjVjNWM5MjgtYzdhMy00N2E4LWJlMmYtM2JmMDFjNGFjZDk3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "41%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "7.0",
    "imdbVotes": "16,948",
    "imdbID": "tt0104990",
    "Type": "movie",
    "DVD": "15 Jan 2002",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "201": {
    "Title": "The Nightmare Before Christmas",
    "Year": "1993",
    "Rated": "PG",
    "Released": "29 Oct 1993",
    "Runtime": "76 min",
    "Genre": "Animation, Family, Fantasy, Musical",
    "Director": "Henry Selick",
    "Writer": "Tim Burton (story and characters), Michael McDowell (adaptation), Caroline Thompson (screenplay)",
    "Actors": "Danny Elfman, Chris Sarandon, Catherine O'Hara, William Hickey",
    "Plot": "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "8.0",
    "imdbVotes": "257,227",
    "imdbID": "tt0107688",
    "Type": "movie",
    "DVD": "02 Dec 1997",
    "BoxOffice": "$8,616,662",
    "Production": "Touchstone Pictures",
    "Website": "http://www.Nightmare3DMovie.com/",
    "Response": "True"
  },
  "202": {
    "Title": "Now You See Me",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "31 May 2013",
    "Runtime": "115 min",
    "Genre": "Crime, Mystery, Thriller",
    "Director": "Louis Leterrier",
    "Writer": "Ed Solomon (screenplay), Boaz Yakin (screenplay), Edward Ricourt (screenplay), Boaz Yakin (story), Edward Ricourt (story)",
    "Actors": "Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Isla Fisher",
    "Plot": "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
    "Language": "English, French",
    "Country": "USA, France",
    "Awards": "1 win & 3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "49%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.3",
    "imdbVotes": "532,957",
    "imdbID": "tt1670345",
    "Type": "movie",
    "DVD": "03 Sep 2013",
    "BoxOffice": "$117,698,894",
    "Production": "Lionsgate Films",
    "Website": "http://nowyouseememovie.com/",
    "Response": "True"
  },
  "203": {
    "Title": "Now You See Me 2",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "10 Jun 2016",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Comedy, Crime, Mystery, Thriller",
    "Director": "Jon M. Chu",
    "Writer": "Ed Solomon (screenplay by), Ed Solomon (story by), Peter Chiarelli (story by), Boaz Yakin (based on characters created by), Edward Ricourt (based on characters created by)",
    "Actors": "Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Dave Franco",
    "Plot": "The Four Horsemen resurface, and are forcibly recruited by a tech genius to pull off their most impossible heist yet.",
    "Language": "English, Mandarin, Cantonese",
    "Country": "France, USA",
    "Awards": "4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQ0NDgwODQ3NV5BMl5BanBnXkFtZTgwOTYxNjc2ODE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "35%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "6.5",
    "imdbVotes": "198,905",
    "imdbID": "tt3110958",
    "Type": "movie",
    "DVD": "06 Sep 2016",
    "BoxOffice": "$65,030,563",
    "Production": "Lionsgate",
    "Website": "http://www.nowyouseeme.movie/",
    "Response": "True"
  },
  "204": {
    "Title": "Olympus Has Fallen",
    "Year": "2013",
    "Rated": "R",
    "Released": "22 Mar 2013",
    "Runtime": "119 min",
    "Genre": "Action, Thriller",
    "Director": "Antoine Fuqua",
    "Writer": "Creighton Rothenberger, Katrin Benedikt",
    "Actors": "Gerard Butler, Aaron Eckhart, Finley Jacobsen, Dylan McDermott",
    "Plot": "Disgraced Secret Service agent (and former presidential guard) Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack; using his inside knowledge, Banning works with national security to rescue the President from his kidnappers.",
    "Language": "English, Korean",
    "Country": "USA",
    "Awards": "1 win & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTU0NmY4MWYtNzRlMS00MDkxLWJkODYtOTM3NGI2ZDc1NTJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "48%"
      },
      {
        "Source": "Metacritic",
        "Value": "41/100"
      }
    ],
    "Metascore": "41",
    "imdbRating": "6.5",
    "imdbVotes": "228,667",
    "imdbID": "tt2302755",
    "Type": "movie",
    "DVD": "13 Aug 2013",
    "BoxOffice": "$98,600,000",
    "Production": "FilmDistrict",
    "Website": "http://olympusmovie.com",
    "Response": "True"
  },
  "205": {
    "Title": "Redefining the Line: The Making of One Hundred and One Dalmatians",
    "Year": "2001",
    "Rated": "N/A",
    "Released": "N/A",
    "Runtime": "33 min",
    "Genre": "Documentary, Short",
    "Director": "N/A",
    "Writer": "N/A",
    "Actors": "Ken Anderson, James Baxter, Jerry Beck, Brad Bird",
    "Plot": "N/A",
    "Language": "English",
    "Country": "N/A",
    "Awards": "N/A",
    "Poster": "N/A",
    "Ratings": [],
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt4576582",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  "206": {
    "Title": "The Other Side of Heaven",
    "Year": "2001",
    "Rated": "PG",
    "Released": "12 Apr 2002",
    "Runtime": "113 min",
    "Genre": "Adventure, Biography, Drama",
    "Director": "Mitch Davis",
    "Writer": "Mitch Davis, John H. Groberg (book)",
    "Actors": "Christopher Gorham, Anne Hathaway, Joe Folau, Nathaniel Lees",
    "Plot": "John Groberg, a farm kid from Idaho Falls, crosses an ocean to become a missionary in the remote and exotic Tongan islands during the 1950s.",
    "Language": "English, Tonga",
    "Country": "USA",
    "Awards": "1 win.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA0NTY1NzM2MV5BMl5BanBnXkFtZTgwMzgyMzYzNTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "29%"
      },
      {
        "Source": "Metacritic",
        "Value": "38/100"
      }
    ],
    "Metascore": "38",
    "imdbRating": "6.5",
    "imdbVotes": "3,613",
    "imdbID": "tt0250371",
    "Type": "movie",
    "DVD": "01 Apr 2003",
    "BoxOffice": "N/A",
    "Production": "Excel Entertainmen",
    "Website": "http://www.othersideofheaven.com",
    "Response": "True"
  },
  "207": {
    "Title": "Pacific Rim",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "12 Jul 2013",
    "Runtime": "131 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Guillermo del Toro",
    "Writer": "Travis Beacham (screenplay), Guillermo del Toro (screenplay), Travis Beacham (story)",
    "Actors": "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
    "Plot": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
    "Language": "English, Japanese, Cantonese, Mandarin",
    "Country": "USA",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 6 wins & 47 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "6.9",
    "imdbVotes": "432,958",
    "imdbID": "tt1663662",
    "Type": "movie",
    "DVD": "15 Oct 2013",
    "BoxOffice": "$101,785,482",
    "Production": "Warner Bros. Pictures",
    "Website": "http://pacificrimmovie.com",
    "Response": "True"
  },
  "208": {
    "Title": "Pacific Rim: Uprising",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "23 Mar 2018",
    "Runtime": "111 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven S. DeKnight",
    "Writer": "Steven S. DeKnight, Emily Carmichael, Kira Snyder, T.S. Nowlin, Travis Beacham (based on characters created by)",
    "Actors": "John Boyega, Scott Eastwood, Cailee Spaeny, Burn Gorman",
    "Plot": "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.",
    "Language": "English, Mandarin, Cantonese",
    "Country": "UK, China, Japan, USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "43%"
      },
      {
        "Source": "Metacritic",
        "Value": "44/100"
      }
    ],
    "Metascore": "44",
    "imdbRating": "5.7",
    "imdbVotes": "72,008",
    "imdbID": "tt2557478",
    "Type": "movie",
    "DVD": "19 Jun 2018",
    "BoxOffice": "N/A",
    "Production": "Universal Pictures",
    "Website": "http://www.pacificrimmovie.com/",
    "Response": "True"
  },
  "209": {
    "Title": "Patch Adams",
    "Year": "1998",
    "Rated": "PG-13",
    "Released": "25 Dec 1998",
    "Runtime": "115 min",
    "Genre": "Biography, Comedy, Drama",
    "Director": "Tom Shadyac",
    "Writer": "Patch Adams (book), Maureen Mylander (book), Steve Oedekerk (screenplay)",
    "Actors": "Robin Williams, Daniel London, Monica Potter, Philip Seymour Hoffman",
    "Plot": "The true story of a heroic man, Hunter \"Patch\" Adams, determined to become a medical doctor because he enjoys helping people. He ventured where no doctor had ventured before, using humour and pathos.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 1 win & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzM4Y2FlNzYtZmY5Yy00NzU4LTk1ODItY2NjYWYzYzUyZGM3L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "23%"
      },
      {
        "Source": "Metacritic",
        "Value": "25/100"
      }
    ],
    "Metascore": "25",
    "imdbRating": "6.7",
    "imdbVotes": "90,937",
    "imdbID": "tt0129290",
    "Type": "movie",
    "DVD": "22 Jun 1999",
    "BoxOffice": "N/A",
    "Production": "Universal Studios",
    "Website": "http://www.patchadams.com",
    "Response": "True"
  },
  "210": {
    "Title": "Paul Blart: Mall Cop",
    "Year": "2009",
    "Rated": "PG",
    "Released": "16 Jan 2009",
    "Runtime": "91 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Steve Carr",
    "Writer": "Kevin James, Nick Bakay",
    "Actors": "Kevin James, Keir O'Donnell, Jayma Mays, Raini Rodriguez",
    "Plot": "When a shopping mall is taken over by a gang of organized crooks, it's up to a mild-mannered security guard to save the day.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2NzA1MzE1NF5BMl5BanBnXkFtZTcwOTYyNDIzMg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "32%"
      },
      {
        "Source": "Metacritic",
        "Value": "39/100"
      }
    ],
    "Metascore": "39",
    "imdbRating": "5.2",
    "imdbVotes": "92,628",
    "imdbID": "tt1114740",
    "Type": "movie",
    "DVD": "19 May 2009",
    "BoxOffice": "$146,336,178",
    "Production": "Sony Pictures/Columbia Pictures",
    "Website": "http://www.paulblartmallcop.com/",
    "Response": "True"
  },
  "211": {
    "Title": "Pirates of the Caribbean: At World's End",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "25 May 2007",
    "Runtime": "169 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Gore Verbinski",
    "Writer": "Ted Elliott, Terry Rossio, Ted Elliott (characters), Terry Rossio (characters), Stuart Beattie (characters), Jay Wolpert (characters)",
    "Actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
    "Plot": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 20 wins & 44 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "45%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.1",
    "imdbVotes": "537,020",
    "imdbID": "tt0449088",
    "Type": "movie",
    "DVD": "04 Dec 2007",
    "BoxOffice": "$309,404,152",
    "Production": "Buena Vista",
    "Website": "http://disney.go.com/disneypictures/pirates/atworldsend/",
    "Response": "True"
  },
  "212": {
    "Title": "Pirates of the Caribbean: Dead Man's Chest",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "07 Jul 2006",
    "Runtime": "151 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Gore Verbinski",
    "Writer": "Ted Elliott, Terry Rossio, Ted Elliott (characters), Terry Rossio (characters), Stuart Beattie (characters), Jay Wolpert (characters)",
    "Actors": "Johnny Depp, Orlando Bloom, Keira Knightley, Jack Davenport",
    "Plot": "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
    "Language": "English, Turkish, Greek, Mandarin, French",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 42 wins & 53 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "54%"
      },
      {
        "Source": "Metacritic",
        "Value": "53/100"
      }
    ],
    "Metascore": "53",
    "imdbRating": "7.3",
    "imdbVotes": "588,897",
    "imdbID": "tt0383574",
    "Type": "movie",
    "DVD": "05 Dec 2006",
    "BoxOffice": "$423,032,628",
    "Production": "Buena Vista",
    "Website": "http://pirates.movies.com",
    "Response": "True"
  },
  "213": {
    "Title": "Pirates of the Caribbean: Dead Men Tell No Tales",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "26 May 2017",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Joachim Rønning, Espen Sandberg",
    "Writer": "Jeff Nathanson (screenplay by), Jeff Nathanson (story by), Terry Rossio (story by), Ted Elliott (based on characters created by), Terry Rossio (based on characters created by), Stuart Beattie (based on characters created by), Jay Wolpert (based on characters created by)",
    "Actors": "Johnny Depp, Javier Bardem, Geoffrey Rush, Brenton Thwaites",
    "Plot": "Captain Jack Sparrow searches for the trident of Poseidon while being pursued by an undead sea captain and his crew.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "9 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "29%"
      },
      {
        "Source": "Metacritic",
        "Value": "39/100"
      }
    ],
    "Metascore": "39",
    "imdbRating": "6.6",
    "imdbVotes": "206,303",
    "imdbID": "tt1790809",
    "Type": "movie",
    "DVD": "03 Oct 2017",
    "BoxOffice": "$172,537,139",
    "Production": "Walt Disney Pictures",
    "Website": "http://pirates.disney.com/pirates-of-the-caribbean-dead-men-tell-no-tales",
    "Response": "True"
  },
  "214": {
    "Title": "Pirates of the Caribbean: On Stranger Tides",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "20 May 2011",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Rob Marshall",
    "Writer": "Ted Elliott (screenplay), Terry Rossio (screenplay), Ted Elliott (screen story), Terry Rossio (screen story), Ted Elliott (characters), Terry Rossio (characters), Stuart Beattie (characters), Jay Wolpert (characters), Tim Powers (novel)",
    "Actors": "Johnny Depp, Penélope Cruz, Geoffrey Rush, Ian McShane",
    "Plot": "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "2 wins & 31 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "32%"
      },
      {
        "Source": "Metacritic",
        "Value": "45/100"
      }
    ],
    "Metascore": "45",
    "imdbRating": "6.6",
    "imdbVotes": "431,511",
    "imdbID": "tt1298650",
    "Type": "movie",
    "DVD": "18 Oct 2011",
    "BoxOffice": "$241,063,875",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/Pirates",
    "Response": "True"
  },
  "215": {
    "Title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "09 Jul 2003",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Gore Verbinski",
    "Writer": "Ted Elliott (screen story), Terry Rossio (screen story), Stuart Beattie (screen story), Jay Wolpert (screen story), Ted Elliott (screenplay), Terry Rossio (screenplay)",
    "Actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
    "Plot": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 5 Oscars. Another 36 wins & 96 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "8.0",
    "imdbVotes": "931,847",
    "imdbID": "tt0325980",
    "Type": "movie",
    "DVD": "02 Dec 2003",
    "BoxOffice": "$305,343,252",
    "Production": "Buena Vista Pictures",
    "Website": "http://disney.go.com/disneyvideos/liveaction/pirates/main_site/main.html",
    "Response": "True"
  },
  "216": {
    "Title": "Pitch Perfect",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "05 Oct 2012",
    "Runtime": "112 min",
    "Genre": "Comedy, Music, Romance",
    "Director": "Jason Moore",
    "Writer": "Kay Cannon (screenplay), Mickey Rapkin (based on the book by)",
    "Actors": "Anna Kendrick, Skylar Astin, Ben Platt, Brittany Snow",
    "Plot": "Beca, a freshman at Barden University, is cajoled into joining The Bellas, her school's all-girls singing group. Injecting some much needed energy into their repertoire, The Bellas take on their male rivals in a campus competition.",
    "Language": "English",
    "Country": "USA",
    "Awards": "7 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "80%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "7.2",
    "imdbVotes": "245,665",
    "imdbID": "tt1981677",
    "Type": "movie",
    "DVD": "18 Dec 2012",
    "BoxOffice": "$61,100,000",
    "Production": "Universal Studios",
    "Website": "http://www.pitchperfectmovie.com",
    "Response": "True"
  },
  "217": {
    "Title": "Pitch Perfect 2",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "15 May 2015",
    "Runtime": "115 min",
    "Genre": "Comedy, Music",
    "Director": "Elizabeth Banks",
    "Writer": "Kay Cannon, Mickey Rapkin (based on the book by)",
    "Actors": "Anna Kendrick, Rebel Wilson, Hailee Steinfeld, Brittany Snow",
    "Plot": "After a humiliating commando performance at The Kennedy Center, the Barden Bellas enter an international competition that no American group has ever won in order to regain their status and right to perform.",
    "Language": "English, German",
    "Country": "USA",
    "Awards": "9 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzk4OTM2NzMzNl5BMl5BanBnXkFtZTgwNTAzNDE0NDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "6.4",
    "imdbVotes": "124,474",
    "imdbID": "tt2848292",
    "Type": "movie",
    "DVD": "22 Sep 2015",
    "BoxOffice": "$165,744,048",
    "Production": "Universal Pictures",
    "Website": "http://www.pitchperfectmovie.com/",
    "Response": "True"
  },
  "218": {
    "Title": "Pocahontas",
    "Year": "1995",
    "Rated": "G",
    "Released": "23 Jun 1995",
    "Runtime": "81 min",
    "Genre": "Animation, Adventure, Drama",
    "Director": "Mike Gabriel, Eric Goldberg",
    "Writer": "Carl Binder, Susannah Grant, Philip LaZebnik, Glen Keane (story), Joe Grant (story), Ralph Zondag (story), Burny Mattinson (story), Ed Gombert (story), Kaan Kalyon (story), Francis Glebas (story), Rob Gibbs (story), Bruce Morris (story), Todd Kurosawa (story), Duncan Marjoribanks (story), Chris Buck (story), Andrew Chapman (additional story development), Randy Cartwright (additional story development), Will Finn (additional story development), Broose Johnson (additional story development), T. Daniel Hofstedt (additional story development), David Pruiksma (additional story development), Nik Ranieri (additional story development), Vincent DeFrances (additional story development), Tom Mazzocco (additional story development), Don Dougherty (additional story development), Jorgen Klubien (additional story development), Mike Gabriel (based on an idea by)",
    "Actors": "Joe Baker, Christian Bale, Irene Bedard, Billy Connolly",
    "Plot": "An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth-century Virginia.",
    "Language": "English, Algonquin",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 13 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzc4YzhiN2ItY2Y4NC00YTA0LWEyMjEtNzllNTcxZDdjODhiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.7",
    "imdbVotes": "144,107",
    "imdbID": "tt0114148",
    "Type": "movie",
    "DVD": "06 Jun 2000",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Distribution Compa",
    "Website": "N/A",
    "Response": "True"
  },
  "219": {
    "Title": "The Polar Express",
    "Year": "2004",
    "Rated": "G",
    "Released": "10 Nov 2004",
    "Runtime": "100 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Robert Zemeckis",
    "Writer": "Chris Van Allsburg (book), Robert Zemeckis (screenplay), William Broyles Jr. (screenplay)",
    "Actors": "Tom Hanks, Leslie Zemeckis, Eddie Deezen, Nona Gaye",
    "Plot": "On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 5 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "55%"
      },
      {
        "Source": "Metacritic",
        "Value": "61/100"
      }
    ],
    "Metascore": "61",
    "imdbRating": "6.6",
    "imdbVotes": "145,070",
    "imdbID": "tt0338348",
    "Type": "movie",
    "DVD": "22 Nov 2005",
    "BoxOffice": "$162,800,000",
    "Production": "Warner Bros. Pictures",
    "Website": "http://polarexpressmovie.warnerbros.com/",
    "Response": "True"
  },
  "220": {
    "Title": "Power Rangers",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "24 Mar 2017",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Dean Israelite",
    "Writer": "John Gatins (screenplay by), Matt Sazama (story by), Burk Sharpless (story by), Michele Mulroney (story by), Kieran Mulroney (story by), Haim Saban (based upon \"Power Rangers\" created by), Saburo Yatsude (television series: \"Super Sentai\"), Shôtarô Ishinomori (television series: \"Super Sentai\")",
    "Actors": "Dacre Montgomery, Naomi Scott, RJ Cyler, Ludi Lin",
    "Plot": "A group of high-school students, who are infused with unique superpowers, harness their abilities in order to save the world.",
    "Language": "English, Mandarin",
    "Country": "USA, Hong Kong, Japan, Mexico, Canada, New Zealand",
    "Awards": "6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MTkxNzc5NF5BMl5BanBnXkFtZTgwOTM2Mzk3MTI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "46%"
      },
      {
        "Source": "Metacritic",
        "Value": "44/100"
      }
    ],
    "Metascore": "44",
    "imdbRating": "6.0",
    "imdbVotes": "85,929",
    "imdbID": "tt3717490",
    "Type": "movie",
    "DVD": "27 Jun 2017",
    "BoxOffice": "$85,275,488",
    "Production": "Lionsgate Films",
    "Website": "http://www.PowerRangers.Movie",
    "Response": "True"
  },
  "221": {
    "Title": "Pride and Prejudice",
    "Year": "1995",
    "Rated": "TV-PG",
    "Released": "14 Jan 1996",
    "Runtime": "327 min",
    "Genre": "Drama, Romance",
    "Director": "N/A",
    "Writer": "N/A",
    "Actors": "Jennifer Ehle, Colin Firth, Susannah Harker, Julia Sawalha",
    "Plot": "While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.",
    "Language": "English",
    "Country": "UK",
    "Awards": "Won 1 Primetime Emmy. Another 8 wins & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.9/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.9",
    "imdbVotes": "64,411",
    "imdbID": "tt0112130",
    "Type": "series",
    "totalSeasons": "1",
    "Response": "True"
  },
  "222": {
    "Title": "Prince of Persia: The Sands of Time",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "28 May 2010",
    "Runtime": "116 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Mike Newell",
    "Writer": "Boaz Yakin (screenplay), Doug Miro (screenplay), Carlo Bernard (screenplay), Jordan Mechner (screen story), Jordan Mechner (video game series \"Prince of Persia\")",
    "Actors": "Jake Gyllenhaal, Gemma Arterton, Ben Kingsley, Alfred Molina",
    "Plot": "A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "36%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "6.6",
    "imdbVotes": "246,222",
    "imdbID": "tt0473075",
    "Type": "movie",
    "DVD": "14 Sep 2010",
    "BoxOffice": "$90,755,643",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/PrinceOfPersia",
    "Response": "True"
  },
  "223": {
    "Title": "The Princess and the Frog",
    "Year": "2009",
    "Rated": "G",
    "Released": "11 Dec 2009",
    "Runtime": "97 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Ron Clements, John Musker",
    "Writer": "Ron Clements (story by), John Musker (story by), Greg Erb (story by), Jason Oremland (story by), Ron Clements (screenplay by), John Musker (screenplay by), Rob Edwards (screenplay by), E.D. Baker (story inspired in part by \"The Frog Princess\" by)",
    "Actors": "Anika Noni Rose, Bruno Campos, Keith David, Michael-Leon Wooley",
    "Plot": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 11 wins & 38 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.1",
    "imdbVotes": "104,329",
    "imdbID": "tt0780521",
    "Type": "movie",
    "DVD": "16 Mar 2010",
    "BoxOffice": "$104,374,107",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.disney.com/princessandthefrog",
    "Response": "True"
  },
  "224": {
    "Title": "The Princess Bride",
    "Year": "1987",
    "Rated": "PG",
    "Released": "09 Oct 1987",
    "Runtime": "98 min",
    "Genre": "Adventure, Family, Fantasy, Romance",
    "Director": "Rob Reiner",
    "Writer": "William Goldman (book), William Goldman (screenplay)",
    "Actors": "Cary Elwes, Mandy Patinkin, Chris Sarandon, Christopher Guest",
    "Plot": "While home sick in bed, a young boy's grandfather reads him a story called The Princess Bride.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 7 wins & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "77/100"
      }
    ],
    "Metascore": "77",
    "imdbRating": "8.1",
    "imdbVotes": "344,399",
    "imdbID": "tt0093779",
    "Type": "movie",
    "DVD": "26 Jan 1999",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.theprincessbride-themovie.com/",
    "Response": "True"
  },
  "225": {
    "Title": "Project Almanac",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "30 Jan 2015",
    "Runtime": "106 min",
    "Genre": "Drama, Mystery, Sci-Fi",
    "Director": "Dean Israelite",
    "Writer": "Jason Pagan, Andrew Deutschman",
    "Actors": "Jonny Weston, Sofia Black-D'Elia, Sam Lerner, Allen Evangelista",
    "Plot": "A group of teens discover secret plans of a time machine, and construct one. However, things start to get out of control.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMjQ2NjI4OV5BMl5BanBnXkFtZTgwODc2NjUwNDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "36%"
      },
      {
        "Source": "Metacritic",
        "Value": "47/100"
      }
    ],
    "Metascore": "47",
    "imdbRating": "6.4",
    "imdbVotes": "69,296",
    "imdbID": "tt2436386",
    "Type": "movie",
    "DVD": "09 Jun 2015",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://www.projectalmanac.com/",
    "Response": "True"
  },
  "226": {
    "Title": "The Proposal",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "19 Jun 2009",
    "Runtime": "108 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Anne Fletcher",
    "Writer": "Peter Chiarelli",
    "Actors": "Sandra Bullock, Ryan Reynolds, Mary Steenburgen, Craig T. Nelson",
    "Plot": "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 7 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "44%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "6.7",
    "imdbVotes": "261,684",
    "imdbID": "tt1041829",
    "Type": "movie",
    "DVD": "13 Oct 2009",
    "BoxOffice": "$163,900,057",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.myspace.com/proposalmovie",
    "Response": "True"
  },
  "227": {
    "Title": "Quantum of Solace",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "14 Nov 2008",
    "Runtime": "106 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Marc Forster",
    "Writer": "Paul Haggis, Neal Purvis, Robert Wade",
    "Actors": "Daniel Craig, Olga Kurylenko, Mathieu Amalric, Judi Dench",
    "Plot": "James Bond descends into mystery as he tries to stop a mysterious organization from eliminating a country's most valuable resource.",
    "Language": "English, Spanish, Italian, French, Swiss German, German",
    "Country": "UK, USA",
    "Awards": "Nominated for 2 BAFTA Film Awards. Another 4 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "65%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.6",
    "imdbVotes": "367,303",
    "imdbID": "tt0830515",
    "Type": "movie",
    "DVD": "24 Mar 2009",
    "BoxOffice": "$168,400,000",
    "Production": "Sony/MGM",
    "Website": "http://www.007.com/",
    "Response": "True"
  },
  "228": {
    "Title": "A Quiet Place",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "06 Apr 2018",
    "Runtime": "90 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "John Krasinski",
    "Writer": "Bryan Woods (screenplay by), Scott Beck (screenplay by), John Krasinski (screenplay by), Bryan Woods (story by), Scott Beck (story by)",
    "Actors": "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
    "Plot": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    "Language": "English, American Sign Language",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "7.7",
    "imdbVotes": "213,655",
    "imdbID": "tt6644200",
    "Type": "movie",
    "DVD": "10 Jul 2018",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "https://www.facebook.com/AQuietPlaceMovie",
    "Response": "True"
  },
  "229": {
    "Title": "The R.M.",
    "Year": "2003",
    "Rated": "PG",
    "Released": "31 Jan 2003",
    "Runtime": "101 min",
    "Genre": "Comedy, Crime, Family",
    "Director": "Kurt Hale",
    "Writer": "Kurt Hale, John E. Moyer",
    "Actors": "Kirby Heyborne, Daryn Tufts, Will Swenson, Britani Bateman",
    "Plot": "Jared Phelps (Kirby Heyborne) has completed two years of full-time missionary service for The Church of Jesus Christ of Latter-day Saints. His mission president has promised him that he ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcyMTUyODAyM15BMl5BanBnXkFtZTYwMDc1NDk5._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "64%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.0",
    "imdbVotes": "651",
    "imdbID": "tt0341540",
    "Type": "movie",
    "DVD": "04 Jul 2006",
    "BoxOffice": "$367,216",
    "Production": "Halestorm Entertainment",
    "Website": "http://www.rmthemovie.com",
    "Response": "True"
  },
  "230": {
    "Title": "Ratatouille",
    "Year": "2007",
    "Rated": "G",
    "Released": "29 Jun 2007",
    "Runtime": "111 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Brad Bird, Jan Pinkava(co-director)",
    "Writer": "Brad Bird (screenplay), Jan Pinkava (original story by), Jim Capobianco (original story by), Brad Bird (original story by), Emily Cook (additional story material), Kathy Greenberg (additional story material), Bob Peterson (additional story material)",
    "Actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    "Plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 64 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "96/100"
      }
    ],
    "Metascore": "96",
    "imdbRating": "8.0",
    "imdbVotes": "549,754",
    "imdbID": "tt0382932",
    "Type": "movie",
    "DVD": "06 Nov 2007",
    "BoxOffice": "$112,408,657",
    "Production": "Disney/Pixar",
    "Website": "http://www.ratatouille.com/",
    "Response": "True"
  },
  "231": {
    "Title": "Ready Player One",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "29 Mar 2018",
    "Runtime": "140 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven Spielberg",
    "Writer": "Zak Penn (screenplay by), Ernest Cline (screenplay by), Ernest Cline (based on the novel by)",
    "Actors": "Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe",
    "Plot": "When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "7.6",
    "imdbVotes": "226,448",
    "imdbID": "tt1677720",
    "Type": "movie",
    "DVD": "03 Jul 2018",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "http://readyplayeronemovie.com/",
    "Response": "True"
  },
  "232": {
    "Title": "RED",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "15 Oct 2010",
    "Runtime": "111 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Robert Schwentke",
    "Writer": "Jon Hoeber (screenplay), Erich Hoeber (screenplay), Warren Ellis (graphic novel), Cully Hamner (graphic novel)",
    "Actors": "Bruce Willis, Mary-Louise Parker, Heidi von Palleske, Karl Urban",
    "Plot": "When his peaceful life is threatened by a high-tech assassin, former black-ops agent Frank Moses reassembles his old team in a last ditch effort to survive and uncover his assailants.",
    "Language": "English, Russian",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 4 wins & 18 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "7.1",
    "imdbVotes": "264,768",
    "imdbID": "tt1245526",
    "Type": "movie",
    "DVD": "25 Jan 2011",
    "BoxOffice": "$88,900,000",
    "Production": "Summit Entertainment",
    "Website": "http://red-themovie.com/",
    "Response": "True"
  },
  "233": {
    "Title": "The Road to El Dorado",
    "Year": "2000",
    "Rated": "PG",
    "Released": "31 Mar 2000",
    "Runtime": "89 min",
    "Genre": "Animation, Adventure, Comedy, Family, Romance",
    "Director": "Bibo Bergeron, Don Paul, Jeffrey Katzenberg",
    "Writer": "Terry Rossio (screenplay), Ted Elliott (screenplay), Karey Kirkpatrick (additional dialogue)",
    "Actors": "Kevin Kline, Kenneth Branagh, Rosie Perez, Armand Assante",
    "Plot": "Two swindlers get their hands on a map to the fabled city of gold, El Dorado.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTEzNWIwMzctOTE1YS00YjIyLTgwZGEtMTMxZDAzNzlmODMxXkEyXkFqcGdeQXVyMjgyMDk1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "48%"
      },
      {
        "Source": "Metacritic",
        "Value": "51/100"
      }
    ],
    "Metascore": "51",
    "imdbRating": "6.9",
    "imdbVotes": "71,612",
    "imdbID": "tt0138749",
    "Type": "movie",
    "DVD": "12 Dec 2000",
    "BoxOffice": "N/A",
    "Production": "Dreamworks",
    "Website": "http://www.roadtoeldorado.com",
    "Response": "True"
  },
  "234": {
    "Title": "Robin Hood",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "14 May 2010",
    "Runtime": "140 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Ridley Scott",
    "Writer": "Brian Helgeland (screenplay), Brian Helgeland (story), Ethan Reiff (story), Cyrus Voris (story)",
    "Actors": "Russell Crowe, Cate Blanchett, Max von Sydow, William Hurt",
    "Plot": "In 12th century England, Robin and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.",
    "Language": "English, French, Ukrainian",
    "Country": "USA, UK",
    "Awards": "1 win & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "43%"
      },
      {
        "Source": "Metacritic",
        "Value": "53/100"
      }
    ],
    "Metascore": "53",
    "imdbRating": "6.7",
    "imdbVotes": "233,414",
    "imdbID": "tt0955308",
    "Type": "movie",
    "DVD": "21 Sep 2010",
    "BoxOffice": "$105,219,735",
    "Production": "Universal",
    "Website": "http://www.robinhoodthemovie.com/",
    "Response": "True"
  },
  "235": {
    "Title": "Robots",
    "Year": "2005",
    "Rated": "PG",
    "Released": "11 Mar 2005",
    "Runtime": "91 min",
    "Genre": "Animation, Adventure, Comedy, Family, Sci-Fi",
    "Director": "Chris Wedge, Carlos Saldanha(co-director)",
    "Writer": "Ron Mita (story), Jim McClain (story), David Lindsay-Abaire (story), David Lindsay-Abaire (screenplay), Lowell Ganz (screenplay), Babaloo Mandel (screenplay)",
    "Actors": "Paula Abdul, Halle Berry, Lucille Bliss, Terry Bradshaw",
    "Plot": "In a robot world, a young idealistic inventor travels to the big city to join his inspiration's company, only to find himself opposing its sinister new management.",
    "Language": "English, Italian",
    "Country": "USA",
    "Awards": "2 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmJhNTQwY2MtYTU0Yy00NDVhLThiZTktNmMxZTk5Nzk3NzE2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "64%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "6.3",
    "imdbVotes": "118,033",
    "imdbID": "tt0358082",
    "Type": "movie",
    "DVD": "20 Sep 2005",
    "BoxOffice": "$128,107,031",
    "Production": "20th Century Fox",
    "Website": "http://www.robotsmovie.com/",
    "Response": "True"
  },
  "236": {
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "16 Dec 2016",
    "Runtime": "133 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Writer": "Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
    "Actors": "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
    "Plot": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 23 wins & 78 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "7.8",
    "imdbVotes": "443,466",
    "imdbID": "tt3748528",
    "Type": "movie",
    "DVD": "04 Apr 2017",
    "BoxOffice": "$532,171,696",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.starwars.com/",
    "Response": "True"
  },
  "237": {
    "Title": "Sabrina",
    "Year": "1954",
    "Rated": "NOT RATED",
    "Released": "15 Oct 1954",
    "Runtime": "113 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Billy Wilder",
    "Writer": "Billy Wilder (written for the screen by), Samuel A. Taylor (written for the screen by), Ernest Lehman (written for the screen by), Samuel A. Taylor (from the play by)",
    "Actors": "Humphrey Bogart, Audrey Hepburn, William Holden, Walter Hampden",
    "Plot": "A playboy becomes interested in the daughter of his family's chauffeur, but it's his more serious brother who would be the better man for her.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 5 wins & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmFlNTA1NWItODQxNC00YjFmLWE3ZWYtMzg3YTkwYmMxMjY2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.7",
    "imdbVotes": "51,078",
    "imdbID": "tt0047437",
    "Type": "movie",
    "DVD": "10 Apr 2001",
    "BoxOffice": "N/A",
    "Production": "Paramount Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "238": {
    "Title": "Saints and Soldiers",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "25 Mar 2005",
    "Runtime": "90 min",
    "Genre": "Action, Drama, War",
    "Director": "Ryan Little",
    "Writer": "Geoffrey Panos (original story), Geoffrey Panos (screenwriter), Matt Whitaker (screenwriter)",
    "Actors": "Corbin Allred, Alexander Polinsky, Kirby Heyborne, Larry Bagby",
    "Plot": "Four American soldiers and one Brit fighting in Europe during World War II struggle to return to Allied territory after being separated from U.S. forces during the historic Malmedy Massacre.",
    "Language": "English, German",
    "Country": "USA",
    "Awards": "16 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDEyNjg3NV5BMl5BanBnXkFtZTYwNDMyMjk2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "Metascore": "56",
    "imdbRating": "6.8",
    "imdbVotes": "18,981",
    "imdbID": "tt0373283",
    "Type": "movie",
    "DVD": "31 May 2005",
    "BoxOffice": "$1,004,940",
    "Production": "Excel Entertainment",
    "Website": "http://www.saintsandsoldiers.com/",
    "Response": "True"
  },
  "239": {
    "Title": "Saving Private Ryan",
    "Year": "1998",
    "Rated": "R",
    "Released": "24 Jul 1998",
    "Runtime": "169 min",
    "Genre": "Drama, War",
    "Director": "Steven Spielberg",
    "Writer": "Robert Rodat",
    "Actors": "Tom Hanks, Tom Sizemore, Edward Burns, Barry Pepper",
    "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "Language": "English, French, German, Czech",
    "Country": "USA",
    "Awards": "Won 5 Oscars. Another 74 wins & 74 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "90/100"
      }
    ],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,054,316",
    "imdbID": "tt0120815",
    "Type": "movie",
    "DVD": "02 Nov 1999",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "http://https://www.facebook.com/SavingPrivateRyanMovie",
    "Response": "True"
  },
  "240": {
    "Title": "Selena",
    "Year": "1997",
    "Rated": "PG",
    "Released": "21 Mar 1997",
    "Runtime": "127 min",
    "Genre": "Biography, Drama, Music",
    "Director": "Gregory Nava",
    "Writer": "Gregory Nava",
    "Actors": "Jennifer Lopez, Jackie Guerra, Constance Marie, Alex Meneses",
    "Plot": "The true story of Selena Quintanilla-Perez, a Texas-born Tejano singer who rose from cult status to performing at the Astrodome, as well as having chart topping albums on the Latin music charts.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 8 wins & 5 nominations.",
    "Poster": "https://ia.media-imdb.com/images/M/MV5BZGE0Y2RlNmQtZDY0Ni00Njk5LWFiZWUtMzc5N2VlZTBhOGE5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "67%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "6.7",
    "imdbVotes": "21,117",
    "imdbID": "tt0120094",
    "Type": "movie",
    "DVD": "23 Sep 1997",
    "BoxOffice": "N/A",
    "Production": "Warner Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "241": {
    "Title": "Seven Brides for Seven Brothers",
    "Year": "1954",
    "Rated": "G",
    "Released": "06 Aug 1954",
    "Runtime": "102 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Stanley Donen",
    "Writer": "Albert Hackett (screenplay), Frances Goodrich (screenplay), Dorothy Kingsley (screenplay), Stephen Vincent Benet (story \"The Sobbin' Women\")",
    "Actors": "Howard Keel, Jeff Richards, Russ Tamblyn, Tommy Rall",
    "Plot": "In 1850 Oregon, when a backwoodsman brings a wife home to his farm, his six brothers decide that they want to get married too.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 4 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmNkYWU3NzktMmRhMS00Y2E4LTkxYjgtNGQzYzYzMDQyMWMxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.4",
    "imdbVotes": "18,585",
    "imdbID": "tt0047472",
    "Type": "movie",
    "DVD": "27 Apr 1999",
    "BoxOffice": "N/A",
    "Production": "MGM Home Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  "242": {
    "Title": "Sherlock Holmes",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "25 Dec 2009",
    "Runtime": "128 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Guy Ritchie",
    "Writer": "Michael Robert Johnson (screenplay), Anthony Peckham (screenplay), Simon Kinberg (screenplay), Lionel Wigram (screen story), Michael Robert Johnson (screen story), Arthur Conan Doyle (characters: Sherlock Holmes,  Dr. Watson)",
    "Actors": "Robert Downey Jr., Jude Law, Rachel McAdams, Mark Strong",
    "Plot": "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    "Language": "English, French",
    "Country": "USA, Germany",
    "Awards": "Nominated for 2 Oscars. Another 10 wins & 27 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.6",
    "imdbVotes": "533,234",
    "imdbID": "tt0988045",
    "Type": "movie",
    "DVD": "30 Mar 2010",
    "BoxOffice": "$208,711,166",
    "Production": "Warner Bros. Pictures/Village Roadshow",
    "Website": "http://sherlock-holmes-movie.warnerbros.com/",
    "Response": "True"
  },
  "243": {
    "Title": "Sherlock Holmes: A Game of Shadows",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "16 Dec 2011",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Guy Ritchie",
    "Writer": "Michele Mulroney, Kieran Mulroney, Arthur Conan Doyle (characters)",
    "Actors": "Robert Downey Jr., Jude Law, Noomi Rapace, Rachel McAdams",
    "Plot": "Sherlock Holmes and his sidekick Dr. Watson join forces to outwit and bring down their fiercest adversary, Professor Moriarty.",
    "Language": "English, French, Italian, German, Romany",
    "Country": "USA",
    "Awards": "3 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "59%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "7.5",
    "imdbVotes": "381,813",
    "imdbID": "tt1515091",
    "Type": "movie",
    "DVD": "12 Jun 2012",
    "BoxOffice": "$186,830,669",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.sherlockholmes2.com",
    "Response": "True"
  },
  "244": {
    "Title": "Shrek",
    "Year": "2001",
    "Rated": "PG",
    "Released": "18 May 2001",
    "Runtime": "90 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
    "Director": "Andrew Adamson, Vicky Jenson",
    "Writer": "William Steig (based upon the book by), Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman, Cody Cameron (additional dialogue), Chris Miller (additional dialogue), Conrad Vernon (additional dialogue)",
    "Actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
    "Plot": "After his swamp is filled with magical creatures, Shrek agrees to rescue Princess Fiona for a villainous lord in order to get his land back.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 36 wins & 60 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "84/100"
      }
    ],
    "Metascore": "84",
    "imdbRating": "7.9",
    "imdbVotes": "536,198",
    "imdbID": "tt0126029",
    "Type": "movie",
    "DVD": "02 Nov 2001",
    "BoxOffice": "$266,982,666",
    "Production": "Dreamworks",
    "Website": "http://www.shrek.com/",
    "Response": "True"
  },
  "245": {
    "Title": "Shrek 2",
    "Year": "2004",
    "Rated": "PG",
    "Released": "19 May 2004",
    "Runtime": "93 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy, Romance",
    "Director": "Andrew Adamson, Kelly Asbury, Conrad Vernon",
    "Writer": "William Steig (based upon the book by), Andrew Adamson (story by), Andrew Adamson (screenplay by), Joe Stillman (screenplay by), J. David Stem (screenplay by), David N. Weiss (screenplay by), Cody Cameron (additional dialogue), Walt Dohrn (additional dialogue), Chris Miller (additional dialogue), David P. Smith (additional dialogue), Conrad Vernon (additional dialogue)",
    "Actors": "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
    "Plot": "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 18 wins & 50 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.2",
    "imdbVotes": "362,961",
    "imdbID": "tt0298148",
    "Type": "movie",
    "DVD": "02 Nov 2004",
    "BoxOffice": "$436,471,036",
    "Production": "DreamWorks SKG",
    "Website": "http://www.shrek2.com/",
    "Response": "True"
  },
  "246": {
    "Title": "Shrek the Third",
    "Year": "2007",
    "Rated": "PG",
    "Released": "18 May 2007",
    "Runtime": "93 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Chris Miller, Raman Hui(co-director)",
    "Writer": "Jeffrey Price (screenplay by), Peter S. Seaman (screenplay by), Chris Miller (screenplay by), Aron Warner (screenplay by), Andrew Adamson (story by), William Steig (based upon the book by)",
    "Actors": "Mike Myers, Eddie Murphy, Cameron Diaz, Antonio Banderas",
    "Plot": "When his new father-in-law, King Harold falls ill, Shrek is looked at as the heir to the land of Far, Far Away. Not one to give up his beloved swamp, Shrek recruits his friends Donkey and Puss in Boots to install the rebellious Artie as the new king. Princess Fiona, however, rallies a band of royal girlfriends to fend off a coup d'etat by the jilted Prince Charming.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 5 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "41%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.0",
    "imdbVotes": "243,212",
    "imdbID": "tt0413267",
    "Type": "movie",
    "DVD": "13 Nov 2007",
    "BoxOffice": "$320,706,665",
    "Production": "Dreamworks",
    "Website": "http://www.shrek.com/",
    "Response": "True"
  },
  "247": {
    "Title": "Skyfall",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "09 Nov 2012",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Sam Mendes",
    "Writer": "Neal Purvis, Robert Wade, John Logan, Ian Fleming (characters)",
    "Actors": "Daniel Craig, Judi Dench, Javier Bardem, Ralph Fiennes",
    "Plot": "Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    "Language": "English, Turkish",
    "Country": "UK, USA",
    "Awards": "Won 2 Oscars. Another 65 wins & 119 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.8",
    "imdbVotes": "575,343",
    "imdbID": "tt1074638",
    "Type": "movie",
    "DVD": "11 Mar 2013",
    "BoxOffice": "$299,300,000",
    "Production": "MGM",
    "Website": "http://www.007.com",
    "Response": "True"
  },
  "248": {
    "Title": "Sleepless in Seattle",
    "Year": "1993",
    "Rated": "PG",
    "Released": "25 Jun 1993",
    "Runtime": "105 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Nora Ephron",
    "Writer": "Jeff Arch (story), Nora Ephron (screenplay), David S. Ward (screenplay), Jeff Arch (screenplay)",
    "Actors": "Tom Hanks, Ross Malinger, Rita Wilson, Victor Garber",
    "Plot": "A recently widowed man's son calls a radio talk-show in an attempt to find his father a partner.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 4 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWY1MDJkZGUtZTE2OS00ODZiLTlmNzQtMDZjNzM2ZjkwM2QxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "6.8",
    "imdbVotes": "139,882",
    "imdbID": "tt0108160",
    "Type": "movie",
    "DVD": "26 Jun 1997",
    "BoxOffice": "N/A",
    "Production": "TriStar Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "249": {
    "Title": "Snoopy's Reunion",
    "Year": "1991",
    "Rated": "G",
    "Released": "01 May 1991",
    "Runtime": "24 min",
    "Genre": "Animation, Short, Comedy",
    "Director": "Sam Jaimes",
    "Writer": "Charles M. Schulz (creator), Charles M. Schulz",
    "Actors": "Philip Shafran, Josh Keaton, Kaitlyn Walker, Laurel Page",
    "Plot": "To cheer up Snoopy, Charlie Brown helps him organise a family reunion of his litter siblings.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzODUzMTM1Ml5BMl5BanBnXkFtZTcwMzc4NDgxMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.6",
    "imdbVotes": "439",
    "imdbID": "tt0174221",
    "Type": "movie",
    "DVD": "07 Apr 2009",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  "250": {
    "Title": "Sons of Provo",
    "Year": "2004",
    "Rated": "PG",
    "Released": "30 Oct 2004",
    "Runtime": "93 min",
    "Genre": "Comedy, Music",
    "Director": "Will Swenson",
    "Writer": "Peter D. Brown, Will Swenson",
    "Actors": "Will Swenson, Kirby Heyborne, Danny Tarasevich, Jennifer Erekson",
    "Plot": "Will, Kirby, and Danny are the hottest new sensation in Mormon pop music! Will is an aerobics instructor, Danny is a student of eastern philosophy, and Kirby is a scrapbooking specialist. ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2ODM3OTcyM15BMl5BanBnXkFtZTgwNDkxMDA2MDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.9",
    "imdbVotes": "326",
    "imdbID": "tt0396223",
    "Type": "movie",
    "DVD": "28 Mar 2006",
    "BoxOffice": "N/A",
    "Production": "Halestorm Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  "251": {
    "Title": "Space Jam",
    "Year": "1996",
    "Rated": "PG",
    "Released": "15 Nov 1996",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi, Sport",
    "Director": "Joe Pytka",
    "Writer": "Leo Benvenuti, Steve Rudnick, Timothy Harris, Herschel Weingrod",
    "Actors": "Michael Jordan, Wayne Knight, Theresa Randle, Manner Washington",
    "Plot": "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "38%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.4",
    "imdbVotes": "134,694",
    "imdbID": "tt0117705",
    "Type": "movie",
    "DVD": "27 Aug 1997",
    "BoxOffice": "N/A",
    "Production": "Warner Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "252": {
    "Title": "Spare Parts",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "05 Jun 2015",
    "Runtime": "114 min",
    "Genre": "Drama",
    "Director": "Sean McNamara",
    "Writer": "Joshua Davis (based on the Wired Magazine article \"La Vida Robot\" by), Elissa Matsueda (screenplay)",
    "Actors": "George Lopez, Marisa Tomei, Jamie Lee Curtis, Carlos PenaVega",
    "Plot": "Four Hispanic high school students form a robotics club. With no experience, 800 bucks, used car parts and a dream, this rag tag team goes up against the country's reigning robotics champion, MIT.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5NzI4NTIyMF5BMl5BanBnXkFtZTgwMzIzNDMxMzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "55%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.3",
    "imdbVotes": "9,351",
    "imdbID": "tt3233418",
    "Type": "movie",
    "DVD": "05 May 2015",
    "BoxOffice": "N/A",
    "Production": "Pantelion Films",
    "Website": "http://www.facebook.com/SparePartsMovie",
    "Response": "True"
  },
  "253": {
    "Title": "Spectre",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "06 Nov 2015",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Sam Mendes",
    "Writer": "John Logan (screenplay by), Neal Purvis (screenplay by), Robert Wade (screenplay by), Jez Butterworth (screenplay by), John Logan (story by), Neal Purvis (story by), Robert Wade (story by), Ian Fleming (based on characters created by)",
    "Actors": "Daniel Craig, Christoph Waltz, Léa Seydoux, Ralph Fiennes",
    "Plot": "A cryptic message from 007 past sends him pitted against a mysterious terrorist organization called Spectre, and learns of its involvement on previous events of his most dangerous missions before.",
    "Language": "English, Spanish, Italian, German, French",
    "Country": "UK, USA",
    "Awards": "Won 1 Oscar. Another 7 wins & 32 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "63%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "6.8",
    "imdbVotes": "339,564",
    "imdbID": "tt2379713",
    "Type": "movie",
    "DVD": "09 Feb 2016",
    "BoxOffice": "$208,777,731",
    "Production": "Sony Pictures",
    "Website": "http://www.007.com/",
    "Response": "True"
  },
  "254": {
    "Title": "Spider-Man",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "03 May 2002",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Sam Raimi",
    "Writer": "Stan Lee (Marvel comic book), Steve Ditko (Marvel comic book), David Koepp (screenplay)",
    "Actors": "Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco",
    "Plot": "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 16 wins & 58 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.3",
    "imdbVotes": "617,172",
    "imdbID": "tt0145487",
    "Type": "movie",
    "DVD": "01 Nov 2002",
    "BoxOffice": "$403,706,375",
    "Production": "Columbia Pictures",
    "Website": "http://spiderman.sonypictures.com/",
    "Response": "True"
  },
  "255": {
    "Title": "Spider-Man 2",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "30 Jun 2004",
    "Runtime": "127 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Sam Raimi",
    "Writer": "Stan Lee (comic book), Steve Ditko (comic book), Alfred Gough (screen story), Miles Millar (screen story), Michael Chabon (screen story), Alvin Sargent (screenplay)",
    "Actors": "Tobey Maguire, Kirsten Dunst, James Franco, Alfred Molina",
    "Plot": "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
    "Language": "English, Russian, Chinese",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 23 wins & 59 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "83/100"
      }
    ],
    "Metascore": "83",
    "imdbRating": "7.3",
    "imdbVotes": "479,237",
    "imdbID": "tt0316654",
    "Type": "movie",
    "DVD": "30 Nov 2004",
    "BoxOffice": "$373,377,893",
    "Production": "Sony Pictures",
    "Website": "http://spiderman.sonypictures.com/",
    "Response": "True"
  },
  "256": {
    "Title": "Spider-Man 3",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "04 May 2007",
    "Runtime": "139 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Sam Raimi",
    "Writer": "Sam Raimi (screenplay), Ivan Raimi (screenplay), Alvin Sargent (screenplay), Sam Raimi (screen story), Ivan Raimi (screen story), Stan Lee (Marvel comic book), Steve Ditko (Marvel comic book)",
    "Actors": "Tobey Maguire, Kirsten Dunst, James Franco, Thomas Haden Church",
    "Plot": "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 3 wins & 32 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "63%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.2",
    "imdbVotes": "440,700",
    "imdbID": "tt0413300",
    "Type": "movie",
    "DVD": "30 Oct 2007",
    "BoxOffice": "$336,530,303",
    "Production": "Sony Pictures",
    "Website": "http://www.sonypictures.com/movies/spiderman3/site/",
    "Response": "True"
  },
  "257": {
    "Title": "Spider-Man: Homecoming",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "07 Jul 2017",
    "Runtime": "133 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Watts",
    "Writer": "Jonathan Goldstein (screenplay by), John Francis Daley (screenplay by), Jon Watts (screenplay by), Christopher Ford (screenplay by), Chris McKenna (screenplay by), Erik Sommers (screenplay by), Jonathan Goldstein (screen story by), John Francis Daley (screen story by), Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by)",
    "Actors": "Tom Holland, Michael Keaton, Robert Downey Jr., Marisa Tomei",
    "Plot": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "4 wins & 9 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "73/100"
      }
    ],
    "Metascore": "73",
    "imdbRating": "7.5",
    "imdbVotes": "360,460",
    "imdbID": "tt2250912",
    "Type": "movie",
    "DVD": "17 Oct 2017",
    "BoxOffice": "$334,166,825",
    "Production": "Sony Pictures",
    "Website": "http://www.sonypictures.com/movies/spidermanhomecoming/",
    "Response": "True"
  },
  "258": {
    "Title": "Split",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "20 Jan 2017",
    "Runtime": "117 min",
    "Genre": "Horror, Thriller",
    "Director": "M. Night Shyamalan",
    "Writer": "M. Night Shyamalan",
    "Actors": "James McAvoy, Anya Taylor-Joy, Betty Buckley, Haley Lu Richardson",
    "Plot": "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
    "Language": "English",
    "Country": "USA",
    "Awards": "8 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "76%"
      },
      {
        "Source": "Metacritic",
        "Value": "62/100"
      }
    ],
    "Metascore": "62",
    "imdbRating": "7.3",
    "imdbVotes": "286,249",
    "imdbID": "tt4972582",
    "Type": "movie",
    "DVD": "18 Apr 2017",
    "BoxOffice": "$138,120,085",
    "Production": "Universal Pictures",
    "Website": "http://www.splitmovie.com/",
    "Response": "True"
  },
  "259": {
    "Title": "Star Trek",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "08 May 2009",
    "Runtime": "127 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "J.J. Abrams",
    "Writer": "Roberto Orci, Alex Kurtzman, Gene Roddenberry (television series \"Star Trek\")",
    "Actors": "Chris Pine, Zachary Quinto, Leonard Nimoy, Eric Bana",
    "Plot": "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "Won 1 Oscar. Another 23 wins & 92 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "8.0",
    "imdbVotes": "547,628",
    "imdbID": "tt0796366",
    "Type": "movie",
    "DVD": "17 Nov 2009",
    "BoxOffice": "$257,704,099",
    "Production": "IMAX",
    "Website": "http://www.startrekmovie.com/",
    "Response": "True"
  },
  "260": {
    "Title": "Star Trek: Beyond",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "22 Jul 2016",
    "Runtime": "122 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Justin Lin",
    "Writer": "Simon Pegg, Doug Jung, Gene Roddenberry (based upon \"Star Trek\" created by)",
    "Actors": "Chris Pine, Zachary Quinto, Karl Urban, Zoe Saldana",
    "Plot": "The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.",
    "Language": "English",
    "Country": "USA, China, United Arab Emirates, Canada",
    "Awards": "Nominated for 1 Oscar. Another 3 wins & 27 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDRiOGE5ZTctOWIxOS00MWQwLThlMDYtNWIwMDQwNzBjZDY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.1",
    "imdbVotes": "200,187",
    "imdbID": "tt2660888",
    "Type": "movie",
    "DVD": "01 Nov 2016",
    "BoxOffice": "$158,804,470",
    "Production": "Paramount Pictures",
    "Website": "http://www.startrekmovie.com/",
    "Response": "True"
  },
  "261": {
    "Title": "Star Trek: Into Darkness",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "16 May 2013",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "J.J. Abrams",
    "Writer": "Roberto Orci, Alex Kurtzman, Damon Lindelof, Gene Roddenberry (television series \"Star Trek\")",
    "Actors": "Chris Pine, Zachary Quinto, Zoe Saldana, Karl Urban",
    "Plot": "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.",
    "Language": "English, Klingon",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 6 wins & 56 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.7",
    "imdbVotes": "437,437",
    "imdbID": "tt1408101",
    "Type": "movie",
    "DVD": "10 Sep 2013",
    "BoxOffice": "$228,756,232",
    "Production": "Paramount",
    "Website": "http://www.startrekmovie.com/",
    "Response": "True"
  },
  "262": {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "90/100"
      }
    ],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,073,390",
    "imdbID": "tt0076759",
    "Type": "movie",
    "DVD": "21 Sep 2004",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.starwars.com/episode-iv/",
    "Response": "True"
  },
  "263": {
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "Rated": "PG",
    "Released": "19 May 1999",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
    "Plot": "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 26 wins & 65 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "55%"
      },
      {
        "Source": "Metacritic",
        "Value": "51/100"
      }
    ],
    "Metascore": "51",
    "imdbRating": "6.5",
    "imdbVotes": "628,730",
    "imdbID": "tt0120915",
    "Type": "movie",
    "DVD": "16 Oct 2001",
    "BoxOffice": "$431,000,000",
    "Production": "20th Century Fox",
    "Website": "http://www.starwars.com/episode-i/",
    "Response": "True"
  },
  "264": {
    "Title": "Star Wars: Episode II - Attack of the Clones",
    "Year": "2002",
    "Rated": "PG",
    "Released": "16 May 2002",
    "Runtime": "142 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "George Lucas",
    "Writer": "George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
    "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
    "Plot": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-wan Kenobi investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 16 wins & 58 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "54/100"
      }
    ],
    "Metascore": "54",
    "imdbRating": "6.6",
    "imdbVotes": "551,310",
    "imdbID": "tt0121765",
    "Type": "movie",
    "DVD": "12 Nov 2002",
    "BoxOffice": "$307,900,000",
    "Production": "20th Century Fox",
    "Website": "http://www.starwars.com/episode-ii/",
    "Response": "True"
  },
  "265": {
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "19 May 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
    "Plot": "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
    "Language": "English",
    "Country": "USA, Italy, Switzerland, Thailand, Tunisia",
    "Awards": "Nominated for 1 Oscar. Another 25 wins & 56 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.6",
    "imdbVotes": "614,576",
    "imdbID": "tt0121766",
    "Type": "movie",
    "DVD": "01 Nov 2005",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://www.starwars.com/",
    "Response": "True"
  },
  "266": {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "Rated": "PG",
    "Released": "20 Jun 1980",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Irvin Kershner",
    "Writer": "Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    "Plot": "After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 21 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": "82",
    "imdbRating": "8.8",
    "imdbVotes": "1,002,905",
    "imdbID": "tt0080684",
    "Type": "movie",
    "DVD": "21 Sep 2004",
    "BoxOffice": "$4,548,170",
    "Production": "Twentieth Century Fox",
    "Website": "http://www.starwars.com/episode-v/",
    "Response": "True"
  },
  "267": {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "Rated": "PG",
    "Released": "25 May 1983",
    "Runtime": "131 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Richard Marquand",
    "Writer": "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 4 Oscars. Another 20 wins & 16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "80%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "8.3",
    "imdbVotes": "823,749",
    "imdbID": "tt0086190",
    "Type": "movie",
    "DVD": "12 Sep 2006",
    "BoxOffice": "N/A",
    "Production": "Twentieth Century Fox",
    "Website": "http://www.starwars.com/episode-vi/",
    "Response": "True"
  },
  "268": {
    "Title": "Star Wars: The Force Awakens",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "18 Dec 2015",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "J.J. Abrams",
    "Writer": "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
    "Actors": "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    "Plot": "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 5 Oscars. Another 57 wins & 123 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "8.0",
    "imdbVotes": "755,035",
    "imdbID": "tt2488496",
    "Type": "movie",
    "DVD": "05 Apr 2016",
    "BoxOffice": "$936,658,640",
    "Production": "Walt Disney Pictures",
    "Website": "http://starwars.com/",
    "Response": "True"
  },
  "269": {
    "Title": "Star Wars: The Last Jedi",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "15 Dec 2017",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Rian Johnson",
    "Writer": "Rian Johnson, George Lucas (based on characters created by)",
    "Actors": "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
    "Plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 4 Oscars. Another 12 wins & 71 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "85/100"
      }
    ],
    "Metascore": "85",
    "imdbRating": "7.2",
    "imdbVotes": "417,721",
    "imdbID": "tt2527336",
    "Type": "movie",
    "DVD": "27 Mar 2018",
    "BoxOffice": "$619,117,636",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.starwars.com/the-last-jedi/",
    "Response": "True"
  },
  "270": {
    "Title": "Suicide Squad",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "05 Aug 2016",
    "Runtime": "123 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "David Ayer",
    "Writer": "David Ayer",
    "Actors": "Will Smith, Jaime FitzSimons, Ike Barinholtz, Margot Robbie",
    "Plot": "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
    "Language": "English, Japanese, Spanish",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 16 wins & 37 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "28%"
      },
      {
        "Source": "Metacritic",
        "Value": "40/100"
      }
    ],
    "Metascore": "40",
    "imdbRating": "6.1",
    "imdbVotes": "495,201",
    "imdbID": "tt1386697",
    "Type": "movie",
    "DVD": "13 Dec 2016",
    "BoxOffice": "&pound;325,021,779",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.suicidesquad.com/",
    "Response": "True"
  },
  "271": {
    "Title": "Super 8",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "10 Jun 2011",
    "Runtime": "112 min",
    "Genre": "Mystery, Sci-Fi, Thriller",
    "Director": "J.J. Abrams",
    "Writer": "J.J. Abrams",
    "Actors": "Joel Courtney, Jessica Tuck, Joel McKinnon Miller, Ryan Lee",
    "Plot": "During the summer of 1979, a group of friends witness a train crash and investigate subsequent unexplained events in their small town.",
    "Language": "English",
    "Country": "USA",
    "Awards": "11 wins & 67 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.0",
    "imdbVotes": "313,787",
    "imdbID": "tt1650062",
    "Type": "movie",
    "DVD": "22 Nov 2011",
    "BoxOffice": "$126,975,169",
    "Production": "Paramount Pictures",
    "Website": "http://www.super8-movie.com/",
    "Response": "True"
  },
  "272": {
    "Title": "Superman/Doomsday",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "18 Sep 2007",
    "Runtime": "75 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Lauren Montgomery, Bruce Timm, Brandon Vietti",
    "Writer": "Jerry Siegel (character created by: Superman), Joe Shuster (character created by: Superman), Duane Capizzi (story), Bruce Timm (story), Duane Capizzi (screenplay), Dan Jurgens (character created by: Doomsday), Jerry Ordway (character created by: Doomsday), Roger Stern (character created by: Doomsday), Louise Simonson (character created by: Doomsday), Brett Breeding (character created by: Doomsday)",
    "Actors": "Adam Baldwin, Anne Heche, James Marsters, John DiMaggio",
    "Plot": "When LexCorps accidentally unleash a murderous creature, Doomsday, Superman meets his greatest challenge as a champion. Based on the \"The Death of Superman\" storyline that appeared in DC Comics' publications in the 1990s.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "1 win.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjU4MzIyZWUtNWQ4Yy00YTU4LTk5NjUtNDBiNDkxZTVlZDgwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "17,604",
    "imdbID": "tt0934706",
    "Type": "movie",
    "DVD": "18 Sep 2007",
    "BoxOffice": "N/A",
    "Production": "Warner Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "273": {
    "Title": "Surf's Up",
    "Year": "2007",
    "Rated": "PG",
    "Released": "08 Jun 2007",
    "Runtime": "85 min",
    "Genre": "Animation, Comedy, Family",
    "Director": "Ash Brannon, Chris Buck",
    "Writer": "Don Rhymer (screenplay by), Ash Brannon (screenplay by), Chris Buck (screenplay by), Christopher Jenkins (screenplay by), Christopher Jenkins (story by), Christian Darren (story by), Diego Garzon (story editor)",
    "Actors": "Shia LaBeouf, Jeff Bridges, Zooey Deschanel, Jon Heder",
    "Plot": "A behind-the-scenes look at the annual Penguin World Surfing Championship, and its newest participant, up-and-comer Cody Maverick.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 2 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "79%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "6.7",
    "imdbVotes": "60,458",
    "imdbID": "tt0423294",
    "Type": "movie",
    "DVD": "09 Oct 2007",
    "BoxOffice": "$58,867,694",
    "Production": "Sony Pictures",
    "Website": "http://www.sonypictures.com/movies/surfsup/index.html",
    "Response": "True"
  },
  "274": {
    "Title": "Sweet Home Alabama",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "27 Sep 2002",
    "Runtime": "108 min",
    "Genre": "Comedy, Romance",
    "Director": "Andy Tennant",
    "Writer": "Douglas J. Eboch (story), C. Jay Cox (screenplay)",
    "Actors": "Reese Witherspoon, Josh Lucas, Patrick Dempsey, Candice Bergen",
    "Plot": "A young woman who's reinvented herself as a New York socialite must return home to Alabama to obtain a divorce from her husband, after seven years of separation.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "38%"
      },
      {
        "Source": "Metacritic",
        "Value": "45/100"
      }
    ],
    "Metascore": "45",
    "imdbRating": "6.2",
    "imdbVotes": "92,316",
    "imdbID": "tt0256415",
    "Type": "movie",
    "DVD": "04 Feb 2003",
    "BoxOffice": "$127,214,072",
    "Production": "Buena Vista Distribution Compa",
    "Website": "http://www.sweet-home-alabama.com/",
    "Response": "True"
  },
  "275": {
    "Title": "Taken",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "30 Jan 2009",
    "Runtime": "93 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Pierre Morel",
    "Writer": "Luc Besson, Robert Mark Kamen",
    "Actors": "Liam Neeson, Maggie Grace, Leland Orser, Jon Gries",
    "Plot": "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
    "Language": "English, French, Albanian, Arabic",
    "Country": "France, USA",
    "Awards": "2 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "58%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.8",
    "imdbVotes": "526,683",
    "imdbID": "tt0936501",
    "Type": "movie",
    "DVD": "12 May 2009",
    "BoxOffice": "$144,924,285",
    "Production": "20th Century Fox",
    "Website": "http://www.takenmovie.com/",
    "Response": "True"
  },
  "276": {
    "Title": "Taken 2",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "05 Oct 2012",
    "Runtime": "92 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Olivier Megaton",
    "Writer": "Luc Besson, Robert Mark Kamen, Luc Besson (based on characters created by), Robert Mark Kamen (based on characters created by)",
    "Actors": "Liam Neeson, Maggie Grace, Famke Janssen, Leland Orser",
    "Plot": "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
    "Language": "English, Turkish, Arabic",
    "Country": "France, USA",
    "Awards": "1 win & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwNTQ0ODExOV5BMl5BanBnXkFtZTcwNjU3NDQwOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "21%"
      },
      {
        "Source": "Metacritic",
        "Value": "45/100"
      }
    ],
    "Metascore": "45",
    "imdbRating": "6.3",
    "imdbVotes": "265,053",
    "imdbID": "tt1397280",
    "Type": "movie",
    "DVD": "15 Jan 2013",
    "BoxOffice": "$139,852,115",
    "Production": "20th Century Fox",
    "Website": "http://www.takenmovie.com/",
    "Response": "True"
  },
  "277": {
    "Title": "Taken 3",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "09 Jan 2015",
    "Runtime": "108 min",
    "Genre": "Action, Thriller",
    "Director": "Olivier Megaton",
    "Writer": "Luc Besson, Robert Mark Kamen, Luc Besson (characters), Robert Mark Kamen (based on characters created by)",
    "Actors": "Liam Neeson, Forest Whitaker, Famke Janssen, Maggie Grace",
    "Plot": "Ex-government operative Bryan Mills is accused of a ruthless murder he never committed or witnessed. As he is tracked and pursued, Mills brings out his particular set of skills to find the true killer and clear his name.",
    "Language": "English, Russian",
    "Country": "France, USA, Spain",
    "Awards": "3 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "12%"
      },
      {
        "Source": "Metacritic",
        "Value": "26/100"
      }
    ],
    "Metascore": "26",
    "imdbRating": "6.0",
    "imdbVotes": "158,498",
    "imdbID": "tt2446042",
    "Type": "movie",
    "DVD": "21 Apr 2015",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "http://takenmovie.com/",
    "Response": "True"
  },
  "278": {
    "Title": "Tangled",
    "Year": "2010",
    "Rated": "PG",
    "Released": "24 Nov 2010",
    "Runtime": "100 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Nathan Greno, Byron Howard",
    "Writer": "Dan Fogelman (screenplay by), Jacob Grimm (based upon the fairy tale \"Rapunzel\" by), Wilhelm Grimm (based upon the fairy tale \"Rapunzel\" by)",
    "Actors": "Mandy Moore, Zachary Levi, Donna Murphy, Ron Perlman",
    "Plot": "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 9 wins & 40 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "7.8",
    "imdbVotes": "346,814",
    "imdbID": "tt0398286",
    "Type": "movie",
    "DVD": "29 Mar 2011",
    "BoxOffice": "$200,803,309",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/Tangled",
    "Response": "True"
  },
  "279": {
    "Title": "Tarzan",
    "Year": "1999",
    "Rated": "G",
    "Released": "18 Jun 1999",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Chris Buck, Kevin Lima",
    "Writer": "Tab Murphy (screenplay), Bob Tzudiker (screenplay), Noni White (screenplay), Stephen J. Anderson (story), Mark Kennedy (story), Carole Holliday (story), Gaëtan Brizzi (story), Paul Brizzi (story), Don Dougherty (story), Ed Gombert (story), Randy Haycock (story), Don Hall (story), Kevin Harkey (story), Glen Keane (story), Burny Mattinson (story), Frank Nissen (story), John Norton (story), Jeff Snow (story), Michael Surrey (story), Chris Ure (story), Mark Walton (story), Stevie Wermers (story), Kelly Wightman (story), John Ramirez (story), Edgar Rice Burroughs (story \"Tarzan of the Apes\")",
    "Actors": "Brian Blessed, Glenn Close, Minnie Driver, Tony Goldwyn",
    "Plot": "A man raised by gorillas must decide where he really belongs when he discovers he is a human.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 10 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2ZiYWUxN2ItYmQxZi00NDlkLWE2NDAtOTNmYTg1MDI0NDk1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "7.2",
    "imdbVotes": "172,583",
    "imdbID": "tt0120855",
    "Type": "movie",
    "DVD": "01 Jan 2000",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Pictures",
    "Website": "http://www.tarzanlordlajungle.com/",
    "Response": "True"
  },
  "280": {
    "Title": "The Terminal",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "18 Jun 2004",
    "Runtime": "128 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Steven Spielberg",
    "Writer": "Andrew Niccol (story), Sacha Gervasi (story), Sacha Gervasi (screenplay), Jeff Nathanson (screenplay)",
    "Actors": "Tom Hanks, Catherine Zeta-Jones, Stanley Tucci, Chi McBride",
    "Plot": "An Eastern European tourist unexpectedly finds himself stranded in JFK airport, and must take up temporary residence there.",
    "Language": "English, Bulgarian, Spanish, Russian, Mandarin, German, French",
    "Country": "USA",
    "Awards": "5 wins & 4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1MTIwNTMxOF5BMl5BanBnXkFtZTcwNjIxMjQyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "61%"
      },
      {
        "Source": "Metacritic",
        "Value": "55/100"
      }
    ],
    "Metascore": "55",
    "imdbRating": "7.3",
    "imdbVotes": "351,299",
    "imdbID": "tt0362227",
    "Type": "movie",
    "DVD": "23 Nov 2004",
    "BoxOffice": "$77,032,279",
    "Production": "DreamWorks SKG",
    "Website": "http://www.theterminal-themovie.com/",
    "Response": "True"
  },
  "281": {
    "Title": "That Thing You Do!",
    "Year": "1996",
    "Rated": "PG",
    "Released": "04 Oct 1996",
    "Runtime": "108 min",
    "Genre": "Comedy, Drama, Music",
    "Director": "Tom Hanks",
    "Writer": "Tom Hanks",
    "Actors": "Tom Everett Scott, Liv Tyler, Johnathon Schaech, Steve Zahn",
    "Plot": "A local Pennsylvania band scores a one hit wonder in 1964 and rides the star-making machinery as long as they can, with lots of help from its manager.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 3 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWVmN2ZhZjgtZGEzMy00NDkxLWI5YWQtYTE2ZTk0YzIyMzc0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "Metascore": "71",
    "imdbRating": "6.9",
    "imdbVotes": "55,415",
    "imdbID": "tt0117887",
    "Type": "movie",
    "DVD": "05 Jun 2001",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "N/A",
    "Response": "True"
  },
  "282": {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "Rated": "PG",
    "Released": "10 Feb 2017",
    "Runtime": "104 min",
    "Genre": "Animation, Action, Comedy",
    "Director": "Chris McKay",
    "Writer": "Seth Grahame-Smith (screenplay by), Chris McKenna (screenplay by), Erik Sommers (screenplay by), Jared Stern (screenplay by), John Whittington (screenplay by), Seth Grahame-Smith (story by), Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (Wonder Woman created by), Ole Kirk Christiansen (based on LEGO Construction Toys created by), Godtfred Kirk Christiansen (based on LEGO Construction Toys created by), Jens Nygaard Knudsen (based on LEGO Construction Toys created by)",
    "Actors": "Will Arnett, Michael Cera, Rosario Dawson, Ralph Fiennes",
    "Plot": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
    "Language": "English",
    "Country": "USA, Denmark",
    "Awards": "11 wins & 58 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "90%"
        },
        {
          "Source": "Metacritic",
          "Value": "75/100"
        }
    ],
    "Metascore": "75",
    "imdbRating": "7.3",
    "imdbVotes": "104,387",
    "imdbID": "tt4116284",
    "Type": "movie",
    "DVD": "13 Jun 2017",
    "BoxOffice": "$175,686,290",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.legobatman.com/",
    "Response": "True"
  },
  "283": {
    "Title": "The Magnificent Seven",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "23 Sep 2016",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Western",
    "Director": "Antoine Fuqua",
    "Writer": "Akira Kurosawa (based on the screenplay by), Shinobu Hashimoto (based on the screenplay by), Hideo Oguni (based on the screenplay by), Nic Pizzolatto (screenplay), Richard Wenk (screenplay)",
    "Actors": "Denzel Washington, Chris Pratt, Ethan Hawke, Vincent D'Onofrio",
    "Plot": "Seven gunmen in the old west gradually come together to help a poor village against savage thieves.",
    "Language": "English, North American Indian, Spanish",
    "Country": "USA",
    "Awards": "5 wins & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "63%"
      },
      {
        "Source": "Metacritic",
        "Value": "54/100"
      }
    ],
    "Metascore": "54",
    "imdbRating": "6.9",
    "imdbVotes": "158,708",
    "imdbID": "tt2404435",
    "Type": "movie",
    "DVD": "20 Dec 2016",
    "BoxOffice": "&pound;93,381,044",
    "Production": "Sony Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "284": {
    "Title": "Thor",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "06 May 2011",
    "Runtime": "115 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Kenneth Branagh",
    "Writer": "Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",
    "Actors": "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
    "Plot": "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.0",
    "imdbVotes": "638,540",
    "imdbID": "tt0800369",
    "Type": "movie",
    "DVD": "13 Sep 2011",
    "BoxOffice": "$181,015,141",
    "Production": "Paramount Pictures",
    "Website": "http://thor.marvel.com/",
    "Response": "True"
  },
  "285": {
    "Title": "Thor: Ragnarok",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "03 Nov 2017",
    "Runtime": "130 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Taika Waititi",
    "Writer": "Eric Pearson, Craig Kyle, Christopher L. Yost, Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
    "Actors": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba",
    "Plot": "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    "Language": "English",
    "Country": "USA, Australia",
    "Awards": "5 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "7.9",
    "imdbVotes": "390,297",
    "imdbID": "tt3501632",
    "Type": "movie",
    "DVD": "06 Mar 2018",
    "BoxOffice": "$314,971,245",
    "Production": "Walt Disney Pictures",
    "Website": "http://movies.disney.com/thor-ragnarok",
    "Response": "True"
  },
  "286": {
    "Title": "Thor: The Dark World",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "08 Nov 2013",
    "Runtime": "112 min",
    "Genre": "Action, Adventure",
    "Director": "Alan Taylor",
    "Writer": "Christopher L. Yost (screenplay by), Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Don Payne (story by), Robert Rodat (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Walter Simonson (character created by: Malekith)",
    "Actors": "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
    "Plot": "When Dr. Jane Foster gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 wins & 21 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "54/100"
      }
    ],
    "Metascore": "54",
    "imdbRating": "7.0",
    "imdbVotes": "501,868",
    "imdbID": "tt1981115",
    "Type": "movie",
    "DVD": "25 Feb 2014",
    "BoxOffice": "$206,360,018",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.facebook.com/ThorMovie",
    "Response": "True"
  },
  "287": {
    "Title": "The Time Traveler's Wife",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "14 Aug 2009",
    "Runtime": "107 min",
    "Genre": "Drama, Fantasy, Romance",
    "Director": "Robert Schwentke",
    "Writer": "Bruce Joel Rubin (screenplay), Audrey Niffenegger (novel)",
    "Actors": "Michelle Nolden, Alex Ferris, Arliss Howard, Eric Bana",
    "Plot": "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his marriage.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWNlN2RmZDktNzllNC00NDVlLTllMzgtZGQ1YmRmZThmZjZmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "38%"
      },
      {
        "Source": "Metacritic",
        "Value": "47/100"
      }
    ],
    "Metascore": "47",
    "imdbRating": "7.1",
    "imdbVotes": "128,668",
    "imdbID": "tt0452694",
    "Type": "movie",
    "DVD": "09 Feb 2010",
    "BoxOffice": "$63,387,284",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.thetimetravelerswifemovie.com/",
    "Response": "True"
  },
  "288": {
    "Title": "Toy Story",
    "Year": "1995",
    "Rated": "G",
    "Released": "22 Nov 1995",
    "Runtime": "81 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "John Lasseter",
    "Writer": "John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)",
    "Actors": "Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
    "Plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 23 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      },
      {
        "Source": "Metacritic",
        "Value": "95/100"
      }
    ],
    "Metascore": "95",
    "imdbRating": "8.3",
    "imdbVotes": "752,674",
    "imdbID": "tt0114709",
    "Type": "movie",
    "DVD": "20 Mar 2001",
    "BoxOffice": "N/A",
    "Production": "Buena Vista",
    "Website": "http://www.disney.com/ToyStory",
    "Response": "True"
  },
  "289": {
    "Title": "Toy Story 2",
    "Year": "1999",
    "Rated": "G",
    "Released": "24 Nov 1999",
    "Runtime": "92 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "John Lasseter, Ash Brannon(co-director), Lee Unkrich(co-director)",
    "Writer": "John Lasseter (original story by), Pete Docter (original story by), Ash Brannon (original story by), Andrew Stanton (original story by), Andrew Stanton (screenplay by), Rita Hsiao (screenplay by), Doug Chamberlin (screenplay by), Chris Webb (screenplay by)",
    "Actors": "Tom Hanks, Tim Allen, Joan Cusack, Kelsey Grammer",
    "Plot": "When Woody is stolen by a toy collector, Buzz and his friends vow to rescue him, but Woody finds the idea of immortality in a museum tempting.",
    "Language": "English, Arabic, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 20 wins & 26 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      },
      {
        "Source": "Metacritic",
        "Value": "88/100"
      }
    ],
    "Metascore": "88",
    "imdbRating": "7.9",
    "imdbVotes": "446,764",
    "imdbID": "tt0120363",
    "Type": "movie",
    "DVD": "17 Oct 2000",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Pictures",
    "Website": "http://disney.go.com/toystory/",
    "Response": "True"
  },
  "290": {
    "Title": "Toy Story 3",
    "Year": "2010",
    "Rated": "G",
    "Released": "18 Jun 2010",
    "Runtime": "103 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
    "Director": "Lee Unkrich",
    "Writer": "John Lasseter (story by), Andrew Stanton (story by), Lee Unkrich (story by), Michael Arndt (screenplay by)",
    "Actors": "Tom Hanks, Tim Allen, Joan Cusack, Ned Beatty",
    "Plot": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 58 wins & 91 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "Source": "Metacritic",
        "Value": "92/100"
      }
    ],
    "Metascore": "92",
    "imdbRating": "8.3",
    "imdbVotes": "651,106",
    "imdbID": "tt0435761",
    "Type": "movie",
    "DVD": "02 Nov 2010",
    "BoxOffice": "$414,984,497",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.disney.com/ToyStory",
    "Response": "True"
  },
  "291": {
    "Title": "Transformers",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "03 Jul 2007",
    "Runtime": "144 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Michael Bay",
    "Writer": "Roberto Orci (screenplay), Alex Kurtzman (screenplay), John Rogers (story), Roberto Orci (story), Alex Kurtzman (story)",
    "Actors": "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson",
    "Plot": "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 20 wins & 41 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      },
      {
        "Source": "Metacritic",
        "Value": "61/100"
      }
    ],
    "Metascore": "61",
    "imdbRating": "7.1",
    "imdbVotes": "557,124",
    "imdbID": "tt0418279",
    "Type": "movie",
    "DVD": "16 Oct 2007",
    "BoxOffice": "$319,014,499",
    "Production": "Dreamworks",
    "Website": "http://www.transformersmovie.com/",
    "Response": "True"
  },
  "292": {
    "Title": "Transformers: Age of Extinction",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "27 Jun 2014",
    "Runtime": "165 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Michael Bay",
    "Writer": "Ehren Kruger",
    "Actors": "Mark Wahlberg, Stanley Tucci, Kelsey Grammer, Nicola Peltz",
    "Plot": "Autobots must escape sight from a bounty hunter who has taken control of the human serendipity: Unexpectedly, Optimus Prime and his remaining gang turn to a mechanic, his daughter, and her back street racing boyfriend for help.",
    "Language": "English",
    "Country": "USA, China, Hong Kong",
    "Awards": "5 wins & 23 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1OTMyODA5M15BMl5BanBnXkFtZTgwMjc2MDk3MTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "18%"
      },
      {
        "Source": "Metacritic",
        "Value": "32/100"
      }
    ],
    "Metascore": "32",
    "imdbRating": "5.7",
    "imdbVotes": "275,260",
    "imdbID": "tt2109248",
    "Type": "movie",
    "DVD": "30 Sep 2014",
    "BoxOffice": "$206,755,538",
    "Production": "Paramount Pictures",
    "Website": "http://TransformersMovie.com",
    "Response": "True"
  },
  "293": {
    "Title": "Transformers: Dark of the Moon",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "29 Jun 2011",
    "Runtime": "154 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Michael Bay",
    "Writer": "Ehren Kruger",
    "Actors": "Shia LaBeouf, Rosie Huntington-Whiteley, Josh Duhamel, John Turturro",
    "Plot": "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 10 wins & 39 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "35%"
      },
      {
        "Source": "Metacritic",
        "Value": "42/100"
      }
    ],
    "Metascore": "42",
    "imdbRating": "6.3",
    "imdbVotes": "356,928",
    "imdbID": "tt1399103",
    "Type": "movie",
    "DVD": "30 Sep 2011",
    "BoxOffice": "$352,358,779",
    "Production": "Paramount Studios",
    "Website": "http://www.TransformersMovie.com/",
    "Response": "True"
  },
  "294": {
    "Title": "Transformers: Revenge of the Fallen",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "24 Jun 2009",
    "Runtime": "150 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Michael Bay",
    "Writer": "Ehren Kruger, Roberto Orci, Alex Kurtzman",
    "Actors": "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson",
    "Plot": "Sam Witwicky leaves the Autobots behind for a normal life. But when his mind is filled with cryptic symbols, the Decepticons target him and he is dragged back into the Transformers' war.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 27 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "19%"
      },
      {
        "Source": "Metacritic",
        "Value": "35/100"
      }
    ],
    "Metascore": "35",
    "imdbRating": "6.0",
    "imdbVotes": "355,700",
    "imdbID": "tt1055369",
    "Type": "movie",
    "DVD": "20 Oct 2009",
    "BoxOffice": "$402,076,689",
    "Production": "Paramount/Dreamworks",
    "Website": "http://www.TransformersMovie.com/",
    "Response": "True"
  },
  "295": {
    "Title": "Transformers: The Last Knight",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "21 Jun 2017",
    "Runtime": "154 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Michael Bay",
    "Writer": "Art Marcum (screenplay by), Matt Holloway (screenplay by), Ken Nolan (screenplay by), Akiva Goldsman (story by), Art Marcum (story by), Matt Holloway (story by), Ken Nolan (story by)",
    "Actors": "Mark Wahlberg, Anthony Hopkins, Josh Duhamel, Laura Haddock",
    "Plot": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
    "Language": "English",
    "Country": "USA, China, Canada",
    "Awards": "16 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3OTI3MDk4N15BMl5BanBnXkFtZTgwNDg2ODIyMjI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "15%"
      },
      {
        "Source": "Metacritic",
        "Value": "27/100"
      }
    ],
    "Metascore": "27",
    "imdbRating": "5.2",
    "imdbVotes": "106,594",
    "imdbID": "tt3371366",
    "Type": "movie",
    "DVD": "26 Sep 2017",
    "BoxOffice": "$130,104,634",
    "Production": "Paramount Pictures",
    "Website": "https://www.facebook.com/transformersmovie/",
    "Response": "True"
  },
  "296": {
    "Title": "The Transformers: The Movie",
    "Year": "1986",
    "Rated": "PG",
    "Released": "08 Aug 1986",
    "Runtime": "84 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Nelson Shin",
    "Writer": "Ron Friedman",
    "Actors": "Norman Alden, Jack Angel, Michael Bell, Gregg Berger",
    "Plot": "The Autobots must stop a colossal planet consuming robot who goes after the Autobot Matrix of Leadership. At the same time, they must defend themselves against an all-out attack from the Decepticons.",
    "Language": "English, Japanese",
    "Country": "USA, Japan",
    "Awards": "2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MzQ1NDA3OV5BMl5BanBnXkFtZTcwNjM2OTczMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "57%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "34,768",
    "imdbID": "tt0092106",
    "Type": "movie",
    "DVD": "07 Nov 2000",
    "BoxOffice": "N/A",
    "Production": "De Laurentiis Entertainment Gr",
    "Website": "N/A",
    "Response": "True"
  },
  "297": {
    "Title": "Treasure Planet",
    "Year": "2002",
    "Rated": "PG",
    "Released": "27 Nov 2002",
    "Runtime": "95 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Ron Clements, John Musker",
    "Writer": "Robert Louis Stevenson (based on the novel \"Treasure Island\" by), Ron Clements (screenplay by), John Musker (screenplay by), Rob Edwards (screenplay by), Ron Clements (animation story by), John Musker (animation story by), Ted Elliott (animation story by), Terry Rossio (animation story by)",
    "Actors": "Roscoe Lee Browne, Corey Burton, Dane A. Davis, Joseph Gordon-Levitt",
    "Plot": "A Disney animated version of \"Treasure Island\". The only difference is that the film is set in outer space with alien worlds and other galactic wonders.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 1 win & 13 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NDg3MjU2OV5BMl5BanBnXkFtZTYwODgyMDg5._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "69%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "7.1",
    "imdbVotes": "85,993",
    "imdbID": "tt0133240",
    "Type": "movie",
    "DVD": "29 Apr 2003",
    "BoxOffice": "$38,120,554",
    "Production": "Buena Vista Distribution Compa",
    "Website": "http://disney.go.com/disneypictures/treasureplanet",
    "Response": "True"
  },
  "298": {
    "Title": "TRON",
    "Year": "1982",
    "Rated": "PG",
    "Released": "09 Jul 1982",
    "Runtime": "96 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven Lisberger",
    "Writer": "Steven Lisberger (screenplay), Steven Lisberger (story), Bonnie MacBird (story)",
    "Actors": "Jeff Bridges, Bruce Boxleitner, David Warner, Cindy Morgan",
    "Plot": "A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Oscars. Another 2 wins & 6 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.8",
    "imdbVotes": "103,301",
    "imdbID": "tt0084827",
    "Type": "movie",
    "DVD": "15 Jan 2002",
    "BoxOffice": "N/A",
    "Production": "Buena Vista Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "299": {
    "Title": "TRON: Legacy",
    "Year": "2010",
    "Rated": "PG",
    "Released": "17 Dec 2010",
    "Runtime": "125 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "Joseph Kosinski",
    "Writer": "Edward Kitsis (screenplay), Adam Horowitz (screenplay), Edward Kitsis (story), Adam Horowitz (story), Brian Klugman (story), Lee Sternthal (story), Steven Lisberger (characters), Bonnie MacBird (characters)",
    "Actors": "Jeff Bridges, Garrett Hedlund, Olivia Wilde, Bruce Boxleitner",
    "Plot": "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 10 wins & 49 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "51%"
      },
      {
        "Source": "Metacritic",
        "Value": "49/100"
      }
    ],
    "Metascore": "49",
    "imdbRating": "6.8",
    "imdbVotes": "289,045",
    "imdbID": "tt1104001",
    "Type": "movie",
    "DVD": "05 Apr 2011",
    "BoxOffice": "$172,051,787",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/TRON",
    "Response": "True"
  },
  "300": {
    "Title": "Two Weeks Notice",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "20 Dec 2002",
    "Runtime": "101 min",
    "Genre": "Comedy, Romance",
    "Director": "Marc Lawrence",
    "Writer": "Marc Lawrence",
    "Actors": "Sandra Bullock, Hugh Grant, Alicia Witt, Dana Ivey",
    "Plot": "A lawyer decides that she's used too much like a nanny by her boss, so she walks out on him.",
    "Language": "English",
    "Country": "USA, Australia",
    "Awards": "2 wins & 3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTg4N2M2ODItZjVjMy00YTljLTllNjUtYzY4ZTE2MTI2M2RhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "42%"
      },
      {
        "Source": "Metacritic",
        "Value": "42/100"
      }
    ],
    "Metascore": "42",
    "imdbRating": "6.1",
    "imdbVotes": "95,320",
    "imdbID": "tt0313737",
    "Type": "movie",
    "DVD": "29 Apr 2003",
    "BoxOffice": "$93,300,000",
    "Production": "Warner Bros.",
    "Website": "http://twoweeksnoticemovie.warnerbros.com",
    "Response": "True"
  },
  "301": {
    "Title": "Up",
    "Year": "2009",
    "Rated": "PG",
    "Released": "29 May 2009",
    "Runtime": "96 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Pete Docter, Bob Peterson(co-director)",
    "Writer": "Pete Docter (story by), Bob Peterson (story by), Tom McCarthy (story by), Bob Peterson (screenplay by), Pete Docter (screenplay by)",
    "Actors": "Edward Asner, Christopher Plummer, Jordan Nagai, Bob Peterson",
    "Plot": "Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 74 wins & 81 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "98%"
      },
      {
        "Source": "Metacritic",
        "Value": "88/100"
      }
    ],
    "Metascore": "88",
    "imdbRating": "8.3",
    "imdbVotes": "804,825",
    "imdbID": "tt1049413",
    "Type": "movie",
    "DVD": "10 Nov 2009",
    "BoxOffice": "$292,979,556",
    "Production": "Walt Disney Pictures",
    "Website": "http://Disney.com/UP",
    "Response": "True"
  },
  "302": {
    "Title": "Walk the Line",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "18 Nov 2005",
    "Runtime": "136 min",
    "Genre": "Biography, Drama, Music",
    "Director": "James Mangold",
    "Writer": "Johnny Cash (book), Johnny Cash (book), Gill Dennis, James Mangold",
    "Actors": "Joaquin Phoenix, Reese Witherspoon, Ginnifer Goodwin, Robert Patrick",
    "Plot": "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis, and Carl Perkins.",
    "Language": "English, Russian",
    "Country": "USA, Germany",
    "Awards": "Won 1 Oscar. Another 44 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTU3MjUxOF5BMl5BanBnXkFtZTcwMTQ0NjYzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.9",
    "imdbVotes": "206,501",
    "imdbID": "tt0358273",
    "Type": "movie",
    "DVD": "28 Feb 2006",
    "BoxOffice": "$119,317,827",
    "Production": "20th Century Fox",
    "Website": "http://www.walkthelinethemovie.com/",
    "Response": "True"
  },
  "303": {
    "Title": "WALL·E",
    "Year": "2008",
    "Rated": "G",
    "Released": "27 Jun 2008",
    "Runtime": "98 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Andrew Stanton",
    "Writer": "Andrew Stanton (original story by), Pete Docter (original story by), Andrew Stanton (screenplay by), Jim Reardon (screenplay by)",
    "Actors": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
    "Plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 89 wins & 90 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "95/100"
      }
    ],
    "Metascore": "95",
    "imdbRating": "8.4",
    "imdbVotes": "862,465",
    "imdbID": "tt0910970",
    "Type": "movie",
    "DVD": "18 Nov 2008",
    "BoxOffice": "$223,749,872",
    "Production": "Walt Disney Pictures",
    "Website": "http://www.wall-e.com/",
    "Response": "True"
  },
  "304": {
    "Title": "Warm Bodies",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "01 Feb 2013",
    "Runtime": "98 min",
    "Genre": "Comedy, Horror, Romance",
    "Director": "Jonathan Levine",
    "Writer": "Isaac Marion (based on the novel by), Jonathan Levine (screenplay)",
    "Actors": "Nicholas Hoult, Teresa Palmer, Analeigh Tipton, Rob Corddry",
    "Plot": "After a highly unusual zombie saves a still-living girl from an attack, the two form a relationship that sets in motion events that might transform the entire lifeless world.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "1 win & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MjY2MjMzOV5BMl5BanBnXkFtZTcwMDUxNzIwOQ@@._V1._CR43,43.16667175292969,1298,1960.9999542236328_SX89_AL_.jpg_V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "80%"
      },
      {
        "Source": "Metacritic",
        "Value": "60/100"
      }
    ],
    "Metascore": "60",
    "imdbRating": "6.9",
    "imdbVotes": "204,262",
    "imdbID": "tt1588173",
    "Type": "movie",
    "DVD": "04 Jun 2013",
    "BoxOffice": "$65,000,000",
    "Production": "Lionsgate Films",
    "Website": "http://warmbodiesmovie.com/",
    "Response": "True"
  },
  "305": {
    "Title": "We Are Marshall",
    "Year": "2006",
    "Rated": "PG",
    "Released": "22 Dec 2006",
    "Runtime": "131 min",
    "Genre": "Drama, Sport",
    "Director": "McG",
    "Writer": "Jamie Linden (screenplay), Cory Helms (story), Jamie Linden (story)",
    "Actors": "Matthew McConaughey, Matthew Fox, Anthony Mackie, David Strathairn",
    "Plot": "When a plane crash claims the lives of members of the Marshall University football team and some of its fans, the team's new coach and his surviving players try to keep the football program alive.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwNDczNTg5MF5BMl5BanBnXkFtZTcwNDMwMzEzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "49%"
      },
      {
        "Source": "Metacritic",
        "Value": "53/100"
      }
    ],
    "Metascore": "53",
    "imdbRating": "7.1",
    "imdbVotes": "52,069",
    "imdbID": "tt0758794",
    "Type": "movie",
    "DVD": "18 Sep 2007",
    "BoxOffice": "$43,532,294",
    "Production": "Warner Bros. Pictures",
    "Website": "http://wearemarshall-themovie.com/",
    "Response": "True"
  },
  "306": {
    "Title": "The Wedding Singer",
    "Year": "1998",
    "Rated": "PG-13",
    "Released": "13 Feb 1998",
    "Runtime": "100 min",
    "Genre": "Comedy, Music, Romance",
    "Director": "Frank Coraci",
    "Writer": "Tim Herlihy",
    "Actors": "Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert",
    "Plot": "Robbie, a singer, and Julia, a waitress, are both engaged, but to the wrong people. Fortune intervenes to help them discover each other.",
    "Language": "English",
    "Country": "USA",
    "Awards": "5 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjM5YTQ0ZGYtMWExZi00MTFmLTg0YjUtZDcyMGNiYzE5MmNmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "68%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.8",
    "imdbVotes": "121,341",
    "imdbID": "tt0120888",
    "Type": "movie",
    "DVD": "05 Aug 1998",
    "BoxOffice": "N/A",
    "Production": "New Line Cinema",
    "Website": "N/A",
    "Response": "True"
  },
  "307": {
    "Title": "West Side Story",
    "Year": "1961",
    "Rated": "NOT RATED",
    "Released": "23 Dec 1961",
    "Runtime": "153 min",
    "Genre": "Crime, Drama, Musical",
    "Director": "Jerome Robbins, Robert Wise",
    "Writer": "Ernest Lehman (screenplay), Arthur Laurents (book), Jerome Robbins (play)",
    "Actors": "Natalie Wood, Richard Beymer, Russ Tamblyn, Rita Moreno",
    "Plot": "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 10 Oscars. Another 18 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "86/100"
      }
    ],
    "Metascore": "86",
    "imdbRating": "7.6",
    "imdbVotes": "83,720",
    "imdbID": "tt0055614",
    "Type": "movie",
    "DVD": "20 Oct 1998",
    "BoxOffice": "N/A",
    "Production": "United Artists Films",
    "Website": "http://www.westsidestory-themovie.com/",
    "Response": "True"
  },
  "308": {
    "Title": "Willy Wonka & the Chocolate Factory",
    "Year": "1971",
    "Rated": "G",
    "Released": "30 Jun 1971",
    "Runtime": "100 min",
    "Genre": "Family, Fantasy, Musical",
    "Director": "Mel Stuart",
    "Writer": "Roald Dahl (screenplay), Roald Dahl (book)",
    "Actors": "Gene Wilder, Jack Albertson, Peter Ostrum, Roy Kinnear",
    "Plot": "A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka's mysterious chocolate factory.",
    "Language": "English, French, German, Italian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 2 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTllNDU0ZTItYTYxMC00OTI4LThlNDAtZjNiNzdhMWZiYjNmXkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "7.8",
    "imdbVotes": "152,687",
    "imdbID": "tt0067992",
    "Type": "movie",
    "DVD": "28 Aug 2001",
    "BoxOffice": "$4,000,000",
    "Production": "Paramount Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  "309": {
    "Title": "The Wind in the Willows",
    "Year": "1983",
    "Rated": "TV-G",
    "Released": "27 Dec 1983",
    "Runtime": "79 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Mark Hall",
    "Writer": "Rosemary Anne Sisson (adaptation), Kenneth Grahame (novel)",
    "Actors": "Richard Pearson, Ian Carmichael, David Jason, Michael Hordern",
    "Plot": "Toad, Rat, Mole and Badger follow animal etiquette in this version of Kenneth Grahame's classic, in stop-motion model animation.",
    "Language": "English",
    "Country": "UK",
    "Awards": "1 win & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI4MDAzMzE0MF5BMl5BanBnXkFtZTcwMTg3MDIzMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "1,115",
    "imdbID": "tt0086590",
    "Type": "movie",
    "DVD": "26 Oct 2004",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  "310": {
    "Title": "The Wizard of Oz",
    "Year": "1939",
    "Rated": "PG",
    "Released": "25 Aug 1939",
    "Runtime": "102 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Victor Fleming, George Cukor, Mervyn LeRoy, Norman Taurog, King Vidor",
    "Writer": "Noel Langley (screenplay), Florence Ryerson (screenplay), Edgar Allan Woolf (screenplay), Noel Langley (adaptation), L. Frank Baum (from the book by)",
    "Actors": "Judy Garland, Frank Morgan, Ray Bolger, Bert Lahr",
    "Plot": "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 2 Oscars. Another 7 wins & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "98%"
      },
      {
        "Source": "Metacritic",
        "Value": "100/100"
      }
    ],
    "Metascore": "100",
    "imdbRating": "8.0",
    "imdbVotes": "339,419",
    "imdbID": "tt0032138",
    "Type": "movie",
    "DVD": "19 Oct 1999",
    "BoxOffice": "$3,840,702",
    "Production": "Warner Bros. Pictures",
    "Website": "http://thewizardofoz.warnerbros.com/",
    "Response": "True"
  },
  "311": {
    "Title": "Wonder Woman",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "02 Jun 2017",
    "Runtime": "141 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Patty Jenkins",
    "Writer": "Allan Heinberg (screenplay by), Zack Snyder (story by), Allan Heinberg (story by), Jason Fuchs (story by), William Moulton Marston (Wonder Woman created by)",
    "Actors": "Gal Gadot, Chris Pine, Connie Nielsen, Robin Wright",
    "Plot": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
    "Language": "English, German, Dutch, French, Spanish, Chinese, Greek,  Ancient (to 1453), North American Indian",
    "Country": "Hong Kong, China, USA",
    "Awards": "17 wins & 54 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "7.5",
    "imdbVotes": "438,719",
    "imdbID": "tt0451279",
    "Type": "movie",
    "DVD": "19 Sep 2017",
    "BoxOffice": "$412,400,625",
    "Production": "Warner Bros. Pictures",
    "Website": "http://wonderwomanfilm.com/",
    "Response": "True"
  },
  "312": {
    "Title": "World War Z",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "21 Jun 2013",
    "Runtime": "116 min",
    "Genre": "Action, Adventure, Horror",
    "Director": "Marc Forster",
    "Writer": "Matthew Michael Carnahan (screenplay), Drew Goddard (screenplay), Damon Lindelof (screenplay), Matthew Michael Carnahan (screen story), J. Michael Straczynski (screen story), Max Brooks (based on the novel by)",
    "Actors": "Brad Pitt, Mireille Enos, Daniella Kertesz, James Badge Dale",
    "Plot": "Former United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.",
    "Language": "English, Spanish, Hebrew, Arabic",
    "Country": "USA",
    "Awards": "3 wins & 24 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "66%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Metascore": "63",
    "imdbRating": "7.0",
    "imdbVotes": "534,104",
    "imdbID": "tt0816711",
    "Type": "movie",
    "DVD": "17 Sep 2013",
    "BoxOffice": "$202,351,611",
    "Production": "Paramount Pictures",
    "Website": "http://tinyurl.com/oo4f7jj",
    "Response": "True"
  },
  "313": {
    "Title": "Wrath of the Titans",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "30 Mar 2012",
    "Runtime": "99 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Jonathan Liebesman",
    "Writer": "Dan Mazeau (screenplay), David Leslie Johnson-McGoldrick (screenplay), Greg Berlanti (story), David Leslie Johnson-McGoldrick (story), Dan Mazeau (story), Beverley Cross",
    "Actors": "Sam Worthington, Liam Neeson, Ralph Fiennes, Edgar Ramírez",
    "Plot": "Perseus braves the treacherous underworld to rescue his father, Zeus, captured by his son, Ares, and brother Hades who unleash the ancient Titans upon the world.",
    "Language": "English",
    "Country": "Spain, USA",
    "Awards": "2 wins & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyMzk1Nzg3OF5BMl5BanBnXkFtZTcwOTQ2NjcxNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "26%"
      },
      {
        "Source": "Metacritic",
        "Value": "37/100"
      }
    ],
    "Metascore": "37",
    "imdbRating": "5.7",
    "imdbVotes": "167,438",
    "imdbID": "tt1646987",
    "Type": "movie",
    "DVD": "26 Jun 2012",
    "BoxOffice": "$83,640,426",
    "Production": "Warner Bros.",
    "Website": "http://wrathofthetitans.warnerbros.com/index.html",
    "Response": "True"
  },
  "314": {
    "Title": "Wreck-It Ralph",
    "Year": "2012",
    "Rated": "PG",
    "Released": "02 Nov 2012",
    "Runtime": "101 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Rich Moore",
    "Writer": "Rich Moore (story by), Phil Johnston (story by), Jim Reardon (story by), Phil Johnston (screenplay by), Jennifer Lee (screenplay by), John C. Reilly (additional story material by), Sam Levine (additional story material by), Jared Stern (additional story material by)",
    "Actors": "John C. Reilly, Sarah Silverman, Jack McBrayer, Jane Lynch",
    "Plot": "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 33 wins & 41 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "72/100"
      }
    ],
    "Metascore": "72",
    "imdbRating": "7.7",
    "imdbVotes": "317,886",
    "imdbID": "tt1772341",
    "Type": "movie",
    "DVD": "05 Mar 2013",
    "BoxOffice": "$189,412,677",
    "Production": "Walt Disney Pictures",
    "Website": "http://disney.go.com/wreck-it-ralph/",
    "Response": "True"
  },
  "315": {
    "Title": "X-Men",
    "Year": "2000",
    "Rated": "PG-13",
    "Released": "14 Jul 2000",
    "Runtime": "104 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Bryan Singer",
    "Writer": "Tom DeSanto (story), Bryan Singer (story), David Hayter (screenplay)",
    "Actors": "Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen",
    "Plot": "Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers.",
    "Language": "English",
    "Country": "USA",
    "Awards": "13 wins & 26 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmJkOGY4YjYtM2FmYy00MTIyLTg2YTUtMzJiNjljMWM5MGUwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "7.4",
    "imdbVotes": "516,917",
    "imdbID": "tt0120903",
    "Type": "movie",
    "DVD": "21 Nov 2000",
    "BoxOffice": "$156,164,829",
    "Production": "20th Century Fox",
    "Website": "http://www.x-men-the-movie.com",
    "Response": "True"
  },
  "316": {
    "Title": "X-Men: Apocalypse",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "27 May 2016",
    "Runtime": "144 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Bryan Singer",
    "Writer": "Simon Kinberg (screenplay by), Bryan Singer (story by), Simon Kinberg (story by), Michael Dougherty (story by), Dan Harris (story by)",
    "Actors": "James McAvoy, Michael Fassbender, Jennifer Lawrence, Nicholas Hoult",
    "Plot": "After the re-emergence of the world's first mutant, the world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    "Language": "English, Polish, German, Arabic, Egyptian (Ancient)",
    "Country": "USA",
    "Awards": "1 win & 14 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "48%"
      },
      {
        "Source": "Metacritic",
        "Value": "52/100"
      }
    ],
    "Metascore": "52",
    "imdbRating": "7.0",
    "imdbVotes": "331,377",
    "imdbID": "tt3385516",
    "Type": "movie",
    "DVD": "04 Oct 2016",
    "BoxOffice": "$135,729,385",
    "Production": "20th Century Fox",
    "Website": "https://www.facebook.com/xmenmovies",
    "Response": "True"
  },
  "317": {
    "Title": "X-Men: Days of Future Past",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "23 May 2014",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Bryan Singer",
    "Writer": "Simon Kinberg (screenplay by), Jane Goldman (story by), Simon Kinberg (story by), Matthew Vaughn (story by)",
    "Actors": "Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence",
    "Plot": "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
    "Language": "English, Vietnamese, French",
    "Country": "USA, UK, Canada",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 47 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "8.0",
    "imdbVotes": "594,223",
    "imdbID": "tt1877832",
    "Type": "movie",
    "DVD": "14 Oct 2014",
    "BoxOffice": "$199,305,306",
    "Production": "20th Century Fox",
    "Website": "http://www.x-menmovies.com/",
    "Response": "True"
  },
  "318": {
    "Title": "X-Men: The Last Stand",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "26 May 2006",
    "Runtime": "104 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Brett Ratner",
    "Writer": "Simon Kinberg, Zak Penn",
    "Actors": "Hugh Jackman, Halle Berry, Ian McKellen, Patrick Stewart",
    "Plot": "An all-out war looms when the discovery of a cure for mutations draws a line between the followers of Charles Xavier and those of Magneto.",
    "Language": "English",
    "Country": "Canada, USA, UK",
    "Awards": "7 wins & 37 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "58%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.7",
    "imdbVotes": "434,992",
    "imdbID": "tt0376994",
    "Type": "movie",
    "DVD": "03 Oct 2006",
    "BoxOffice": "$234,300,000",
    "Production": "20th Century Fox",
    "Website": "http://www.x-menthelaststand.com/",
    "Response": "True"
  },
  "319": {
    "Title": "F/X2",
    "Year": "1991",
    "Rated": "PG-13",
    "Released": "10 May 1991",
    "Runtime": "108 min",
    "Genre": "Action, Thriller",
    "Director": "Richard Franklin",
    "Writer": "Robert T. Megginson (characters), Gregory Fleeman (characters), Bill Condon",
    "Actors": "Bryan Brown, Brian Dennehy, Rachel Ticotin, Joanna Gleason",
    "Plot": "F/X man Rollie Tyler (Bryan Brown) is now a toy maker. Mike Brandon (Tom Mason), the ex-husband of Rolly's girlfriend Kim(Rachel Ticotin), is a cop. He asks Rollie to help catch a killer. ...",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MzAxODMwOF5BMl5BanBnXkFtZTcwNDY1MDY2NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "33%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "5.8",
    "imdbVotes": "7,422",
    "imdbID": "tt0101846",
    "Type": "movie",
    "DVD": "13 Jun 2000",
    "BoxOffice": "N/A",
    "Production": "Orion Home Video",
    "Website": "N/A",
    "Response": "True"
  },
  "320": {
    "Title": "Yes Man",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "19 Dec 2008",
    "Runtime": "104 min",
    "Genre": "Comedy, Romance",
    "Director": "Peyton Reed",
    "Writer": "Nicholas Stoller (screenplay), Jarrad Paul (screenplay), Andrew Mogel (screenplay), Danny Wallace (book)",
    "Actors": "Jim Carrey, Zooey Deschanel, Bradley Cooper, John Michael Higgins",
    "Plot": "A man challenges himself to say \"yes\" to everything for an entire year.",
    "Language": "English, Korean, Estonian",
    "Country": "USA, UK",
    "Awards": "3 wins & 8 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzBmZTMzYmItNzhhMC00M2FkLWIxMGEtMjIxMjAwNmQ2ZmM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "46%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "6.8",
    "imdbVotes": "301,913",
    "imdbID": "tt1068680",
    "Type": "movie",
    "DVD": "07 Apr 2009",
    "BoxOffice": "$97,600,000",
    "Production": "Warner Bros. Pictures/Village Roadshow",
    "Website": "http://yesisthenewno.warnerbros.com/",
    "Response": "True"
  },
  "321": {
    "Title": "You've Got Mail",
    "Year": "1998",
    "Rated": "PG",
    "Released": "18 Dec 1998",
    "Runtime": "119 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Nora Ephron",
    "Writer": "Miklós László (play), Nora Ephron (screenplay), Delia Ephron (screenplay)",
    "Actors": "Tom Hanks, Meg Ryan, Greg Kinnear, Parker Posey",
    "Plot": "Two business rivals who despise each other in real life unwittingly fall in love over the Internet.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Golden Globe. Another 5 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTcxNzgzZjMtYzZiZC00MmE1LTg3MzQtZDAxMTYyZWE4MDNhL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "69%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "6.6",
    "imdbVotes": "171,461",
    "imdbID": "tt0128853",
    "Type": "movie",
    "DVD": "04 May 1999",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "http://www.youvegotmail.com",
    "Response": "True"
  },
  "322": {
    "Title": "Zootopia",
    "Year": "2016",
    "Rated": "PG",
    "Released": "04 Mar 2016",
    "Runtime": "108 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Byron Howard, Rich Moore, Jared Bush(co-director)",
    "Writer": "Byron Howard (story by), Rich Moore (story by), Jared Bush (story by), Jim Reardon (story by), Josie Trinidad (story by), Phil Johnston (story by), Jennifer Lee (story by), Jared Bush (screenplay by), Phil Johnston (screenplay by)",
    "Actors": "Ginnifer Goodwin, Jason Bateman, Idris Elba, Jenny Slate",
    "Plot": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 45 wins & 65 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "78/100"
      }
    ],
    "Metascore": "78",
    "imdbRating": "8.0",
    "imdbVotes": "356,166",
    "imdbID": "tt2948356",
    "Type": "movie",
    "DVD": "07 Jun 2016",
    "BoxOffice": "$341,264,012",
    "Production": "Walt Disney Animation Studios",
    "Website": "http://movies.disney.com/zootopia",
    "Response": "True"
  }
},
};

const stateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      const {filters, continueWatching, yourList,} = state;

      filters[action.payload] = !filters[action.payload];
      const newState = {filters, continueWatching, yourList};
      return newState
      
    default:
      return state
  }
};

export default combineReducers({
  content: stateReducer,
});
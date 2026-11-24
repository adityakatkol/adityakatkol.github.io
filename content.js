/*
  ALL THE TEXT ON THE SITE LIVES IN THIS FILE.

  To change something, edit the words between the quotes and save.
  A few rules so nothing breaks:
    - Keep the quotes around each piece of text.
    - Keep the comma at the end of each line or block.
    - If your text needs an apostrophe, it's fine: these strings use double quotes.
      If your text needs a double quote, put a backslash before it: \"like this\"
    - Lists use [ square brackets ] and each item is separated by a comma.

  To add a project, copy one whole { ... } block inside "projects",
  paste it after the last one (with a comma between them), and change the text.
  Give it a new "id" with no spaces (it becomes the web address of its page).
*/

window.SITE = {
  name: "Aditya Katkol",

  // Shown in browser tabs and search results.
  description: "Aditya Katkol: software developer and data science master's student. Projects, experience and resume.",

  // ---------- Top of the home page ----------
  greeting: "Aditya Katkol",
  intro: "I'm a software developer at CheckIt Labs and a data science master's student at UC Berkeley. My current project is building Fantasy Lab, a fantasy football site I use for my own Sleeper leagues.",

  // ---------- Contact links ----------
  links: {
    email: "adityakatkol@gmail.com",
    github: "https://github.com/adityakatkol",
    linkedin: "https://www.linkedin.com/in/adityakatkol/",
    resume: "assets/Aditya_Katkol_Resume.pdf"
  },

  // ---------- Projects ----------
  projectsNote: "Click a project to see how it works.",

  projects: [
    {
      id: "fantasy-lab",
      title: "Fantasy Lab",
      label: "Live site",
      year: "2026",
      summary: "A fantasy football site with weekly and rest-of-season rankings, waiver pickups, a trade calculator, and player pages with game logs going back to 1999. It connects to Sleeper leagues, and the stats and projections update every morning.",
      // Picture on the home page card
      cardImage: "assets/img/fantasy-lab-dashboard.jpg?v=3",
      cardImageAlt: "Fantasy Lab home dashboard with example leagues and this week's matchups",
      // Picture at the top of the write-up page
      image: "assets/img/fantasy-lab-dashboard.jpg?v=3",
      imageAlt: "Fantasy Lab home dashboard with example leagues, records and this week's matchups",
      stack: ["Python 3.12", "nflverse", "Sleeper API", "NFL injury reports", "HTML / CSS / JS", "Cloudflare Pages"],
      liveUrl: "https://fantasy-lab.pages.dev",

      // The full write-up page for this project.
      writeup: [
        {
          heading: "What it is",
          paragraphs: [
            "Fantasy Lab is a fantasy football site for season-long leagues. It has weekly and rest-of-season rankings by position, start/sit help, waiver pickups with suggested bids, a trade calculator, and a page for every player with stats, usage and career game logs.",
            "You can connect a Sleeper account to see your own leagues: your lineup, this week's matchup, and who's available on waivers."
          ]
        },
        {
          heading: "Where the data comes from",
          list: [
            "nflverse for weekly stats, snap counts and rosters, going back to 1999.",
            "The Sleeper API for player status, league rosters, lineups and matchups.",
            "Official NFL injury reports for who's practicing and who's out."
          ]
        },
        {
          heading: "How it works",
          paragraphs: [
            "A Python 3.12 pipeline pulls in the data, cleans it, and runs a custom projections engine. The engine weights the current season most heavily, accounts for bye weeks and injuries, and turns projections into rankings and trade values.",
            "The pipeline writes its results as data files that a plain HTML, CSS and JavaScript front end reads. There's no server to keep running. The site is hosted on Cloudflare Pages, and a scheduled GitHub Actions job reruns the pipeline every morning so the numbers stay current."
          ],
          image: "assets/img/fantasy-lab-rankings.jpg?v=2",
          imageAlt: "Weekly quarterback rankings with player photos, team, opponent, projection, floor, ceiling and tiers"
        },
        {
          heading: "Start/sit",
          paragraphs: [
            "The start/sit page is for the decision everyone makes every week: which player goes in the lineup. Pick two or three players and it gives a clear call, with the reasons behind it.",
            "It simulates the week 20,000 times to show how often each player comes out on top, and lists the things that matter: the matchup, recent form, weather, and who has the safer floor or the higher ceiling."
          ],
          image: "assets/img/fantasy-lab-startsit.jpg?v=1",
          imageAlt: "Start/sit comparison of Brock Purdy and Dak Prescott with a recommendation, win chances and the reasons behind it"
        },
        {
          heading: "Trade calculator",
          paragraphs: [
            "The trade calculator answers whether a trade is fair. Add players to each side and a meter shows who comes out ahead, from a clear loss to a clear win.",
            "Values work like a real trade market: one star is worth more than several average players, and quarterbacks count for less in normal one-QB leagues. When a deal is lopsided, it suggests players that would even it out."
          ],
          image: "assets/img/fantasy-lab-trade.jpg?v=1",
          imageAlt: "Trade calculator showing a two-for-one trade, a verdict meter, and suggested players to balance it"
        },
        {
          heading: "Player pages",
          paragraphs: [
            "Every player page has a season summary, weekly finishes, snap share and red zone usage, and a full game log for every season they've played."
          ],
          image: "assets/img/fantasy-lab-gamelog.jpg?v=2",
          imageAlt: "Player game log with fantasy points, weekly finish, snap share, rushing and receiving stats"
        }
      ]
    },
    {
      id: "connecticut-overdose-data",
      title: "Connecticut overdose data",
      label: "Data analysis",
      year: "2023",
      summary: "An analysis of Connecticut's public data on accidental drug deaths from 2012 to 2018: who was dying, which drugs were involved, and where. Charts and maps built in Tableau, with policy ideas presented to department leaders.",
      image: "assets/img/ct-deaths-by-year.jpg?v=1",
      imageAlt: "Bar chart of accidental drug deaths in Connecticut by year, rising from 355 in 2012 to 1,038 in 2017",
      stack: ["Tableau", "Connecticut open data"],
      liveUrl: "https://public.tableau.com/app/profile/aditya.katkol/viz/ConnecticutOverdoseData/Sheet2",
      liveLabel: "View in Tableau",
      // Optional second button
      extraUrl: "https://data.ct.gov/Health-and-Human-Services/Accidental-Drug-Related-Deaths-2012-2024/rybz-nyjw",
      extraLabel: "See the dataset",

      writeup: [
        {
          heading: "What it was",
          paragraphs: [
            "An analysis of data from Connecticut's Office of the Chief Medical Examiner, which lists every accidental death linked to a drug overdose in the state, with the person's age, sex, town and the drugs found.",
            "The analysis covers 2012 to 2018, about 5,100 deaths. The state still publishes this data, and it now runs through 2024."
          ]
        },
        {
          heading: "What it found",
          list: [
            "Deaths almost tripled in six years, from 355 in 2012 to a peak of 1,038 in 2017.",
            "About three out of four people who died were men. Deaths among men peaked at ages 35 to 39, and among women at ages 50 to 54.",
            "Fentanyl was the big change. It showed up in 13 deaths in 2012 and 760 in 2018, passing heroin in 2017.",
            "Hartford and New Haven counties had the most deaths by far, together close to half of the total."
          ]
        },
        {
          heading: "What was done with it",
          list: [
            "Charts and maps in Tableau by age, sex, drug, county and year.",
            "A written report and a video walking through the findings.",
            "Policy ideas: putting education, treatment and emergency response money into the hardest-hit communities, tracking prescription drug use, and school outreach. These were presented to a board of department leaders."
          ]
        }
      ]
    }
  ],

  // ---------- About ----------
  about: [
    "I've been a software developer at CheckIt Labs since 2024. I'm a backend developer on the AI development & analytics team for the flagship platform, CheckIT Learning.",
    "I studied Information Systems at UC Riverside, and in 2026 I started the Master of Information and Data Science program at UC Berkeley."
  ],

  // ---------- Experience ----------
  experience: [
    {
      years: "2024 – now",
      title: "Software Developer, CheckIt Labs",
      text: "Backend & analytics for an AI education platform: chat agent, dashboard analytics, and the tests around them."
    },
    {
      years: "2023",
      title: "Data Science Intern, Sequretek",
      text: "Sped up Python scripts and found database bottlenecks for a cybersecurity platform."
    }
  ],

  // ---------- Education ----------
  education: [
    {
      years: "2026 – 2028",
      title: "UC Berkeley, School of Information",
      text: "Master of Information and Data Science"
    },
    {
      years: "2020 – 2024",
      title: "UC Riverside, School of Business",
      text: "B.S. Business Administration, Information Systems"
    }
  ]
};

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
  greeting: "Aditya Katkol.",
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
      image: "assets/img/fantasy-lab-player.jpg",
      imageAlt: "Fantasy Lab player page showing weekly points, outlook and recent games",
      stack: ["Python 3.12", "pandas", "nflverse", "Sleeper API", "NFL injury reports", "HTML / CSS / JS", "Cloudflare Pages", "GitHub Actions"],
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
            "A Python 3.12 pipeline built on pandas pulls in the data, cleans it, and runs a custom projections engine. The engine weights the current season most heavily, accounts for bye weeks and injuries, and turns projections into rankings and trade values.",
            "The pipeline writes its results as data files that a plain HTML, CSS and JavaScript front end reads. There's no server to keep running. The site is hosted on Cloudflare Pages, and a scheduled GitHub Actions job reruns the pipeline every morning so the numbers stay current."
          ],
          image: "assets/img/fantasy-lab-rankings.jpg",
          imageAlt: "Weekly quarterback rankings with projections, floor, ceiling and tiers"
        },
        {
          heading: "Player pages",
          paragraphs: [
            "Every player page has a season summary, weekly finishes, snap share and red zone usage, and a full game log for every season they've played."
          ],
          image: "assets/img/fantasy-lab-gamelog.jpg",
          imageAlt: "Player game log with fantasy points, weekly finish, snap share, rushing and receiving stats"
        }
      ]
    },
    {
      id: "connecticut-overdose-data",
      title: "Connecticut overdose data",
      label: "Class project",
      year: "2023",
      summary: "Looked at public health data on overdose cases in Connecticut, mapped where they were concentrated in Tableau, and presented policy ideas for New Haven and Hartford to department leaders at UC Riverside's business school.",
      image: "",
      imageAlt: "",
      stack: ["Tableau", "Public health data"],
      liveUrl: "",

      writeup: [
        {
          heading: "What it was",
          paragraphs: [
            "A class project at UC Riverside's School of Business, from September to December 2023. We analyzed public health datasets on overdose cases in Connecticut to look for demographic trends."
          ]
        },
        {
          heading: "What we did",
          list: [
            "Ran a quantitative analysis of the datasets to find which groups and areas were most affected.",
            "Built Tableau maps of the areas with the most incidents, which pointed to New Haven and Hartford (over 2,000 cases).",
            "Turned the findings into policy recommendations and presented them to a board of department leaders."
          ]
        }
      ]
    }
  ],

  // ---------- About ----------
  about: [
    "I've been a software developer at CheckIt Labs since 2024. I'm the backend developer on the AI development & analytics team for the flagship platform, CheckIT Learning.",
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

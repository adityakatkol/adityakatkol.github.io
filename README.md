# adityakatkol.github.io

My personal site: projects, experience and resume.

Live at https://adityakatkol.github.io

## Editing the text

All the words on the site are in **`content.js`**. Open it, change the text between the quotes, save, and push. The site updates on its own a minute or two later.

- **Intro at the top:** `greeting` and `intro`
- **Email, GitHub, LinkedIn, resume:** `links`
- **Projects:** `projects`. The first project gets the big card, the rest show up as smaller cards below it. Each one's `writeup` is its "How it works" page.
- **About, Experience, Education:** `about`, `experience`, `education`

To add a project, copy one whole `{ ... }` block in `projects`, paste it after the last one with a comma between them, and give it a new `id` with no spaces.

## Swapping files

- **Resume:** replace `assets/Aditya_Katkol_Resume.pdf` with a new file of the same name.
- **Screenshots:** put images in `assets/img/` and point the project's `image` at them.

## Previewing on your laptop

From this folder, run:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Files

| File | What it does |
| --- | --- |
| `content.js` | All the text |
| `index.html` | Home page layout |
| `project.html` | Project write-up page layout |
| `css/style.css` | Colors, fonts, spacing |
| `js/main.js` | Puts the text from `content.js` into the pages |
| `404.html` | Page shown for broken links |

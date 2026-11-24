// Builds the pages from the text in content.js. You shouldn't need to edit this file.
(function () {
  var S = window.SITE;
  var page = document.body.getAttribute("data-page");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(id) { return document.getElementById(id); }
  function chips(list) {
    return '<ul class="chips">' + (list || []).map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>";
  }
  function writeupUrl(p) { return "project.html?id=" + encodeURIComponent(p.id); }
  function external(url, text, cls) {
    return '<a class="' + cls + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(text) + "</a>";
  }
  function rows(items) {
    return items.map(function (r) {
      return '<div class="row"><span class="years">' + esc(r.years) + "</span><div><b>" + esc(r.title) +
        '</b><span class="text">' + esc(r.text) + "</span></div></div>";
    }).join("");
  }
  function shortLink(url) {
    return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").replace(/^linkedin\.com\//, "").replace(/^github\.com\//, "");
  }

  // Shared bits on every page
  document.querySelectorAll("[data-name]").forEach(function (el) { el.textContent = S.name; });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-email]").forEach(function (el) { el.href = "mailto:" + S.links.email; });
  document.querySelectorAll("[data-github]").forEach(function (el) { el.href = S.links.github; });
  document.querySelectorAll("[data-linkedin]").forEach(function (el) { el.href = S.links.linkedin; });
  var meta = document.querySelector('meta[name="description"]');

  if (page === "home") {
    document.title = S.name;
    if (meta) meta.content = S.description;
    $("greeting").textContent = S.greeting;
    $("intro").textContent = S.intro;

    $("links").innerHTML =
      '<a href="mailto:' + esc(S.links.email) + '">Email <small>' + esc(S.links.email) + "</small></a>" +
      '<a href="' + esc(S.links.github) + '" target="_blank" rel="noopener">GitHub <small>' + esc(shortLink(S.links.github)) + "</small></a>" +
      '<a href="' + esc(S.links.linkedin) + '" target="_blank" rel="noopener">LinkedIn <small>' + esc(shortLink(S.links.linkedin)) + "</small></a>" +
      '<a href="' + esc(S.links.resume) + '" target="_blank" rel="noopener">Resume <small>PDF</small></a>';

    $("projects-note").textContent = S.projectsNote;
    var first = S.projects[0];
    var rest = S.projects.slice(1);
    var html = "";
    if (first) {
      html += '<article class="card feature">' +
        ((first.cardImage || first.image) ? '<img src="' + esc(first.cardImage || first.image) + '" alt="' + esc(first.cardImageAlt || first.imageAlt) + '">' : "") +
        '<div><div class="label">' + esc(first.label) + "</div>" +
        '<h3><a href="' + writeupUrl(first) + '">' + esc(first.title) + "</a></h3>" +
        "<p>" + esc(first.summary) + "</p>" + chips(first.stack) +
        '<div class="btns">' +
        (first.liveUrl ? external(first.liveUrl, first.liveLabel || "Visit site", "btn solid") : "") +
        '<a class="btn line" href="' + writeupUrl(first) + '">How it works</a></div></div></article>';
    }
    if (rest.length) {
      html += '<div class="grid2">' + rest.map(function (p) {
        return '<article class="card small"><div class="label">' + esc(p.label) + (p.year ? " &middot; " + esc(p.year) : "") + "</div>" +
          '<h3><a href="' + writeupUrl(p) + '">' + esc(p.title) + "</a></h3>" +
          "<p>" + esc(p.summary) + "</p>" + chips(p.stack) +
          (p.liveUrl ? '<div class="btns" style="margin-top:18px">' + external(p.liveUrl, p.liveLabel || "Visit site", "btn solid") + (p.extraUrl ? external(p.extraUrl, p.extraLabel || "More", "btn line") : "") + "</div>" : "") +
          "</article>";
      }).join("") + "</div>";
    }
    $("project-list").innerHTML = html;

    $("about-text").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    $("experience-list").innerHTML = rows(S.experience);
    $("education-list").innerHTML = rows(S.education);
    $("resume-btn").href = S.links.resume;
  }

  if (page === "project") {
    var id = new URLSearchParams(location.search).get("id");
    var p = S.projects.filter(function (x) { return x.id === id; })[0];
    if (!p) { location.replace("404.html"); return; }

    document.title = p.title + " | " + S.name;
    if (meta) meta.content = p.summary;
    var out = '<header class="wu-head"><div class="label">' + esc(p.label) + (p.year ? " &middot; " + esc(p.year) : "") + "</div>" +
      "<h1>" + esc(p.title) + '</h1><p class="lede">' + esc(p.summary) + "</p>" + chips(p.stack) +
      (p.liveUrl ? '<div class="btns">' + external(p.liveUrl, p.liveLabel || "Visit site", "btn solid") + (p.extraUrl ? external(p.extraUrl, p.extraLabel || "More", "btn line") : "") + "</div>" : "") + "</header>";
    if (p.image) out += '<img class="wu-hero" src="' + esc(p.image) + '" alt="' + esc(p.imageAlt) + '">';

    (p.writeup || []).forEach(function (s) {
      out += '<section class="wu-sec split"><h2>' + esc(s.heading) + '</h2><div class="body">';
      (s.paragraphs || []).forEach(function (t) { out += "<p>" + esc(t) + "</p>"; });
      if (s.list) out += '<ul class="points">' + s.list.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
      if (s.image) out += '<figure><img src="' + esc(s.image) + '" alt="' + esc(s.imageAlt) + '" loading="lazy"><figcaption>' + esc(s.imageAlt) + "</figcaption></figure>";
      out += "</div></section>";
    });
    $("writeup").innerHTML = out;
  }
})();

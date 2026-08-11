// Mobilné menu (hamburger)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // Automatické triedenie podujatí na "pripravované" a "archív" podľa dátumu.
  // Netreba nič meniť v tomto súbore - podujatia sa upravujú v aktuality.html.
  var dataBox = document.getElementById("events-data");
  var upcomingList = document.getElementById("upcoming-events");
  var pastList = document.getElementById("past-events");
  if (dataBox && upcomingList && pastList) {
    var cards = Array.prototype.slice.call(dataBox.querySelectorAll(".event-card"));
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var upcoming = [];
    var past = [];
    cards.forEach(function (card) {
      var raw = card.getAttribute("data-date");
      var d = raw ? new Date(raw + "T00:00:00") : null;
      if (d && !isNaN(d) && d >= today) {
        upcoming.push(card);
      } else {
        past.push(card);
      }
    });

    upcoming.sort(function (a, b) {
      return new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date"));
    });
    past.sort(function (a, b) {
      return new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date"));
    });

    upcoming.forEach(function (c) { upcomingList.appendChild(c); });
    past.forEach(function (c) { pastList.appendChild(c); });

    var emptyMsg = document.getElementById("no-events-msg");
    if (emptyMsg) emptyMsg.style.display = upcoming.length === 0 ? "block" : "none";

    var pastSection = document.getElementById("past-events-section");
    if (pastSection) pastSection.style.display = past.length === 0 ? "none" : "block";
  }

  // Rok v pätičke
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

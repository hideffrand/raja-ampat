const data = {
  misool: {
    headline: "Misool",
    desc: "Misool, formerly spelled Mysol or Misol, is one of the four major islands in the Raja Ampat Islands in Southwest Papua, Indonesia. Its area is 2,034 km², located on the island's northwest coast, and Lilinta on the island's southeast coast.",
    img: "./assets/views/misool.webp",
    gmap: "https://maps.app.goo.gl/rsQ16vkBHsh76cpe9",
    wiki: "https://en.wikipedia.org/wiki/Misool",
    list: ["Snorkling", "Diving"],
  },
  salawati: {
    headline: "Salawati",
    desc: "Salawati is one of the four major islands in the Raja Ampat Islands in Southwest Papua, Indonesia. Its area is 1,623 km². Salawati is separated from New Guinea to the southeast by the Sele Strait, and from Batanta to the north by the Pitt Strait.",
    img: "./assets/views/salawati.webp",
    gmap: "https://maps.app.goo.gl/W5MBodq5kcDq3c329",
    wiki: "https://en.wikipedia.org/wiki/Salawati",
    list: ["Snorkling", "Diving"],
  },
  batanta: {
    headline: "Batanta",
    desc: "Batanta is one of the four major islands in the Raja Ampat Islands in Southwest Papua province, Indonesia. Its area is 479.5 km² and its highest point is 1184 m. The Pitt Strait separates it from Salawati Island, while the Dampier Strait separates it from Waigeo Island.",
    img: "./assets/views/batanta.webp",
    gmap: "https://maps.app.goo.gl/3ce65j91U4jXGdf49",
    wiki: "https://en.wikipedia.org/wiki/Batanta",
    list: ["Waterfall"],
    fauna: ["Wild boar", "Wilson's bird-of-paradise", "Various species"],
    flora: ["Mangroove forests", "Blue-spotted tree monitor"],
    sumberLink: "https://www.papuaexplorers.com/batanta/",
    sumberTitle: "papuaexplores.com",
  },
  waigeo: {
    headline: "Waigeo",
    desc: "Waigeo is an island in the Southwest Papua province of eastern Indonesia. The island is also known as Amberi or Waigiu. It is the largest of the four main islands in the Raja Ampat Islands archipelago, between Halmahera and about 65 km to the northwest coast of New Guinea.",
    img: "./assets/views/waigeo.webp",
    gmap: "https://maps.app.goo.gl/4CfvmQonpHARsvVN9",
    wiki: "https://en.wikipedia.org/wiki/Waigeo",
    list: ["Snorkling", "Diving", "Cultural Destinations"],
    fauna: ["Wilson's Bird-of-paradise", "Waigeo Rainbowfish", "Waigeo Cuscus"],
    flora: ["Carnovorous plant Nepenthes danser"],
    sumberLink: "https://www.britannica.com/place/Waigeo-Island",
    sumberTitle: "britanica.com",
  },
};
const islands = ["waigeo", "batanta", "salawati", "misool"];
let choosenIsland = "";

const dc = document.querySelector(".details-card");
const dcTitle = dc.querySelector("span .title");
const dcDesc = dc.querySelector(".desc");
const dcImg = dc.querySelector("img");
const dcGmapLink = dc.querySelector(".gmap-link");
const dcCitation = dc.querySelector(".citation");
const dcWhatsOn = dc.querySelector(".whats-on");
const dcWhatsOnValue = dc.querySelector(".whats-on-value");
const green = "#5cbe22";
const semiDarkGray = "rgb(170, 170, 170)";

const ftc = document.querySelector(".floating-card");
const ftcTitle = ftc.querySelector(".title");
const paths = document.querySelectorAll(
  "#section-map .container .map-container svg path"
);

function changeDetailsAppearance(island) {
  dcWhatsOnValue.innerHTML = "";
  document.querySelector("." + island).style.fill = green;
  dcImg.src = data[island]["img"];
  dcTitle.innerHTML = data[island]["headline"];
  dcDesc.innerHTML = data[island]["desc"];
  dcGmapLink.href = data[island]["gmap"];
  dcCitation.href = data[island]["wiki"];
  dcWhatsOn.innerHTML = `What's on ${data[island]["headline"]}:`;
  data[island]["list"].forEach((item) => {
    const newLi = document.createElement("li");
    const liText = document.createTextNode(item);
    newLi.appendChild(liText);
    dcWhatsOnValue.appendChild(newLi);
  });

  islands.forEach((item) => {
    if (item != island) {
      document.querySelector("." + item).style.fill = semiDarkGray;
    }
  });
}

let currentIndex = islands.indexOf("waigeo");

const prevBtn = document.querySelector(".details-prev-button");
const nextBtn = document.querySelector(".details-next-button");

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % islands.length; // Increment index, loop around if necessary
  changeDetailsAppearance(islands[currentIndex]);
});

// Event listener for previous button
prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + islands.length) % islands.length; // Decrement index, loop around if necessary
  changeDetailsAppearance(islands[currentIndex]);
});

islands.forEach((island) => {
  const el = document.querySelector(
    `#section-map .container .map-container svg .${island}`
  );

  el.addEventListener("mouseenter", function (e) {
    el.style.fill = green;
    ftc.style.display = "block";
    choosenIsland = e.target.getAttribute("class");
    islands.forEach((island) => {
      if (island != el.getAttribute("class")) {
        document.querySelector("." + island).style.fill = semiDarkGray;
      }
    });

    setTimeout(() => {
      ftc.style.scale = 1;
      ftc.style.opacity = 1;
    }, 10);

    document.addEventListener("mousemove", moveftc);

    choosenIsland = e.target.getAttribute("class");
    ftcTitle.innerHTML = data[e.target.getAttribute("class")]["headline"];

    changeDetailsAppearance(e.target.getAttribute("class"));
  });

  el.addEventListener("click", (e) => {
    el.style.fill = green;
    changeDetailsAppearance(e.target.getAttribute("class"));
  });

  // Cleanup
  el.addEventListener("mouseleave", function () {
    choosenIsland = "";
    ftc.style.scale = 0.8;
    ftc.style.opacity = 0;
    setTimeout(() => {
      ftc.style.display = "none";
    }, 10);

    document.removeEventListener("mousemove", moveftc);
  });
});

function moveftc(event) {
  ftc.style.left = `${event.clientX}px`;
  ftc.style.top = `${event.clientY}px`;
}

changeDetailsAppearance("waigeo");
document.querySelector(".waigeo").style.fill = green;
document.querySelector(".batanta").style.fill = semiDarkGray;
document.querySelector(".salawati").style.fill = semiDarkGray;
document.querySelector(".misool").style.fill = semiDarkGray;

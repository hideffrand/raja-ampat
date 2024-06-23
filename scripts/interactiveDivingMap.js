const data = {
  "blue-magic": {
    headline: "Blue Magic",
    img: "./assets/diving/blue-magic.webp",
    gmap: "https://maps.app.goo.gl/pMM4i6mUssVwqgdFA",
    depth: "10-40m",
    topography: [
      "It takes approximately 20 minutes by boat from Corepen Homestay on Pulau Gam to reach Blue Magic.",
      "The site is a pinnacle reef rising from the sea floor at a depth of 30 meters to 7 meters below the surface.",
      "Diving here offers the chance to see oceanic mantas.",
    ],
    fauna: ["Schools of jacks", "Barracuda", "Eel", "Wobbegong shark"],
    diving_condition:
      "Blue Magic is without a doubt one of the best dive sites in Raja Ampat, and probably one of the best in the world. The underwater scenery includes spectacular schools of fish, colorful overhangs, and a variety of sea life both big and small.",
    sumber_url: "https://remoteandafloat.com/diving-blue-magic-in-raja-ampat/",
    sumber_title: "remoteandafloat.com",
  },
  "cape-kri": {
    headline: "Cape Kri",
    img: "./assets/diving/cape-kri.webp",
    gmap: "https://maps.app.goo.gl/aJm51rrng6gwkRr17",
    depth: "5-25m",
    topography: [
      "Cape Kri features a reef with a sloping wall that descends to around 40 meters.",
      "At the top of the reef, you'll discover a vibrant array of hard corals surrounded by black tip reef sharks.",
      "at the bottom of the reef lies an ancient snagged anchor, which has become home to a large group of sweetlips.",
    ],
    fauna: [
      "Schools of jacks",
      "Batfish",
      "Large schools of snappers",
      "Sweetlips",
      "Angelfish",
    ],
    diving_condition:
      "Imagine being surrounded by a multitude of fish—large schools swimming over the reef, chevron barracuda in tornado-like formations, and the majestic Napoleon wrasse.",
    sumber_url: "https://diveconcepts.com/cape-kri-raja-ampat",
    sumber_title: "diveconcepts.com",
  },
  "manta-ridge": {
    headline: "Manta Ridge",
    img: "./assets/diving/manta-ridge.webp",
    gmap: "https://maps.app.goo.gl/L7MCvvEuFNympRAdA",
    depth: "10-30m",
    topography: [
      "Located between Mansuar Island and Arborek Island, in the central part of the Raja Ampat archipelago.",
      "The ridge features a reef slope that drops to depths below 40 meters.",
      "Strong currents are common at Manta Ridge, so divers often use reef hooks to stay in place and enjoy the magnificent show.",
    ],
    fauna: [
      "Some manta rays in Raja Ampat are all black",
      "Bump head parrotfish",
      "Blacktip reef sharks",
      "Yellow plot fish",
      "Turtles",
    ],
    diving_condition:
      "Manta Ridge is one of the most popular dive sites in the Raja Ampat region for close encounters with mantas. Manta Ridge holds the record for the highest number of species spotted in a single dive—an astonishing 374 species recorded by marine biologist Gerald R. Allen.",
    sumber_url: "https://diveconcepts.com/cape-kri-raja-ampat",
    sumber_title: "diveconcepts.com",
  },
  "mikes-point": {
    headline: "Mike's Point",
    img: "./assets/diving/mikes-point.webp",
    gmap: "https://maps.app.goo.gl/DeLgf3LHXayhs8nD8",
    depth: "3-30m",
    topography: [
      "Situated in the Dampier Strait, near the Eastern tip of Kerupiar Island",
      "During World War II, the U.S. Air Force mistakenly bombed the area, creating an unusual rock formation with grooves in the wall—resembling caves.",
      "On the southern side of the shallow plateau, discover a superb hard coral garden and gorgonian fan garden.",
    ],
    fauna: ["Pelagic fish", "Eagle rays", "Green turtles", "Wobbegong sharks"],
    diving_condition:
      "Explore the rock formations where yellow striped sweetlips, tunas, and other critters seek refuge. Excellent for spotting nudibranchs, pygmy seahorses, mantis shrimps, and more. On the southern side of the shallow plateau, discover a superb hard coral garden and gorgonian fan garden.",
    sumber_url:
      "https://en.wikivoyage.org/wiki/Diving_the_Cape_Peninsula_and_False_Bay/Mike%27s_Point",
    sumber_title: "en.wikivoyage.org",
  },
  "sardine-reef": {
    headline: "Sardine's Reef",
    desc: "Sardine Reef, situated in the waters of Raja Ampat, Indonesia, is a spectacular dive site renowned for its mesmerizing underwater scenery and abundant marine life. Divers exploring its depths encounter massive schools of sardines shimmering in the sunlight, along with colorful coral formations and an array of marine species, making it a must-visit destination for underwater enthusiasts seeking unforgettable diving experiences.",
    img: "./assets/diving/sardine-reef.webp",
    gmap: "https://maps.app.goo.gl/Aw22XZuRGkzwTkq6A",
    depth: "5-30m",
    topography: [
      "Sardine Reef is a small underwater hill with an oval shape, approximately 200 meters long.",
      "Its summit lies just 5 meters below the surface.",
      "Located off the northeastern point of Kri Island, it’s a short 10-15 minutes boat ride away.",
    ],
    fauna: [
      "Banner fish",
      "Rainbow fish",
      "Snappers",
      "Lionfish",
      "Barracuda",
      "Grey reef sharks",
    ],
    diving_condition:
      "Sardine Reef also hosts three species of pygmy seahorses—Denise, Bargibanti, and Pontohi—hidden within beautiful gorgonian sea fans. Lucky divers may spot the wobbegong, a bizarre-looking shark typically found on Australian reefs.",
    sumber_url: "https://diveconcepts.com/cape-kri-raja-ampat",
    sumber_title: "diveconcepts.com",
  },
};
const spots = [
  "blue-magic",
  "cape-kri",
  "manta-ridge",
  "mikes-point",
  "sardine-reef",
];

const dc = document.querySelector(".details-card");
const dcTitle = dc.querySelector("span .title");
const dcDesc = dc.querySelector(".desc");
const dcImg = dc.querySelector("img");
const dcGmapLink = dc.querySelector(".gmap-link");
const dcDepth = dc.querySelector(".depth");
const dcTopography = dc.querySelector(".topography");
const dcFauna = dc.querySelector(".fauna");
const dcCitation = dc.querySelector(".citation");
const red = "#ff0000";
const semiDarkGray = "rgb(170, 170, 170)";

const ftc = document.querySelector(".floating-card");
const ftcTitle = ftc.querySelector(".title");
let selectedSpot = "";

function addToWhishlist() {
  alert(data[selectedSpot]["headline"]);
}

function changeDetailsAppearance(spot) {
  spots.forEach((s) => {
    if (s != spot) {
      document.querySelector("." + s).style.fill = semiDarkGray;
    }
  });
  selectedSpot = spot;
  document.querySelector("." + spot).style.fill = "red";

  dcTopography.innerHTML = "";
  dcFauna.innerHTML = "";

  dcImg.src = data[spot]["img"];
  dcTitle.innerHTML = data[spot]["headline"];
  dcDesc.innerHTML = data[spot]["diving_condition"];
  dcGmapLink.href = data[spot]["gmap"];
  dcDepth.innerHTML = data[spot]["depth"];
  dcCitation.href = data[spot]["sumber_url"];
  dcCitation.textContent = data[spot]["sumber_title"];
  data[spot]["topography"].forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    dcTopography.appendChild(li);
  });
  data[spot]["fauna"].forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    dcFauna.appendChild(li);
  });
}

let currentIndex = spots.indexOf("manta-ridge");

const prevBtn = document.querySelector(".details-prev-button");
const nextBtn = document.querySelector(".details-next-button");

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % spots.length; // Increment index, loop around if necessary
  changeDetailsAppearance(spots[currentIndex]);
});

prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + spots.length) % spots.length; // Decrement index, loop around if necessary
  changeDetailsAppearance(spots[currentIndex]);
});

spots.forEach((spot) => {
  const el = document.querySelector(
    `#section-map .container .map-container svg .${spot}`
  );

  el.addEventListener("mouseenter", function (e) {
    ftc.style.display = "block";

    setTimeout(() => {
      ftc.style.scale = 1;
      ftc.style.opacity = 1;
    }, 10);

    document.addEventListener("mousemove", moveftc);
    choosenSpot = e.target.getAttribute("class");
    ftcTitle.innerHTML = data[e.target.getAttribute("class")]["headline"];
  });

  el.addEventListener("click", (e) => {
    el.style.fill = red;
    const clickedIsland = e.target.getAttribute("class");
    changeDetailsAppearance(clickedIsland);
  });

  // Cleanup
  el.addEventListener("mouseleave", function () {
    choosenSpot = "";
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

changeDetailsAppearance("manta-ridge");
document.querySelector(".manta-ridge").style.fill = red;
spots.forEach((spot) => {
  if (spot != "manta-ridge") {
    document.querySelector("." + spot).style.fill = semiDarkGray;
  }
});

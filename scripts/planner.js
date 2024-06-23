const directFlight = [
  {
    country: "",
    airport: "",
  },
  {
    country: "Sorong",
    airport: "Domine Eduard Osok Airport",
  },
];
const inderectFlight = [
  {
    country: "",
    airport: "",
  },
  {
    country: "Jakarta",
    airport: "Soekarno-Hatta Intl Airport",
  },
  {
    country: "Makassar",
    airport: "Sultan Hasanuddin Intl Airport",
  },
  {
    country: "Sorong",
    airport: "Domine Eduard Osok Airport",
  },
];
const selectCountry = document.getElementById("select-country");

fetch("countries.json")
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach((c) => {
      const option = document.createElement("option");
      const text = document.createTextNode(`${c.name}`);
      option.appendChild(text);
      option.setAttribute("value", c.name);
      selectCountry.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

const departure = document.querySelector(".departure");
let choosenDeparture = "";

selectCountry.addEventListener("change", () => {
  departure.innerHTML = "Searching nearby airport...";
  document.getElementById("from").innerHTML = `From: ${selectCountry.value}`;
  fetch("airports.json")
    .then((res) => res.json())
    .then((airports) => {
      for (let i = 0; i < airports.length; i++) {
        const a = airports[i];
        if (a.country === selectCountry.value) {
          departure.innerHTML = `${a.name} - ${a.country}`;
          choosenDeparture = a.name;
          break;
        } else {
          departure.innerHTML = "Sorry we can't find nearby airport :(";
        }
      }
    })
    .catch((error) => console.error("Error fetching airports:", error));
});

const selectFlightType = document.getElementById("select-flight-type");
const ol = document.getElementById("flights");

function addFlightSchedule(airport, country) {
  const li = document.createElement("li");
  const dot = document.createElement("div");
  dot.setAttribute("class", "dot");

  const content = document.createElement("div");
  content.setAttribute("class", "content");

  const p = document.createElement("p");
  let pText = "";
  p.setAttribute("class", "airport");
  if (airport == "") {
    pText = document.createTextNode(choosenDeparture);
  } else {
    pText = document.createTextNode(airport);
  }
  p.appendChild(pText);
  content.appendChild(p);

  const i = document.createElement("i");
  let iText = "";
  i.setAttribute("class", "airline");
  if (country == "") {
    iText = document.createTextNode(selectCountry.value);
  } else {
    iText = document.createTextNode(country);
  }
  i.appendChild(iText);
  content.appendChild(i);

  li.appendChild(dot);
  li.appendChild(content);

  ol.appendChild(li);
}

selectFlightType.addEventListener("change", () => {
  console.log(selectCountry.value);
  ol.innerHTML = "";
  if (selectCountry.value != "") {
    if (selectFlightType.value == "direct") {
      directFlight.forEach((d) => {
        addFlightSchedule(d.airport, d.country);
      });
    } else {
      inderectFlight.forEach((d) => {
        addFlightSchedule(d.airport, d.country);
      });
    }
  } else {
    alert("Please choose your country");
  }
});

// const hotelList = document.querySelector(".hotel-list");

// fetch("hotels.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const hotelCount = data.length;
//     const selectedIndices = [];

//     while (selectedIndices.length < 5) {
//       const randomIndex = Math.floor(Math.random() * hotelCount);
//       if (!selectedIndices.includes(randomIndex)) {
//         selectedIndices.push(randomIndex);
//       }
//     }

//     selectedIndices.forEach((index) => {
//       const hc = document.createElement("div");
//       hc.setAttribute("class", "hotel-card");

//       const img = document.createElement("img");
//       img.src = data[index].photo1;
//       hc.appendChild(img);

//       const h1 = document.createElement("h1");
//       h1.textContent = data[index].hotel_name;
//       hc.appendChild(h1);

//       const p = document.createElement("p");
//       p.textContent = data[index].star_rating;
//       hc.appendChild(p);

//       hotelList.appendChild(hc);
//     });
//   })
//   .catch((error) => console.error("Error fetching hotels:", error));

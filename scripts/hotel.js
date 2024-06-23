const inputSearch = document.getElementById("input-search-hotel");

const hotelMapIframe = document.getElementById("hotel-map-iframe");

const searchHotelBtn = document.querySelector(".search-hotel-btn");

searchHotelBtn.addEventListener("click", () => {
  const q = inputSearch.value.replace(/ /g, "+");
  hotelMapIframe.src = `https://www.google.com/maps/embed/v1/search?q=${q}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
});

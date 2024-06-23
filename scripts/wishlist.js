// const options = {
//   batanta: {
//     title: "Batanta Island",
//     img: "./assets/views/batanta.webp",
//   },
//   "blue-magic": {
//     title: "Blue Magic",
//     img: "./assets/diving/blue-magic.webp",
//   },
//   "cape-kri": {
//     title: "Cape Kri",
//     img: "./assets/diving/cape-kri.webp",
//   },
//   "manta-ridge": {
//     title: "Manta Ridge",
//     img: "./assets/diving/manta-ridge.webp",
//   },
//   "mikes-point": {
//     title: "Mike's Point",
//     img: "./assets/diving/mikes-point.webp",
//   },
//   "sardine-reef": {
//     title: "Sardine's Reef",
//     img: "./assets/diving/sardine-reef.webp",
//   },
//   arborek: {
//     title: "Arborek Village",
//     img: "./assets/culture/dermaga.webp",
//   },
// };

// const wishlistCard = document.querySelector(".wishlist-card");
// const wishUl = wishlistCard.querySelector("ul");
// const wishlistBtns = document.querySelectorAll(".wishlist-btn");
// const wishlistCloseBtn = document.querySelector(".wishlist-close-btn");

// let cardIsOpen = false;

// wishlistBtns.forEach((w) => {
//   w.addEventListener("click", () => {
//     getWishlist();
//     if (!cardIsOpen) {
//       cardIsOpen = true;
//       wishlistCard.style.transform = "translateY(50%) translateX(0%)";
//     }
//   });
// });

// wishlistCloseBtn.addEventListener("click", () => {
//   getWishlist();
//   if (cardIsOpen) {
//     cardIsOpen = false;
//     wishlistCard.style.transform = "translateY(50%) translateX(200%)";
//   }
// });

// const addToWishlist = (str) => {
//   let currWishlist = localStorage.getItem("wishlist");
//   let data = [];

//   if (currWishlist) {
//     data = JSON.parse(currWishlist);
//   }

//   data.push(options[str]);
//   localStorage.setItem("wishlist", JSON.stringify(data));
// };

// const getWishlist = () => {
//   wishUl.innerHTML = "";
//   const data = localStorage.getItem("wishlist");
//   const res = JSON.parse(data);
//   console.log(res);
//   res.forEach((r) => {
//     const li = document.createElement("li");
//     li.textContent = r.title;

//     const img = document.createElement("img");
//     img.src = r.img;
//     li.appendChild(img);

//     wishUl.appendChild(li);
//   });
// };

// localStorage.clear("wishlist");
// addToWishlist("batanta");
// addToWishlist("manta-ridge");
// getWishlist();

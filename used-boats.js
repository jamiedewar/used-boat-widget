const boats = [
  {
    year: "2022",
    make: "Legend",
    model: "18 XTR",
    price: "$45,999",
    description: "Great condition, low hours, one owner.",
    image: "https://cdn.pixabay.com/photo/2016/07/20/19/58/boat-1538743_1280.jpg"
  },
  {
    year: "2021",
    make: "Bayliner",
    model: "Element E18",
    price: "$32,500",
    description: "Spacious deck boat with room for the whole family.",
    image: "https://cdn.pixabay.com/photo/2020/06/20/17/37/motorboat-5322824_1280.jpg"
  },
  {
    year: "2023",
    make: "Princecraft",
    model: "Vogue 25",
    price: "$58,999",
    description: "Luxury pontoon with tri-tube and upgraded stereo.",
    image: "https://cdn.pixabay.com/photo/2015/08/11/00/17/yacht-883927_1280.jpg"
  }
];

const container = document.getElementById("boat-listings");
boats.forEach(boat => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${boat.image}" alt="${boat.make} ${boat.model}"/>
    <div class="card-content">
      <h2>${boat.year} ${boat.make} ${boat.model}</h2>
      <p class="price">${boat.price}</p>
      <p>${boat.description}</p>
    </div>
  `;
  container.appendChild(card);
});
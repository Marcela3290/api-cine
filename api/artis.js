fetch("artistas.json")
.then(response => response.json())
.then(data => {
  const grid = document.querySelector(".grid");
  data.forEach(artist => {
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = artist.imagen;
    const name = document.createElement("h2");
    name.textContent = artist.nombre;
    const age = document.createElement("p");
    age.textContent = `${artist.edad} años`;
    const bio = document.createElement("p");
    bio.textContent = artist.bio;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(bio);
    grid.appendChild(card);
  });
});
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  btn.style.transform = 'translateY(-10px)';
});

btn.addEventListener('transitionend', () => {
  btn.style.transform = 'translateY(0)';
});




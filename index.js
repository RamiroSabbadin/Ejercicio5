const Pizzas = [
  {
    id: 1,
    urlImage: "https://www.cocinayvino.com/wp-content/uploads/2018/08/pizza-napolitana-2-e1534286138178-1200x675.jpg",
    nombre: "Napolitana",
    ingredientes: ["tomate", "muzzarella", "pesto"],
    precio: 500,
    value: "napolitana",
  },

  {
    id: 2,
    urlImage: "https://t1.rg.ltmcdn.com/es/posts/7/0/2/pizza_fugazza_7207_orig.jpg",
    nombre: "Fugazzeta",
    ingredientes: ["cebolla", "muzzarella", "oregano"],
    precio: 600,
    value: "fugazzeta",
  },

  {
    id: 3,
    urlImage: "https://imag.bonviveur.com/foto-portada-pizza-cuatro-quesos.jpg",
    nombre: "Cuatro Quesos",
    ingredientes: ["roquefort", "muzzarella", "provolone", "reggianito"],
    precio: 700,
    value: "cuatro quesos",
  },

  {
    id: 4,
    urlImage: "https://as2.ftcdn.net/v2/jpg/02/96/96/71/1000_F_296967135_DAjY06XgRvqzYr3WYzHvmQp4C66QxM00.jpg",
    nombre: "Calabresa",
    ingredientes: ["provolone", "muzzarella", "salame"],
    precio: 800,
    value: "calabresa",
  },

  {
    id: 5,
    urlImage: "https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg",
    nombre: "Especial",
    ingredientes: ["jamon", "muzzarella", "morron"],
    precio: 900,
    value: "especial",
  },

  {
    id: 6,
    urlImage: "https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo-731x411.jpg",
    nombre: "Rucula",
    ingredientes: ["rucula", "muzzarella", "reggianito", "jamon crudo"],
    precio: 1000,
    value: "rucula",
  },
];

// const idImpar = Pizzas.filter((pizza) => pizza.id % 2 === 1).map((pizza) => pizza.nombre);

// console.log(" ");

// console.log(
//   `Las pizzas con id par son: ${idImpar.toString().replaceAll(",", ", ").replace(", Especial", " y Especial")}.`
// );

// const menosDe600 = Pizzas.filter((pizza) => pizza.precio < 600).map((pizza) => pizza.nombre);

// console.log(" ");

// console.log(`La única pizza que vale menos de $600 es la ${menosDe600}.`);

// const nombresDePizzas = Pizzas.map((pizza) => pizza.nombre);

// console.log(" ");

// console.log(
//   `Los nombres de todas las pizzas son: ${nombresDePizzas
//     .toString()
//     .replaceAll(",", ", ")
//     .replace(", Rucula", " y Rucula")}.`
// );

// const preciosDePizzas = Pizzas.map((pizza) => `$${pizza.precio}`);

// console.log(" ");

// console.log(
//   `Los precios de las pizzas son: ${preciosDePizzas.toString().replaceAll(",", ", ").replace(", $1000", " y $1000")}.`
// );

// console.log(" ");

// const nombresConPrecios = Pizzas.map((pizza) => console.log(`La ${pizza.nombre} cuesta $${pizza.precio}.`));

let button = document.getElementById("onSubmit");

let cardsContainer = document.getElementById("cards-container-general");
let cardsContainer2 = document.getElementById("cards-container-general2");

button.addEventListener("click", () => {
  cardsContainer.innerHTML = "";
  cardsContainer2.innerHTML = "";
  //showCards()

  let input = document.getElementById("pizzaNombre").value;
  //Pasar el valor del input a minuscula.

  let inputToLowerCase = input.toLowerCase();

  let valorHallado = pizzasDesdeLocalStorage.find((pizza) => pizza.value === inputToLowerCase);

  if (valorHallado) {
    cardsContainer.innerHTML += `
    <div class="card_container">
    <img style="width: 250px;" src="${valorHallado.urlImage}" id="PizzaImage" alt="" />
    <h2 id="PizzaName">${valorHallado.nombre}</h2>
    <h4 id="PizzaPrice">${valorHallado.precio}</h4>
    <h5 id="PizzaIngredients">${valorHallado.ingredientes}</h5>
  </div>
    `;
  } else {
    cardsContainer.innerHTML += `
    <div class="card_container">
    <img style="width: 200px;" src="" id="PizzaImage" alt="" />
    <h2 id="PizzaName">No existe</h2>
    <h4 id="PizzaPrice"></h4>
  </div>
    `;
  }
});

const guardarEnLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(Pizzas));
};
guardarEnLocalStorage();

let pizzasDesdeLocalStorage = null;

const traerPizzasDelLocalStorage = () => {
  pizzasDesdeLocalStorage = JSON.parse(localStorage.getItem("pizzas"));
  console.log(pizzasDesdeLocalStorage);
};

traerPizzasDelLocalStorage();

const showCards = (P) => {
  cardsContainer.innerHTML = "";
  cardsContainer2.innerHTML = "";
  P.map(
    (p) =>
      (cardsContainer.innerHTML += `
  <div class="card_container">
  <img style="width: 250px;" src="${p.urlImage}" id="PizzaImage" alt="" />
  <h2 id="PizzaName">${p.nombre}</h2>
  <h4 id="PizzaPrice">$${p.precio}</h4>
  <h5 id="PizzaIngredients">${p.ingredientes}</h5>
  </div>
  `)
  );
};

showCards(pizzasDesdeLocalStorage);

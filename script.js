class Burger {
  constructor() {
    this.size = "";
    this.patty = "";
    this.toppings = [];
    this.extras = [];
    this.delivery = "";
  }

  toString() {
    return `
      <strong>Burger Order:</strong><br>
      Size: ${this.size || "Not Selected"}<br>
      Patty: ${this.patty || "Not Selected"}<br>
      Toppings: ${this.toppings.length ? this.toppings.join(", ") : "None"}<br>
      Extras: ${this.extras.length ? this.extras.join(", ") : "None"}<br>
      Delivery: ${this.delivery || "Not Selected"}
    `;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  setSize(size) {
    this.burger.size = size;
    return this;
  }

  setPatty(patty) {
    this.burger.patty = patty;
    return this;
  }

  addToppings(toppings) {
    this.burger.toppings = toppings;
    return this;
  }

  addExtras(extras) {
    this.burger.extras = extras;
    return this;
  }

  setDelivery(delivery) {
    this.burger.delivery = delivery;
    return this;
  }

  build() {
    return this.burger;
  }
}

function buildBurger() {
  const size = document.getElementById("size").value;
  const patty = document.getElementById("patty").value;

  const toppings = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .filter(input => ["Lettuce","Tomato","Onion","Cheese","Pickles"].includes(input.value))
    .map(input => input.value);

  const extras = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .filter(input => ["Extra Cheese","French Fries","Coke"].includes(input.value))
    .map(input => input.value);

  const delivery = document.getElementById("delivery").value;

  const burger = new BurgerBuilder()
    .setSize(size)
    .setPatty(patty)
    .addToppings(toppings)
    .addExtras(extras)
    .setDelivery(delivery)
    .build();

  document.getElementById("result").innerHTML = burger.toString();
}

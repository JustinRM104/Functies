const dishes = [
  [
    "Spaghetti Bolognese",
    "Spaghetti bolognese It consists of spaghetti served with a sauce made from tomatoes, minced beef, garlic, wine and herbs; sometimes minced beef can be replaced by other minced meats.",
    10,
  ],
  [
    "Macaroni With Cheese",
    "This perfect macaroni cheese recipe comes with a creamy cheese sauce, a hint of mustard and uses leftover French stick for its crunchy topping.",
    7.49,
  ],
  [
    "Pizza Margherita",
    "Pizza Margherita (more commonly known in English as Margherita pizza) is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil. Traditionally, it is made with fior di latte (cow's milk mozzarella) rather than buffalo mozzarella.",
    7.49,
  ],
  [
    "Pizza Pepperoni",
    "Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper. Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias.",
    6.99,
  ],
  [
    "Pizza Double Pepperoni",
    "Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper. Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias.",
    6.99,
  ],
  [
    "Pizza Quattro Formaggio",
    "On top of that deliciousness, the cheese was added in layers: mozzarella on the bottom, then parmesan, then brie, then dollops of ricotta. The melt of the mozzarella, the nuttiness of the parmesan, the creaminess of the brie and the freshness of the ricotta make this cheese pizza a winner.",
    55.99,
  ],
  [
    "Pizza Hawaii",
    "Hawaiian pizza is a pizza topped with tomato sauce, cheese, pineapple, and ham.",
    1.99,
  ],
  [
    "Lasagne Bolognese With Gold And Caviar",
    "Lasagna Bolognese! Layers of flat lasagna noodles baked with alternating layers of slow-cooked Bolognese sauce, bechamel, and Parmesan cheese.",
    1050,
  ],
]

let allDishes = document.getElementById('All Dishes')
let specificDish = document.getElementById('Specific Dish')
let returnDish = document.getElementById('Return value Dish')
let indexDish = document.getElementById('Index Dish')

function create(parent, index) {
  let dishHolder = document.createElement("DIV")
  dishHolder.className = "dishHolder"
  parent.appendChild(dishHolder)

  let title = document.createElement("H3")
  title.innerHTML =  dishes[index][0]
  dishHolder.appendChild(title)

  let dishNumber = document.createElement("P")
  dishNumber.innerHTML = '#' + (index + 1)
  dishNumber.style = "text-align: left;"
  dishHolder.appendChild(dishNumber)

  let desc = document.createElement("P")
  desc.innerHTML = dishes[index][1]
  dishHolder.appendChild(desc)

  let price = document.createElement("P")
  price.innerHTML = '€ ' + dishes[index][2]
  price.style = "text-align: right;"
  dishHolder.appendChild(price)
}

function returnRandomDishFunc() {
  return Math.floor(Math.random()*dishes.length);
}

function getDishes(type, from, to) {
  if (type == "all") {
    for (var i = 0; i < dishes.length; i++) {
      create(allDishes, i)
    }
  }
  else if (type == "specific") {
    create(specificDish, from)
  }
  else if (type == "return") {
    create(returnDish, returnRandomDishFunc())
  }
  else if (type == "index") {
    for (var i = 0; i < dishes.length; i++) {
      console.log('index is: ' + i + '. startpunt is: ' + from + '. eindpunt is: ' + to + '.')
      if (i >= from && i <= to) {
        create(indexDish, i)
      }
    }
  }
}

getDishes("all")
getDishes("specific", 4)
getDishes("specific", 5)
getDishes("return")
getDishes("index", 2, 6)

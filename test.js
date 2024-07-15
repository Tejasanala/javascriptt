const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

// Task 1 : Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.

const total = [...orders, ...moreOrders];
console.log(total);

function getHighRatedDishes(total) {
  const r = total
    .filter((u) => {
      const e = u.ratings.every((i) => i >= 4);
      return e;
    })
    .map((t) => t.dishName);

  return r;
}
console.log(getHighRatedDishes(total));
// Should print: "Burger, Sushi, Pasta, Tacos, Ramen"

// Task 2 : Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.

function getFirstNDishNames(orders, n) {
  return orders
    .map((u) => u.dishName)
    .slice(0, n)
    .join(" , ");
}
console.log(getFirstNDishNames(orders, 3));
// Should print: "Burger, Pizza, Sushi"

//Task 3 :Write a function that merges two arrays of food orders

function mergeOrders(orders, moreOrders = {}) {
  return orders.concat(moreOrders);
}
console.log(mergeOrders(orders, moreOrders)); // Should print the merged array of orders
console.log(mergeOrders(orders)); // Should print the original array of orders

//Task 4 : Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.
/*
console.log(getDishNamesByIds(orders, 1, 3, 5));
// Should print: Selected Dishes: Burger, Pasta, Sushi
console.log(getDishNamesByIds(orders, 1, 6));
// Should print: Selected Dishes: Burger, Unknown Dish
console.log(getDishNamesByIds(orders, 5, 1));
// Should print: Selected Dishes: Sushi, Burger
*/
// Task 5 : Write a function that accepts any number of food orders and returns a formatted string listing their dish names and categories using the rest operator, nullish coalescing, and template literals.
function listOrders(...orders) {
  const orderDetails = orders.map((order) => {
    const dishName = order?.dishName ?? "Unknown Dish";
    const dishCategory = order?.category ?? "Unknown Category";
    return `${dishName} (${dishCategory})`;
  });
  return orderDetails.join(", ");
}
console.log(listOrders(...orders));
// Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
console.log(listOrders(orders[0], orders[1], orders[111]));
// Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)

// Task 6 : Calculate Total Ratings for Chefs

//Write a function that calculates the total number of ratings for each chef.

function getTotalRatingsForChefs(orders) {
  const w = orders.filter((u) => {
    u.ratings.reduce((a, b) => {
      a[b.chef] = (a[b.chef] || 0) + u.ratings.length;
      return { chef: u.chef, rating: u.a };
    }, {});
  });
  return w.map((y) => y.title);
}
console.log(getTotalRatingsForChefs(orders));
// Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }

//Orginal Code
const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const dishName = o.dish.name;
  const dishCategory = o.dish.category;
  const orderQuantity = o.quantity;
  const orderPrice = o.price;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order));

//Refactored Code
function getOrderDetails(o) {
  if (o?.dish?.name && o?.quantity && o?.price) {
    return `${o.dish.name} (${o.category}) x${o.quantity} costs $${o.price}`;
  }
}
console.log(getOrderDetails(order));

//orginal code
function displayOrderSummary(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (
    order &&
    order.dish &&
    order.dish.name &&
    order.dish.category &&
    order.quantity &&
    order.price
  ) {
    console.log(
      `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`
    );
  } else {
    console.log("Some order data is missing.");
  }
}

displayOrderSummary(1);
displayOrderSummary(2);
displayOrderSummary(3);

//Refactored code
function displayOrderSummary(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (
    order?.dish?.name &&
    order?.dish?.category &&
    order?.quantity &&
    order?.price
  ) {
    console.log(
      `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`
    );
  } else {
    console.log("Some order data is missing.");
  }
}

displayOrderSummary(1);
displayOrderSummary(2);
displayOrderSummary(3);

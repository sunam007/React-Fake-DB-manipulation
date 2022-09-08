const addToDB = (id) => {
  const exist = getDb();
  let shopping_cart = {};
  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
};

const removeFromDb = (id) => {
  const exist = getDb();
  if (!exist) {
  } else {
    const shopping_cart = JSON.parse(exist);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
};

const getDb = () => localStorage.getItem("shopping_cart");
const updateDb = (cart) =>
  localStorage.setItem("shopping_cart", JSON.stringify(cart));

const showAdded = (id) => {
  return localStorage.getItem(id);
};

export { addToDB, showAdded, removeFromDb as deleteFromDb };
/* 
const addToDB = (id) => {
  const exist = localStorage.getItem("id");
  if (!exist) {
    localStorage.setItem(id, 1);
  } else {
    const newCount = parseInt(exist) + 1;
    localStorage.setItem(id, newCount);
  }
};

const showAdded = (id) => {
  return localStorage.getItem(id);
};

*/

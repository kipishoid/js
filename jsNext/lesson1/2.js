const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
  ]);
  
  const dishes = new Map([
    ["Пицца Маргарита", "Виктор"],
    ["Пицца Пепперони", "Виктор"],
    ["Суши Филадельфия", "Ольга"],
    ["Суши Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
  ]);
  
  const clientAlexey = { name: "Алексей" };
  const clientMaria = { name: "Мария" };
  const clientIrina = { name: "Ирина" };
  
  const orders = new Map();
  
  function addOrder(client, dish) {
    if (!orders.has(client)) {
      orders.set(client, []);
    }
    orders.get(client).push(dish);
  }
  
  addOrder(clientAlexey, "Пицца Пепперони");
  addOrder(clientAlexey, "Тирамису");
  
  addOrder(clientMaria, "Суши Калифорния");
  addOrder(clientMaria, "Пицца Маргарита");
  
  addOrder(clientIrina, "Чизкейк");
  
  function displayOrders(orders, dishes) {
    orders.forEach((orderList, client) => {
      console.log(`Клиент ${client.name} заказал:`);
      orderList.forEach(dish => {
        const chef = dishes.get(dish);
        console.log(`  - ${dish} (повар: ${chef})`);
      });
    });
  }
  
  displayOrders(orders, dishes);
  
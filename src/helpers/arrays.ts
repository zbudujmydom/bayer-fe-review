type Currency = "PLN" | "EUR";

interface Price {
  value: number;
  currency: Currency;
}

interface Order {
  title: string;
  price: Price;
}

interface Data {
  orders: Order[];
}

const data: Data = {
  orders: [
    { title: "abc 1", price: { value: 100, currency: "PLN" } },
    { title: "abc 2", price: { value: 200, currency: "PLN" } },
    { title: "abc 3", price: { value: 50, currency: "EUR" } },
  ],
};

const getTotalPrice = (orders: Order[]): Price | null => {
  const firstCurrency = orders[0].price.currency;
  const shouldCalculatePrice = orders.every((order) => order.price.currency === firstCurrency);

  if (!shouldCalculatePrice) {
    return null;
  }

  const totalPrice = orders.reduce((prev, curr) => prev + curr.price.value, 0);

  return {
    value: totalPrice,
    currency: firstCurrency,
  };
};

data.orders.forEach((order) => {
  // cos robie z orderem
});

function modifyOrders() {
  return data.orders
    .map((order) => {
      return order.price;
    })
    .filter((price) => price.value > 100);
}

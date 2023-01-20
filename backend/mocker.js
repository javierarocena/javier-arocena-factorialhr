const fetch = require("node-fetch");

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const endDate = new Date();
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 30);

for (let i = 0; i < 50; i++) {
  fetch("http://localhost:3000/api/metrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: getRandomNumber(1, 28),
      timestamp: randomDate(startDate, endDate).toISOString(),
      name: "purchase_product",
    }),
  });
}

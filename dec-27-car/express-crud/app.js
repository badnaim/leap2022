const express = require("express");
const cors = require("cors");
let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    Image: "https://www.vmauto.org/uploads/car/61332b5e5f978.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    Image:
      "https://pakspectrum.com/wp-content/uploads/2022/08/Toyota-cuts-down-car-prices.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    Image:
      "https://global.toyota/pages/news/images/2019/11/05/1100/20191105_02_01_s.jpg",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    Image:
      "https://cdn-ds.com/blogs-media/sites/251/2018/11/26133533/2019-Toyota-Highlander-B-2_o.jpg",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    Image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/B9B6/production/_103724574_prius-64-plate-006_toyota.jpg",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    Image: "https://www.vmauto.org/uploads/car/61332b5e5f978.jpg",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    Image: "https://www.vmauto.org/uploads/car/61332b5e5f978.jpg",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    Image: "https://www.vmauto.org/uploads/car/61332b5e5f978.jpg",
  },
];
let index = cars.length;

const app = express();
app.use(cors());

app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);

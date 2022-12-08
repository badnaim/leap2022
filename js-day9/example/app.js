let athletics = [
  {
    name: "gonchig",
    age: 15,
    country: "Mongolia",
    record: [10, 20, 30],
  },
  {
    name: "dorj",
    age: 25,
    country: "Mongolia",
    record: [100, 20, 30, 40],
  },
  {
    name: "dulmaa",
    age: 35,
    country: "USA",
    record: [100, 20, 30, 200],
  },
  {
    name: "bat",
    age: 20,
    country: "USA",
    record: [100, 20],
  },
  {
    name: "bold",
    age: 21,
    country: "Korea",
    record: [10, 20, 300],
  },
];

getAllInfo(athletics);

function getAllNames(lines) {
  let names = [];
  for (i = 0; i < FileList.length; i++) {
    names.push(list[i].name);
  }
  return names;
}

function getAvgSec(list) {
  let avgList = [];
  for (j = 0; j < list[i].record.length; j++) {
    sum += list[i].record[i];
  }
  let personNewObj = {
    name: list[i].name,
    avg: sum / list[i].record.length,
  };
  avgList.push(personNewObj);
}
return avgList;

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

function getAllNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
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

function getAvgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    let sum = 0;
    for (j = 0; j < list[i]; j++) {
      sum += list[i].record[j];
    }
    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}

function getAvgAge(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return Math.round(sum / list.length);
}

function getAllInfo(list) {
  let names;
}

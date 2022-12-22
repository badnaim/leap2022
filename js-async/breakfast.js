// function prepare_breakfast() {
//   let coffee_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("coffee ready");
//     }, 1000);
//   });
//   let egg_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("finished frying egg");
//     }, 2000);
//   });
//   let bacon_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("bacon ready");
//     }, 3000);
//   });
//   let combined_promise = Promise.all([
//     coffee_promise,
//     egg_promise,
//     bacon_promise,
//   ]);
//   return combined_promise;
// }
// async function morning() {
//   let result = await prepare_breakfast();
//   console.log(result);
// }
// morning();

// console.log("-----------------------");

// function prepare_breakfast() {
//   let coffee_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("coffee ready");
//     }, 1000);
//   });
//   console.log(coffee_promise);
//   let egg_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("finished frying egg");
//     }, 2000);
//   });
//   console.log(egg_promise);
//   //   return coffee_promise, egg_promise;
// }
// prepare_breakfast();

// async function morning() {
//   let result = await prepare_breakfast();
//   console.log(result);
// }
// morning();

// console.log("-----------------------");

// function prepare_breakfast() {
//   let coffee_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("coffee ready");
//     }, 1000);
//   });
//   let egg_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("finished frying egg");
//     }, 2000);
//   });
//   let bacon_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("bacon ready");
//     }, 3000);
//   });
//   let combined_promise = Promise.all([
//     coffee_promise,
//     egg_promise,
//     bacon_promise,
//   ]);
//   return combined_promise;
// }
// async function morning() {
//   let result = await prepare_breakfast();
//   console.log(result);
// }
// morning();

// console.log("-----------------------");

// async function fryEgg() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 4000);
//   });
//   let result = await promise; // энд 4 сэкүнд хүлээнэ
//   console.log(result);
// }
// console.log("a");
// console.log("b");
// fryEgg();
// console.log("final");

// console.log("------------------------");

function coffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("coffee is done");
    }, 2000);
  });
}

async function call1() {
  const result1 = await coffee();
  console.log(result1);
}
call1();
// console.log("------------------------");
function egg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("egg is fried");
    }, 4000);
  });
}

async function call2() {
  const result2 = await egg();
  console.log(result2);
}
call2();
// console.log("------------------------");
function bacon() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bacon is fried");
    }, 6000);
  });
}

async function call3() {
  const result3 = await bacon();
  console.log(result3);
}
call3();

// ------------------------------

function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("coffee ready");
    }, 2000);
  });
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 4000);
  });
  let bacon_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bacon ready");
    }, 6000);
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    bacon_promise,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  setTimeout(() => {
    console.log(result);
  }, 2000);
}
morning();

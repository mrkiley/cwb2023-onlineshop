console.log('karlo0');

async function logJSONData() {
  // const response = fetch('https://swapi.dev/api/people/1').then((data) => {
  //   console.log(data);

  //   data.json().then((jsonData) => {
  //     console.log(jsonData);
  //   });
  // });

  // console.log(response);

  // console.log(response);
  // const jsonData =  response.json();
  // console.log(jsonData);

  // try {
  //   const response = await fetch(
  //     'https://my-json-server.typicode.com/mrkiley/cwb2023-onlineshop/productss'
  //   );

  //   // const jsonData = await response.json();

  //   // console.log(jsonData);
  // } catch (error) {
  //   console.log({ error });
  //   console.log('error');
  // }

  // const person = new PersonModel(jsonData.name, jsonData.birth_year);

  // console.log(person);

  // const product = new ProductModel(
  //   jsonData[0].id,
  //   jsonData[0].name,
  //   jsonData[0].price,
  //   jsonData[0].description
  // );

  // console.log(product);

  // This returns a Response object instance
  const response = await fetch(
    'https://my-json-server.typicode.com/mrkiley/cwb2023-onlineshop/products'
  );

  console.log(response);

  // JSON --> JavaScript Object Notation

  // Async/Await
  const jsonData = await response.json();

  // console.log(jsonData);
}

// logJSONData();

// async function getMyInfo() {

//   return {
//     name: "Kiley",
//     age: 75
//   };
// }

// let my_promise = new Promise();
// console.log(`my_promise`);console.log(my_promise);

// // This is a function that returns a promise, and ... the promise resolves into an object.
// let my_data = getMyInfo(); // What will be the "type" of the returned value?

// console.log(`my_data`);console.log(my_data);
// // give me example of

// Promises are used to handle "asnychronous" operations --> "wait" (await) on asynchronous (async) operations

function my_promise_handling_function(resolve, reject) {
  
  setTimeout(() => {

    let result = {
      name: "Kiley",
      age: Math.round(Math.random() * 50)
    };
    
    console.log(`The age is: ${result.age}`);

    if ((result.age % 2) === 0) {
      
      resolve(result.age); // Yay! Everything went well!
    }

    else {
      reject(result.age);
    }

  }, 2500);
}

// const myFirstPromise = new Promise(my_promise_handling_function);

// const myOtherPromise = new Promise((resolve, reject) => { // This is an "arrow" function
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML API.
//   setTimeout(() => {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 250);
// });

/*myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`It was an even number: ${JSON.stringify(successMessage)}`);
}, (error_message => {

  // Do this when an error or problem happens
  console.log(`The promise was rejected for being an odd number: ${error_message}`);
}));*/

// Async / Await overview

async function runEverything() {

  try {
    let my_data = await getData();

    console.log(my_data);
  }

  catch (my_error) {
    console.log('my_error came from a catch'); console.log(my_error);
  }
}

async function getData() {
  
    let result = {
      name: "Kiley",
      age: Math.round(Math.random() * 50)
    };
    
    console.log(`The age is: ${result.age}`);

    // If the age is an odd age
    if ((result.age % 2) !== 0) {

      throw new Error(result.age);
    }
      
    return result.age; // Yay! Everything went well!
}

runEverything();
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

  const response = await fetch(
    'https://my-json-server.typicode.com/mrkiley/cwb2023-onlineshop/products'
  );

  const jsonData = await response.json();

  console.log(jsonData);
}

logJSONData();

// give me example of

class ProductModel {
  constructor(id, name, price, description) {
    this.id = id;
    this.price = price;
    this.description = description;
    this.name = name;
  }
}

class PersonModel {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge() {
    return this.age;
  }
}

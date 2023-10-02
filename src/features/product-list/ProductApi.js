// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO : we will not hardcore server url;
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductsByFilters(filter, sort) {
  // filter obj={"category":"smartphone","laptops"};
  //sort ={"price "};
  //to do :: on server we will support multiple value
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    //TODO : we will not hardcore server url;
    const response = await fetch(
      'http://localhost:8080/products?' + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

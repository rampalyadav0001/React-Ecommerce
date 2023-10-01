// A mock function to mimic making an async request for data
export function fetchCount() {
  return new Promise(async (resolve) =>{
    //TODO : we will not hardcore server url;
    const response=await fetch('https://localhost:8080/products')
    const data=await response.json()
    resolve({data})
  }
  );
}

const { error } = require("console");

/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/

// function getCartTotal(cart) {
//   let result = 0;
//   for (let product of cart) {
//      result += product.priceInCents;
//     //console.log(product)
//   }
//    if(cart === []){
//       throw "The `cart` array is empty."
//    }
//  return result;
// }

function getCartTotal(cart) {
  let result = 0;
  for (let product of cart) {
  if( cart === []){
    throw "The `cart` array is empty."
  }
 
      result += product.priceInCents;

   }
   
   
 return result;
}
console.log(getCartTotal(exampleProducts))

try{
   let result= getCartTotal([])
   

   }catch(error){
   console.log('Alert: ', error)
}
//console.log(getCartTotal(exampleProducts))
//console.log(getCartTotal(shakaObj))

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
// function filterProductsByPriceRange(products, min, max) {
//   const result = [];
//   for (let product of products) {
//     if (product.priceInCents >= min && product.priceInCents <= max) {
//       result.push(product);
//     }
//   }
//   return result;
// }

function filterProductsByPriceRange(products, min, max) {
  const result = [];
  
  
  
  for (let product in products) {
  //   let max = 30000;
  //  let min =10000;
 if (product.priceInCents>=min && product.priceInCents<= max){

      result.push(product);
    }

    if (products==[]||min=="Nan"||max=="Nan"||max==0||(min>max)||max<0||min<0||Object.keys(products !== product.priceInCents)) {
      throw "Reference Error, function cannot run"
      
    }
  }
   return result;
}
//console.log(filterProductsByPriceRange(exampleProducts,10000,30000))

//


/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max,error) {
  const filteredProducts = filterProductsByPriceRange(exampleProducts, min, max);
  const total = getCartTotal(filteredProducts);
  if (Object.keys(! products.priceInCents)){
    throw "0";
  }
  
  

  return total;
}
//getTotalOfAllProductsByPriceRange(exampleProducts, -500, 50000)

//getTotalOfAllProductsByPriceRange(exampleProducts,20000,50000)
// try{
//   getTotalOfAllProductsByPriceRange((products,min,max))

// }catch(error){

// console.log("alert: ", error)

// }
//const product = { name: "Shirt" }

// try {getTotalOfAllProductsByPriceRange((
//   exampleProducts,
//   1000,
//   2000
// ))
// }catch(error){
//   console.log(error)


//  }

// try{

//   getTotalOfAllProductsByPriceRange(products, 1000, 500)
// }catch(error){

//   console.log(error)
// }

// try{getTotalOfAllProductsByPriceRange(products, "100", 50000)}catch(error){console.log(error)}

// try{getTotalOfAllProductsByPriceRange(products, -500, 50000)}catch(error){console.log(error)}

// try{getTotalOfAllProductsByPriceRange(products, 0, 0)}catch(error){console.log(error)}

  





module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};

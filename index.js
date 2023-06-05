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
function getCartTotal(cart) {
  //array representing the items on the shopping cart.
  if (cart.length === 0) {
    // length of the cart array is 0, which means the cart is empty. If it is empty, it throws an eroor using the throw statement. The error message is set to " The cart is empty"
    throw error("The cart is empty");
  }
  let result = 0;
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
function filterProductsByPriceRange(products, min, max) {
  if (products.length === 0) {
    throw error("The product array is empty.");
  }
  //This condition checks if the products array is empty. If it is, it throws an error with the message "The product array is empty."
  if (typeof min !== "number" || typeof max !== "number") {
    throw error("min and max must be numbers.");
  }
  This condition checks if the min and max values are not of type "number." If either of them is not a number, it throws an error with the message "min and max must be numbers."


  if (max === 0) {
    throw error("max cannot be 0.");
  }
  This condition checks if max is equal to 0. If it is, it throws an error with the message "max cannot be 0."
  
  if (min > max) {
    throw error("min cannot be greater than max.");
  } This condition checks if min is greater than max. If it is, it throws an error with the message "min cannot be greater than max."

  if (min < 0 || max < 0) {
    throw error("min and max must be greater than or equal to 0");
  } 

  const result = [];
  for (let product of products) {
    if (typeof product.priceInCents !== "number") {
      throw "One or more products do not have a priceInCents key."; // Throw an error if a product does not have a priceInCents key
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);

    return total;
  } catch (error) {
    return 0;
  }
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};

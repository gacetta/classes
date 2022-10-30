const products = [];
const product = products[0];

// Truthy - values that resolve to true in a boolean context
// Truthy values - everything that's not falsy including empty arrays, empty objects
// Falsy - values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('Product found');
} else {
    console.log('product not found');
}
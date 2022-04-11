// Hashmap & Hash Tables

// Diffence between a hashmap and a hash table is
// --> hashmap keys can be any data types
// --> hash tables keys can only be integers or strings

// Hash Map using ES6 Map()

let map = new Map();

map.set('FIRST', 1);
map.set('SECOND', 2);
map.set('THREE', 3);
map.set('FOUR', 4);

console.log(map); // {FIRST => 1, SECOND => 2, THREE => 3, FOUR => 4}

// hashmap.size() returns the # of elements in the hashmap
// hashmap.get(<key>) returns the value of the element of the given key
// hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
// hashmap.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
// hashmap.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
// hashmap.clear() clears all elements from the hashmap

let obj = {
    Nathan: "555-0182",
    Jane: "315-0322"
  }
//JavaScript object is an example of Hash Table implementation

let obj = {
    Nathan: "555-0182",
    Jane: "315-0322"
  }
  //JavaScript object is an example of Hash Table implementation

  const collection = new Map();

collection.set("Nathan", "555-0182");
collection.set("Jane", "555-0182");

console.log(collection.get("Nathan")); // 555-0182
console.log(collection.size); // 2
//JavaScript Map class is another implementation of Hash Table
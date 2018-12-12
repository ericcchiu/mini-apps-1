const Json2csvParser = require('json2csv').Parser;
const fields = ['firstName', 'lastName', 'county', 'city', 'role', 'sales'];
const opts = { fields };




/*** Testing and logging ***/
const sampleData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
}

// if (sampleData.children) {

// }
// try {
//   const parser = new Json2csvParser(opts);
//   const csv = parser.parse(sampleData);
//   console.log(csv);
// } catch (err) {
//   console.error(err);
// }









/*** This method works but need to truncate some data ***/
// const merge = (objects) => {
//   const result = {};
//   for (let i = 0; i < objects.length; i++) {
//     for (let p in objects[i]) {
//       result[p] = objects[i][p];
//     }
//   }
//   return result
// }

// const flatten = (obj, name, stem) => {
//   let output = {};
//   let newStem = (typeof stem !== 'undefined' && stem !== '') ? stem + '_' + name : name;

//   if (typeof obj !== 'object') {
//     output[newStem] = obj;
//     return output;
//   }
//   for (let property in obj) {
//     let fields = flatten(obj[property], property, newStem);
//     output = merge([output, fields]);
//   }
//   return output;
// }

// console.log(flatten(sampleData))




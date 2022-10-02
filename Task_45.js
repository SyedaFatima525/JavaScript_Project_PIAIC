// function carInfo(manufacturer, model,color,body ) {
//     let object;
//     return object={
//        Manufacturer: manufacturer,
//        Model:model,
//        Color:color,
//     Body:body
//     }
// }

// console.log( carInfo("Acura",2019, "Red","SEDAN"));

// console.log( carInfo("WagonR",2021,"Red"));



function carInfo(manufacturer, model,...optionalData ) {
  var object;
    return object={
       Manufacturer: manufacturer,
       Model:model,
       //var OptionalData : {optionalData};
       =
       function foo() {
        for (var i = 0; i < optionalData.length; i++) {
          console.log(optionalData[i]);
      }
    
    }
}

console.log( carInfo("Acura",2019, {Color: "Red",body:"SEDAN"}));

console.log( carInfo("WagonR",2021, {Color: "Red"}));



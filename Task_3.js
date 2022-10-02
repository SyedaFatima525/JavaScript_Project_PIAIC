let name="Kainat naqvi";
let lowercase=name.toLowerCase();
console.log(lowercase);

let uppercase=name.toUpperCase();
console.log(uppercase);

// function titleCase(name) {
//     name = name.toLowerCase();
//     for (var i = 0; i < name.length; i++) {
//         name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1); 
//     }
//     return name;
    
// }
// titleCase(name);



    str = name.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     titleCaseStr= str.join(' ');
    }
    console.log(titleCaseStr)
    
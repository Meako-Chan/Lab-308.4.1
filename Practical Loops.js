
// Part 1 & Part 2 (Pasted from past lab)Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Q
let test = 'ID,Name,Occupation,Age\n42,uiz Master,58\n98,Bill,Doctor’s Assistant,26'
let test1 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let lines = test1.split('\n');
let cells = [];
for(const i of lines){
    cells.push(i.split(','));
}
let column = cells[0].length;

// console.log(cells);

// Part 3 Transforming Data
//Change keys to lowercase
for(let i = 0; i < column; i++){
    let lowercase = cells[0][i].toLowerCase();
    cells[0][i] = lowercase;
}
key_values = [];
for(let i = 1; i < cells.length; i++){
    let person = {};
    for(let j= 0; j < column; j++){
        person[cells[0][j]] = cells[i][j];
    }
    key_values.push(person);
}
console.log(key_values);

//Part 4 Sorting and Manipulating Data
//Insert new object at index 1
let person2 = {id: "48", name:"Barry"};




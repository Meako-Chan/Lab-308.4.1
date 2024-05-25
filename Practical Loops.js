
// Part 1 & Part 2 (Pasted from past lab)
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

//Part 4 Sorting and Manipulating Data
//Insert new object at index 1
//Remove Last Index
key_values.pop();
let person2 = {id: "48", name:"Barry", occupation: "Runner", age: "25" };
//Insert person2 at index 1 of key_values
let index = 1;
//Split the key values, insert person2 at index1 the concat with the rest of the array.
//Alternate way: key_values = key_values.slice(0, index).concat(person2, key_values.slice(index));
key_values = [...key_values.slice(0,index), person2, ...key_values.slice(index)];

let person3 = {id: "7", name:"Bilbo", occupation: "None", age: "111" };
 //Insert person3 at end of array
key_values.push(person3);

 
//Calculate average age of the group
// Alternate Solution: let average_age = key_values.reduce((sum, value) => sum + Number(value.age), 0)
let average_age = 0;
 for(let i=0; i < key_values.length; i++){
    average_age += Number(key_values[i].age);
 }
average_age /= key_values.length;
// console.log(average_age);
console.log(key_values);

//Part 5: Transform backinto CSV format
let csv_reformat = '';



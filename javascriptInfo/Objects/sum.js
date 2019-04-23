const countSalaries = (obj)=>{
    let sum = 0;
    let keys = Object.keys(obj);
    for (let i =0;i<keys.length;i++){
        key = keys[i];
        sum += obj[key];
        console.log(key);
    }
    return sum;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(countSalaries(salaries));
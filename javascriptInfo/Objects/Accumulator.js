function Accumulator(value){
    this.value = value;
    this.readValue = (newValue)=>{
        this.value += newValue;
    }
    return this;
}

let a = Accumulator(1);
a.readValue(5);
a.readValue(10);
console.log(a);
let calculator = {
    a:0,
    b:0,
    read: ()=>{
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum: ()=>{
        return a+b;
    },
    multiply: ()=>{
        return a*b;
    }
};


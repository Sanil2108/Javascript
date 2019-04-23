function* getGenerator(initSeed){
    let p=initSeed;
    while(true){
        p = p * 16807 % 2147483647;
        yield p;
    }
}

g = getGenerator(1);

for(let i=0;i<10;i++){
    console.log(g.next());
}
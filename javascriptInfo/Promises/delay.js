function delay(ms){
    p = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve()}, ms);
    });

    return p;
}

delay(3000).then(()=>{console.log("Done!");});
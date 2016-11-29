function radiRadnice(val){
    
    var randomNumbers = [];

    for(var x=0; x<val; x++){
        randomNumbers.push(parseInt(Math.random()*100));
    }

    return randomNumbers;    
}

this.onmessage=function(val){ 
    //console.log(val);
    postMessage(radiRadnice(parseInt(val.data)));
}


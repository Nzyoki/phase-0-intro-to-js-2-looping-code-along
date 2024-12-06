const strings =["Guadalupe", "Ollie", "Aki"];

function writeCards(strings){
    const messages=[];
    for(let i=0; i<strings.length; i++){
        messages.push(`Thank you, ${strings[i]}, for the wonderful surprise gift!`);
    }
    return  messages;
}

function countDown(x){
    while(x>=0){
        console.log(x);
        x--;
    }
}
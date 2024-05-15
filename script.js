function isEven(num){
    return num === 0;
}

function checkNumeven(a,b){
    if(isEven(a) == isEven(b)){
        console.log(`${a} and ${b} are even`);
    }   else {
        console.log(`${a} and ${b} are not even`);
    }
}

const num1 = 5;
const num2 = 6;


checkNumeven(num1, num2,);

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3=6
console.log(sum(1,2));//1+2+5=8
console.log(sum(1));//1+4+5=10
console.log(sum(1,0,0));//1+4+5=10

var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3=6
console.log(sum(1,2));//1+2+5=8
console.log(sum(1));//1+4+5=10
console.log(sum(1,0,0));//1+0+0=1
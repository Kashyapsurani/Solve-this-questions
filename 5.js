var  a = 10;
var  b = 10;
var  c = 11;

if (a==b && b==c && c==a ){
    console.log("Equilateral")
}else if (a==b && b==a ){
    console.log("Lsosceles")
}else if (a!=b && b!=c && c!=a){
    console.log("Scalene")
}

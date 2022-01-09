//write a program to reverse number-program51

n=123;
while(n!=0){
    rem =n%10;
    rev =rev*10+rem
    n=n/10;

}
console.log(rev);

//write a program stars-program52

var  space=3,star=0;
for(var  i=1;i<=3;i++){
 space--;star++;
 for(var j=1;j<space;j++){
     console.log(" ");
 }
 for(var j=1;j<star;j++){
     console.log("*");
 }
 console.log();
}
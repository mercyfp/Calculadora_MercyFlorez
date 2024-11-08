
let set=document.querySelector("#set");

let titulo=document.getElementById("titulo");
let a=document.getElementById("a");
let b=document.getElementById("b");
let buttonsumar=document.getElementById("buttonsumar");
let c=document.getElementById("c");

buttonsumar.addEventListener("click",(ev)=>{
    let num1=Number(a.value);
    let num2=Number(b.value);
    alert("La suma es: "+(num1+num2));
    c.value=num1+num2;
});



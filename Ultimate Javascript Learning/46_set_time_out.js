document.write("hello world")
let t=setTimeout(() => {
    alert("I am inside set time out")
}, 5000);
let b=prompt("do you want set time out to execute");
if("no"==b)
{
    clearTimeout(t);
}
console.log(1)
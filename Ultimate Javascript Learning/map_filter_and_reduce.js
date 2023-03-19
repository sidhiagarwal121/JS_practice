let arr=[43,21,12]
let a=arr.map((value,index,array)=>
{
    console.log(value,index,array)
    return value+1
})
console.log(a)
let arr2=[43,21,12]
let ans=arr2.filter((a1)=>
{
    return a1<20
})
console.log(ans)
let arr3=[43,21,12]
let ans1=arr3.reduce((h1,h2)=>
{
    return h1+h2
})
console.log(ans1)
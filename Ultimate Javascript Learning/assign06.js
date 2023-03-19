const canDrive=(age)=>{
    if(age>18)
    {
        return true
    }
    else{
        return false
    }
}
let color=prompt("enter the colour of the background")
document.body.style.background=color
var choice =true
while(choice)
{
let age=prompt("enter the age of the user")
age=Number.parseInt(age)
if(age<0)
{
    location.href="https://www.instagram.com"
}
else{
    if(canDrive(age))
{
    alert("you can drive the vehicle")
}
else
{
    alert("you cannot drive")
}
var choice=confirm("do you want to try again")



}


}

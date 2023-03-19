let form=document.querySelector('form')
let search=document.querySelector('#search')
let weather=document.querySelector('#weather')
form.addEventListener('submit',function(event)
{
    myfn(serch.value)
    event.preventDefault();

})
const weatherApi = {
    key: "9185f573c277a6bd6f551f773687f2b4",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}
const  myfn=async(city)=>
{
    
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
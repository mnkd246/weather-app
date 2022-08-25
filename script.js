var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(event){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + 
    "&appid=e5ad9e638b520bd5ccf823ab3a3f078d")
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cityName.innerHTML = nameValue;
        temp.innerHTML = "Temperature: " + Math.round(tempValue-273) + "\u00B0C";
        desc.innerHTML = "Weather: " + descValue;
    })


.catch(err => alert("Wrong city name!"))
})


var inputValue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var cityOutput = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apiKey = "48423221dde5fd5dd830f87e8255598e";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name'];
            var descriptionVal = data['weather'][0]['description'];
            var temperatureVal = data['main']['temp'];
            var windSpeedVal = data['wind']['speed'];

            cityOutput.innerHTML = `Weather of <span>${nameVal}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperatureVal)}C</span>`;
            description.innerHTML = `Sky Condition: <span>${descriptionVal}</span>`;
            wind.innerHTML = `Wind speed: <span>${windSpeedVal} km/h</span>`;
        })
        .catch(err => alert('You entered a wrong city name'));
});

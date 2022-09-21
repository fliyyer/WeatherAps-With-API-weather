import './style/style.css';
const searchButton = document.querySelector('#button-click');
const inputKeyword = document.querySelector('.input-keyword');


searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputKeyword.value + "&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')
            result.innerHTML =
                `<div class="weather">
                    <h1>${response.name}, ${response.sys.country}</h1>
                    <img src="asset/cloudy-day-1.svg">
                </div>
                <div class="weather-status">
                    <h2><span class="temp">${response.main.temp}<strong>°C</strong></span> <span class="temp">${response.weather[0].description}</span></h2>
                     <h2> <i class="fa-solid fa-temperature-three-quarters"> : </i> ${response.main.temp_min}°С to ${response.main.temp_max}°С</h2>
                    <h2> <i class="fa-solid fa-cloud"></i> : ${response.clouds.all}%</h2>
                    <h2> <i class="fa-solid fa-location-dot"></i> : [${response.coord.lat}, ${response.coord.lon}]</h2>
                    </div> `

        })
    inputKeyword.value = null;

});


class footerElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <div class="footer-content">
            <p>Created by Rahmat Hidayat</p>
            <div class="sosmed">
                <a href="https://www.linkedin.com/in/rahmat-hidayat-24b554237/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/rahmatflyr/" target="_blank">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://github.com/fliyyer" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>

        </div>
    </footer>`
    }
}

customElements.define('footer-element', footerElement);
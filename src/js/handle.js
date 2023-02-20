$(async function () {
    await initWeatherFirstRow()
})

const initWeatherFirstRow = async () => {
    await apiGetWeatherData().done((result) => {
        weatherLocation = result.data
        weatherLocation.forEach(element => {
            console.log(element)
            let temperature = (element.main.temp - 273.15).toFixed();
            let str = ``
            str += `<div class="col-xl-4 col-md-12 col-12">
            <div class="card">
                <div class="card-content">
                    <div class="weather-date position-relative">
                        <div
                            class="date-info position-absolute bg-blue bg-lighten-1 white mt-3 p-1 text-center">
                            <span class="date block">${moment().format('DD')}</span>
                            <span class="month">${moment().format('MMM')}</span>
                        </div>
                    </div>`
            if (element.weather[0].main == "Clouds") {
                str += `<div class="card-body bg-amber bg-lighten-4 rounded-top">`
            } else if (element.weather[0].main == "Rain") {
                str += `<div class="card-body bg-dark bg-lighten-4 rounded-top">`
            } else {
                str += `<div class="card-body bg-blue-grey bg-lighten-4 rounded-top">`
            }
            str += `<ul class="list-inline text-right">
                            <li><a data-action="reload"><i
                                        class="ft-rotate-cw font-medium-4 blue"></i></a></li>
                        </ul>
                        <div class="animated-weather-icons text-center">`
            if (element.weather[0].main == "Clouds") {
                str += `<svg version="1.1" id="wind1"
                class="climacon climacon_wind climacon-amber climacon-darken-2 height-200"
                viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-wind">
                    <g class="climacon_wrapperComponent climacon_componentWrap-wind">
                        <path
                            class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl"
                            d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z">
                        </path>
                        <path
                            class="climacon_component climacon_component-stroke climacon_component-wind"
                            d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z">
                        </path>
                    </g>
                </g>
            </svg>`
            } else if (element.weather[0].main == "Rain") {
                str += `<svg version="1.1" id="wind1"
                class="climacon climacon_wind climacon-amber climacon-darken-2 height-200"
                viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-wind">
                    <g class="climacon_wrapperComponent climacon_componentWrap-wind">
                        <path
                            class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl"
                            d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z">
                        </path>
                        <path
                            class="climacon_component climacon_component-stroke climacon_component-wind"
                            d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z">
                        </path>
                    </g>
                </g>
            </svg>`
            } else if (element.weather[0].main == "Sunny") {
                str += `< svg version = "1.1" id = "wind2" class="climacon climacon_wind climacon-amber climacon-darken-2 height-100" viewBox = "15 15 70 70" >
                    <g class="climacon_iconWrap climacon_iconWrap-wind">
                        <g class="climacon_wrapperComponent climacon_componentWrap-wind">
                            <path class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl" d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z">
                            </path>
                            <path class="climacon_component climacon_component-stroke climacon_component-wind" d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z">
                            </path>
                        </g>
                    </g>
</svg > `
            }
            str += `</div >
    <div class="weather-details text-center">
        <span class="mt-2 block blue darken-2">${element.weather[0].main}</span>
        <span class="font-medium-4 text-bold-500 blue darken-4">${element.name_location}</span>
    </div>
                    </div >
    <div class="card-footer bg-blue bg-darken-3 py-3 border-0">
        <div class="row">
            <div class="col-4 text-center display-table-cell">
                <i class="me-wind font-large-1 white lighten-3 align-middle"></i> <span
                    class="white align-middle">${element.wind.speed}m/s</span>
            </div>
            <div class="col-4 text-center display-table-cell">
                <i class="me-sun2 font-large-1 white lighten-3 align-middle"></i> <span
                    class="white align-middle">${element.main.humidity}%</span>
            </div>
            <div class="col-4 text-center display-table-cell">
                <i class="me-thermometer font-large-1 white lighten-3 align-middle"></i>
                <span class="white align-middle">${temperature}°</span>
            </div>
        </div>
    </div>
                </div >
            </div >
        </div > `
            $("#first-row").append(str)
        });
    })
}
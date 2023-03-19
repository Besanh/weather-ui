$(async function () {
    await initWeatherFirstRow()
    await initWeatherSecondRow()
})

const initWeatherFirstRow = async () => {
    await apiGetWeatherData().done((result) => {
        weatherLocation = result.data
        weatherLocation.forEach(element => {
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
            if (element.weather[0].main == "Clear") {
                str += `<div class="card-body bg-amber bg-lighten-4 rounded-top">`
            } else if (element.weather[0].main == "Rain") {
                str += `<div class="card-body bg-dark bg-lighten-4 rounded-top">`
            } else if (element.weather[0].main == "Cloud") {
                str += `<div class="card-body bg-gray bg-lighten-4 rounded-top">`
            } else {
                str += `<div class="card-body bg-blue-grey bg-lighten-4 rounded-top">`
            }
            str += `<div class="animated-weather-icons text-center">`
            if (element.weather[0].main == "Clear") {
                str += `<svg version="1.1" id="clear"
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
                str += `<svg version="1.1" id="rain"
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
                str += `< svg version = "1.1" id = "sunny" class="climacon climacon_wind climacon-amber climacon-darken-2 height-100" viewBox = "15 15 70 70" >
                    <g class="climacon_iconWrap climacon_iconWrap-wind">
                        <g class="climacon_wrapperComponent climacon_componentWrap-wind">
                            <path class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl" d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z">
                            </path>
                            <path class="climacon_component climacon_component-stroke climacon_component-wind" d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z">
                            </path>
                        </g>
                    </g>
                </svg > `
            } else if (element.weather[0].main == "Clouds") {
                str += `<svg version="1.1" id="clouds"
                    class="climacon climacon_wind climacon-grey climacon-darken-2 height-200"
                    viewBox="15 15 70 70">
                    <g class="climacon_iconWrap climacon_cloudSunFill-iconWrap">
                        <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                            <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z">
                                </path>
                                <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z">
                                </path>
                            </g>
                            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                <circle class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                                <circle class="climacon_component climacon_component-fill climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999">
                                </circle>
                            </g>
                        </g>
                        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z">
                            </path>
                            <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z">
                            </path>
                        </g>
                    </g>
                </svg>`
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

const initWeatherSecondRow = async () => {
    await apiGetWeatherHistorical().done((result) => {
        let historical = result.data.list
        historicalHour = historical.filter(element => moment(element.dt_txt).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'))
        let str = `
        <div class="col-xl-6 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-content">
                    <div class="weather-img position-relative">
                        <div class="weather-date position-absolute">
                            <div class="date-info bg-blue-grey bg-darken-4 white p-1 text-center">
                                <span class="date block">${moment().format('DD')}</span>
                                <span class="month">${moment().format('MMM')}</span>
                            </div>
                        </div>
                        <img class="card-img-top img-fluid height-300" src="src/public/image/ice.png"
                            alt="Card image cap">
                    </div>
                <div class="card-body text-center">
                    <div class="row">
        `
        historicalHour = historicalHour.sort(getSortOrder("dt_txt"))
        historicalHour.forEach(element => {
            let temperature = (element.main.temp - 273.15).toFixed();
            str += `<div class="col-3">
                        <span class="block">${moment(element.dt_txt).format('HH:mm')}</span>
                        <i class="me-cloudy block font-large-1 my-1"></i>
                        <span class="block">${temperature}°</span>
                    </div>
                    `
        })
        str += `            </div>
                        </div>
                    </div>
                </div>
            </div>`

        let str2 = `<div class="col-xl-6 col-md-12 col-sm-12">
        <div class="card">
            <div class="card-content">
                <div class="weather-img position-relative">
                    <div class="weather-date position-absolute">
                        <div class="date-info bg-blue-grey bg-darken-4 white p-1 text-center">
                        <span class="date block">${moment().format('DD')}</span>
                        <span class="month">${moment().format('MMM')}</span>
                    </div>
                </div>
                    <img class="card-img-top img-fluid height-300"
                        src="src/public/image/mountain.png" alt="Card image cap">
                </div>
                <div class="card-body text-center">
                    <div class="row">
                `
        historicalWeekly = historical.sort(getSortOrder("dt_txt"))
        historicalWeekly.forEach(element => {
            if (moment(element.dt_txt).format('HH:mm:ss') == '00:00:00') {
                let temperature = (element.main.temp - 273.15).toFixed();
                str2 += `<div class="col-2">
                            <span class="block">${moment(element.dt_txt).format('dddd')}</span>
                            <i class="me-cloudy block font-large-1 my-1"></i>
                            <span class="block">${temperature}°</span>
                        </div>`
            }
        })

        str2 += `                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        $("#second-row").append(str)
        $("#second-row").append(str2)
    })
}
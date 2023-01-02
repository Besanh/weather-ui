$(async function(){
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
                    </div>
                    <div class="card-body bg-blue bg-lighten-4 rounded-top">
                        <ul class="list-inline text-right">
                            <li><a data-action="reload"><i
                                        class="ft-rotate-cw font-medium-4 blue"></i></a></li>
                        </ul>
                        <div class="animated-weather-icons text-center">
                            <svg version="1.1" id="cloudDrizzleAlt1"
                                class="climacon climacon_cloudDrizzleAlt climacon-blue climacon-darken-2 height-200"
                                viewBox="15 15 70 70">
                                <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleAlt">
                                    <g
                                        class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                        <path
                                            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
                                            id="Drizzle-Left_1_1"
                                            d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z">
                                        </path>
                                        <path
                                            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
                                            d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z">
                                        </path>
                                        <path
                                            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
                                            d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z">
                                        </path>
                                    </g>
                                    <g
                                        class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                        <path
                                            class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                            d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="weather-details text-center">
                            <span class="mt-2 block blue darken-2">${element.weather[0].main}</span>
                            <span class="font-medium-4 text-bold-500 blue darken-4">${element.name_location}</span>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>`
            $("#first-row").append(str)
        });
    })
}
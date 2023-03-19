const apiGetWeatherData = () => {
	return $.ajax({
		type: "GET",
		url: API_HOST + "/v1/weather/data",
		// headers: {
		// 	"open-weather-signature": SIGNATURE,
		// },
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		async: true,
	}).fail((request, status, error) => {
		console("error", error)
	});
};

const apiGetWeatherHistorical = () => {
	return $.ajax({
		type: "GET",
		url: API_HOST + "/v1/weather/historical",
		// headers: {
		// 	"open-weather-signature": SIGNATURE,
		// },
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		async: true,
	}).fail((request, status, error) => {
		console("error", error)
	});
}
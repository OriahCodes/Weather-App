class Renderer {

    renderData(allCityData){
        $("#weather-results").empty()

        const source = $("#weather-template").html()
        const template = Handlebars.compile(source)

        let cities = template({allCityData})
        $("#weather-results").append(cities)
    }
}
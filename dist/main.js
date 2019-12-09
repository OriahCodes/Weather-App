const tempManager = new TempManager
const renderer = new Renderer

loadPage()

async function loadPage(){
    await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
}

const handleSearch =  async function(){
    let cityName = $("#city-input").val()
    $("#city-input").val("")
    await tempManager.getCityData(cityName)
    renderer.renderData(tempManager.cityData)
    console.log( "Rendered " + cityName )
}

$("#search-city-btn").click( handleSearch )

const saveCity = function(thisCity){
    $(thisCity).closest("div").find('.delete-city').css("display", "block")
    $(thisCity).css("display", "none")

    let cityName = $(thisCity).closest("div").find('.name').text()
    tempManager.saveCity(cityName)
}

const deleteCity = function(thisCity){
    $(thisCity).closest("div").find('.save-city').css("display", "block")
    $(thisCity).css("display", "none")

    let cityName = $(thisCity).closest("div").find('.name').text()
    tempManager.removeCity(cityName)
}


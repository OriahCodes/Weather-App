class TempManager {
    constructor(){
        this.cityData = []
    }

    async getDataFromDB (){
        let allCityData = await $.get('/cities')
        this.cityData = allCityData
        console.log(allCityData)
    }

    async getCityData(cityName){
        let cityInfo = await $.get(`/city/${cityName}`)
        let alreadyExists = this.cityData.filter(c => c.cityName == cityInfo.cityName)
        if (alreadyExists.length == 0){
            this.cityData.push(cityInfo)
        }
        else{
            console.log("City already exists")
        }
    }

    saveCity (cityName){
        let cityInfo = this.cityData.filter(c => c.cityName == cityName)
        $.post(`/city`, cityInfo[0])
        .then(console.log("Saved " + cityName + " to db"))
        .catch(error => {
            console.log(error)
        })
    }

    removeCity(cityName){
        $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function(){
                console.log("deleted " + cityName + " from db")
            }
        })
    }
}

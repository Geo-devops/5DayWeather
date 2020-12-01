$(document).ready(function(){
    //button click calls search function
    $("#search-weather").on("click", function(event){
        event.preventDefault();
        console.log('btn hit')
        var city = $("#city-input").val();
        console.log(city)
        searchWeather(city)
    })

    var APIKey = "39b02ba1a1fac3463d263b47d5d01e84";
    //search function with name of city, calls second function that looks up city by lat/lon
    function searchWeather(cityTerm){
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityTerm + "&appid=" + APIKey + "&units=imperial";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
            })
            
            .then(function(response) {
                $("#city-view").empty();
                // queryURL
                console.log(response);
                // console.log(response);
                var card = $("<div>").addClass("card mt-3");
                var cardBody = $("<div>").addClass("card-body");
                var cardTitle = $("<h4>").addClass("card-title").text(response.name);
                var temp = $("<h7>").addClass("card-text").text(response.main.temp);
                var humidity = $("<h8>").addClass("card-text").text(response.main.temp);
                
                $("#city-view").append(card.append(cardBody.append(cardTitle, temp)))
                // con
                getForecast(response.coord.lat, response.coord.lon)

                
            });

    }

    function getForecast(lat, lon) {
        var URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIKey}`
        console.log(URL);
        $.ajax({
            url: URL,
            method: "GET",
            success: function(response){
                console.log(response)

                for(var i = 1; i < 6; i++) { 
                    // var dt = response.daily[i].dt;
                   
                    var days = moment().format("dddd, MMMM Do");   
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var d = new Date(data.list[0].dt * 1000);
                    var dayName = days[d.getDay()];
                        console.log(dayName) 

                    let date = new Date(data.sys.sunrise * 1000).toString();
                    let sunrise = date.slice(16, 24);

                    `<h1>${sunrise}</h1>`
                    
                //     var card2 = $("<div>").addClass("card mt-3");
                // var cardBody2 = $("<div>").addClass("card-body");
                // var cardTitle2= $("<h4>").addClass("card-title").text(response.name);
                // $("#city-view").append(card2.append(cardBody2.append(cardTitle2, date));
                // // con
                // getForecast(response.coord.lat, response.coord.lon)

                }
            }
            })
    }

})







    // Prevent submit button from submitting a form when clicked without anything there
    
    // process input from search box
    
    
    
     
    
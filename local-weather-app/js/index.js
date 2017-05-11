$('document').ready(function(global) {
  // if ("geolocation" in navigator) {
    console.log('Good to go');

   /*
   navigator.geolocation.getCurrentPosition(function(pos) {
      
      latit = pos.coords.latitude;
      longit = pos.coords.longitude;
  */
    $.getJSON("http://ip-api.com/json", function(data) {
      console.log(data.lat) 
      
      $.getJSON('https://cors.5apps.com/?uri=http://api.openweathermap.org/data/2.5/weather?lat=' + data.lat + '&lon=' + data.lon + '&APPID=936e860c72edb8cb527707e7d59da1ea', function(data) {

        $('.cdp-country').html(data.name + ', ' + data.sys.country);

        var weather = data.weather[0].main;

           
        $('.weather').html(weather);

        //icon

        var iconCode = data.weather[0].icon;

           
        var iconUrl =

          "http://openweathermap.org/img/w/" + iconCode + ".png"; 

        $(".icon").html("<img class = 'newIcon' src=" + iconUrl + ">");

        //temp

        var tempature = data.main.temp; //kelvin

        var celcius = Math.floor(tempature - 273.15);

        var farenheight = Math.floor(9 / 5 * celcius + 32);

        $('.temp').html(celcius + " °C");

        $('.cCon').on('click', function() {
          $('.temp').html(celcius + " °C")
        });

        $('.fCon').on('click', function() {
          $('.temp').html(farenheight + " °F")
        });

      });
  }) 

 /* } else {
    $('.test').html('Sorry, there was an issue finding your geo location. Please try again later with a different browser.').css('font-size', '20px').css('color', 'white');
  } 
 */

}(window));
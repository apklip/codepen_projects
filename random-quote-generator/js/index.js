
$('document').ready(function() {
  function getOriginalColor() { //gets original page color
    var color = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#FB6964', "#BDBB99", "#77B1A9", '#73A857'];

    x = Math.floor(Math.random() * color.length);

    return color[x];
    
    console.log(color[x]);
  }

  var orgColor = getOriginalColor();

  $('body').css("background-color", orgColor);

  //when button is pressed

  $(".theButton").on("click", function() {
    //lets change the color
    function getRandomColor() {
      var color = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#FB6964', "#BDBB99", "#77B1A9", '#73A857'];

      x = Math.floor(Math.random() * color.length);

      return color[x];
    }

    $('body').css('background-color', getRandomColor());

    //get quote
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
      quote = data;
                        $("#quoteContent").html(quote.quoteText);

      $("#quoteAuthor").html('-' + quote.quoteAuthor) ;
      
    var tweetString = "http://twitter.com/share?text=";
    
    tweetString += quote.quoteText + '- ' + quote.quoteAuthor;
    
    tweetString = tweetString.replace(/ /g, "%20");
      
    $('a').attr('href', tweetString);
    });

    
  });
});
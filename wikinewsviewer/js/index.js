$('document').ready(function(global) {
  language = 'en'; //default
  wikiName = 'wikipedia'; //default
  
  $('.wikiChanger').on("click", function(event) {
    event.preventDefault();
    var id = this.id;
    wikiName=id;
    $('.head h1').text(id + "Viewer");
    
  })
  
  $('.search-btn').on("click", function(event) { 
    event.preventDefault(); // prevents reload
    searchInput = $(".wiki-finder").val() // input value
    $.getJSON('https://' + language + '.' + wikiName + '.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + searchInput + '&callback=?', function(data) { 
      var firstLink = data[3][0];
      var secondLink = data[3][1];     
      var thirdLink = data[3][2];
      var fourthLink = data[3][3];
      var fifthLink = data[3][4];
      
      if(firstLink !== undefined) {
        $('.firstWiki').removeClass('removed');
        $('.firstWiki').attr('src', firstLink);
        $('.warning').html('Here are some results!');
      } else {
        $('.firstWiki').addClass('removed');
        $('.warning').html('No Wiki Articles Avalible');
      }
      
      if(secondLink !== undefined) {
        $('.secondWiki').removeClass('removed');
        $('.secondWiki').attr('src', secondLink);
      } else {
        $('.secondWiki').addClass('removed');
      }
      
      if(thirdLink !== undefined) {
        $('.thirdWiki').removeClass('removed');
        $('.thirdWiki').attr('src', thirdLink);
      } else {
        $('.thirdWiki').addClass('removed');
      }
      
      if(fourthLink !== undefined) {
        $('.fourthWiki').removeClass('removed');
        $('.fourthWiki').attr('src', fourthLink);
      } else {
        $('.fourthWiki').addClass('removed');
      }
      
      if(fifthLink !== undefined) {
        $('.fifthWiki').removeClass('removed');
        $('.fifthWiki').attr('src', fifthLink);
      } else {
        $('.fifthWiki').addClass('removed');
      }
   });
  });
}(window));

function callWiki() {
  alert("Called");
 }
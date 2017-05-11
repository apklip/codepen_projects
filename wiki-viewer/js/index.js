//https://developers.google.com/custom-search/
//https://developers.google.com/custom-search/docs/tutorial/creatingcse
//https://www.mediawiki.org/wiki/API:Main_page
$('document').ready(function(global) {
  
  //random wiki article button
  $('.randomBtn').on("click", function() {
    $('.randomLink').attr('href', 'http://en.wikipedia.org/wiki/Special:Random');
  });
  
  // article finder
  
  $('.searchBtn').on("click", function(event) {
    
    event.preventDefault();
    
    var wikiInput = $('.wikiFinder').val(); 
   
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + wikiInput + '&callback=?', function(data) { 
      //data[3] is the wiki links
  
      var firstLink = data[3][0];
      
      var secondLink = data[3][1];
      
      var thirdLink = data[3][2];
      
      var fourthLink = data[3][3];
      
      var fifthLink = data[3][4];
      
      console.log(firstLink);
      
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
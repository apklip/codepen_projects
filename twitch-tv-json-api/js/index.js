$('document').ready(function() {
  
  var streamers = ["OgamingSC2","freecodecamp", "storbeck", "monstercat", "terakilobyte", "habathcx","ESL_SC2","RobotCaleb","thomasballinger","brunofin", "noobs2ninjas", "beohoff"];
  
  for(var i = 0; i < streamers.length; i++) { //does each streamer
      //kraken is part of api call, change before the question mark
      var api = 'https://wind-bow.gomix.me/twitch-api/streams' + '/' + streamers[i] + '?callback=?';
      // CHANGE: https://api.twitch.tv/kraken/streams/ to https://wind-bow.gomix.me/twitch-api      
      // + streamers[i] + '?callback=?';
      $.getJSON(api, function(data) {

        if(data.stream !== null && data.stream !== undefined) { //if online
          
          var profilePicture = '"' + data.stream.channel.logo + '"';
          var channelLink = '"' + data._links.channel + '"';
          var userName = data.stream.channel.name;
          var game = data.stream.game;
          
          console.log(game);
          
          console.log(channelLink);
          
          $('.content').prepend('<div class = "onStream"><img class = "icon col-xs-2" src=' + profilePicture + '/><p class = "onChannelName col-xs-6"><a class ="onChannelName" href=' + channelLink + '>' + userName + '</a> - ' + game + ': ' + data.stream.viewers + ' Viewers</p><p class = "online col-xs-4">Online</p></div>');
        } else if(data.stream === null) { //if offline
          
          var offChannel = '"' + data._links.channel + '"';
          var offChannelX = data._links.channel;
          console.log(offChannel);
          
          $('.content').append('<div class = "offStream"><img class = "icon col-xs-2" src= "http://afirmio.com/wp-content/uploads/2014/10/maleprofilecircle2.jpg" /><p class = "col-xs-6 channelName"><a href=' + offChannel + '>' + offChannelX + '</a><p class = "line col-xs-4">Offline</p></div>');
          
        } else { //if banned
          
            $('.content').append('<div class = "bannedStream"><img class = "icon col-xs-2" src= "http://afirmio.com/wp-content/uploads/2014/10/maleprofilecircle2.jpg" /><p class = "col-xs-6 channelName"><a href=http://www.twitch.com> Banned </a><p class = "line col-xs-4">Unavalible</p></div>');  
        }
        
      });
  }
});
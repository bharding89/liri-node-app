
var fs = require("fs");
var spotify = require("spotify");
var twitter = require("twitter");
var omdb = require("omdb");
var request = require("request");

var command = process.argv[2];
var value = process.argv;

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i = 2; i < value.length; i++) {

  // Build a string with the address.
  statement = value[i];

}

switch (command) {
  case "my-tweets":
    tweets();
    break;

  case "spotify-this-song":
    spotify();
    break;

  case "movie-this":
    OMDB();
    break;

  case "do-what-it-says":
    random();
    break;
}

function OMDB() {
    // Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
    console.log(movieName);
    }
  else {

    movieName += nodeArgs[i];

    }
  }
request("http://www.omdbapi.com/?t="+ movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
 }
)};

function tweets() {
var params = {Kaiser060606: 'nodejs'};
var keys = require(".keys.js");
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_key
  });
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });  
};
function spotify() {

  spotify.search({ type: 'track', query: statement }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
      else {  
      }
  });
/*
function random() {
  request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
          console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      }  
  });
};
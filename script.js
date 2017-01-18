'use strict';

$(document).ready(function() {
    $('#text').characterCounter();

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, xxx, vel.";
    var stopWords = ['viagra','xxx','rabbit','money','ivan'] ;

    console.log(stopWords.every(function(word, index) {
    	return !~lorem.indexOf(word);
    }));

  });
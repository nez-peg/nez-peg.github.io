//var hljs = require('../vender/highlightjs/highlight.js');

var smallPanels;
$(function(){
  hljs.initHighlightingOnLoad();
  smallPanels = $(".left-small-panel");

  var currentPathElement = location.pathname;

  (smallPanels.toArray()).forEach( function(panel){
    console.log($(panel).attr("href"));
    if($(panel).attr("href") == currentPathElement){
      $(panel).addClass("selected");
    }
  });

  $(".left-panel").click(function(){
    location.href = $(this).attr("href");
  });

  $(".left-small-panel").click(function(){
    location.href = $(this).attr("href");
  });

});

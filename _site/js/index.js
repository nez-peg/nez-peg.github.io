var smallPanels;
$(function(){
  //smallPanel = document.getElementsByClassName("left-small-panel");
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

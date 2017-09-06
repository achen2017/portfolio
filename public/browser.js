// var change_background = function(next_color) {
//   $("#big_wrap").css('background-color', next_color);
// }
  //$("#big_wrap").css("background-color", "black"); //works
  $(document).ready(function() {


    var counter = 0;
    var sugg_fill_color = ["#00FFFF","#a2a2d0", "#ffa62f", "#bc7889", "#90ee90", "#FFDD00"];
    setInterval(change_background,5000);
    function change_background() {
      if (counter < 4) {
        $("#big_wrap").css('background-color', sugg_fill_color[counter]);
        counter = counter + 1;
      } else {
       $("#big_wrap").css('background-color', sugg_fill_color[counter]);
       counter = 0;
      }

    }

  });

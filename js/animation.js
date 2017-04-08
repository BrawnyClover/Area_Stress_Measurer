var speed = 1100;

var flag = 0;

function longBarAnimation() {
  var d = $.Deferred();
  setTimeout(function(){
    $("#bar_long")
        .animate({
            top: "-30vh"
        }, speed-500)
        .animate({
          top:"7vh"
        },speed-600)
        .animate({
          top:"4vh"
        },500)
      d.resolve();
      console.log("longBarAnimation");
  },1000);
    return d.promise();
}
function shortBarAnimation() {
  var d = $.Deferred();
  setTimeout(function(){
    $("#bar_short")
        .animate({
          left:"27vh"
        }, speed+100)
        .animate({
          left:"30vh"
        },500)
        d.resolve();
        console.log("shortBarAnimation");
  },1700);
  return d.promise();
}
function clockBarAnimation() {
  var d = $.Deferred();
  setTimeout(function(){

    $("#bar_clock")
        .animate({
          left:"27vh"
        }, speed)
        .animate({
          left:"30vh"
        },500)
        d.resolve();
            console.log("clockBarAnimation");
  },1500);

  return d.promise();
}
function leftBarAnimation() {
  var d = $.Deferred();
  setTimeout(function(){
    $("#bar_top").
    animate({
        left: "2vh"
    }, (speed + 200) / 2).
    animate({
        top: "3vh"
    }, speed)
    $("#bar")
        .animate({
            left: "2vh"
        }, (speed + 200) / 2)
        .animate({
            height: "87vh",
            top: "-2vh"
        }, speed);

    $("#bar_bottom")
        .animate({
            left: "2vh"
        }, (speed + 200) / 2)
        .animate({
            bottom: "0vh",
            top: "-5vh"
        }, speed)
    $(".li-btn").animate({
        height: "10vh",
        margin: "5vh 0vh 0vh 3vh"
    }, 1250);
    $('.btnLi').animate({
        top: "10vh",
        height: "10vh"
    }, speed + 300)
    d.resolve();
        console.log("leftBarAnimation");
  },100);

    return d.promise();
}

function initButton() {
  var d = $.Deferred();
  setTimeout(function(){
    $('button.li-btn')
        .bind("mouseenter", function(e) {
            if ($('#contentBox').length) {
                $('#contentBox').remove();
            }
            var value = $(e.target).attr('id');
            $('#container')
                .append('<div id="contentBox" class="contentBox" style="width:0%; height:10%; left:0; top:45%; ">' + value + '</div>');
            $('#contentBox')
                .animate({
                    width: "100%"
                }, 700)
                .animate({
                    height: "100%",
                    top: "0px"
                }, 100);
        })
        .bind("click", function(e) {
            $('#contentBox').addClass("clicked");
        })
        .bind("mouseleave", function(e) {
            console.log($('#contentBox').attr('class'));
            if ($('#contentBox').attr('class').indexOf("clicked") == -1) {
                $('#contentBox')
                    .animate({
                        height: "10%",
                        top: "45%"
                    }, 200)
                    .animate({
                        left: "-100%"
                    }, 1000, function() {
                        $('#contentBox').remove();
                    });
            }
            console.log($("#bar").css("background-image"))
        });
    $("#contentList").css("top", "0vh").css("height", "50vh");
    d.resolve();
        console.log("initButton");
  },1000);
  return d.promise();
}

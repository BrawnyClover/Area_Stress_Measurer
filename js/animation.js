var speed = 1100;

var flag = 0;
function mainBarLRAnimation(){
  var d = $.Deferred();
  setTimeout(function(){

    $("#mainboxLeft")
    .animate({
      top:"13vh"
    },speed)
    $("#mainboxRight")
    .animate({
      top:"13vh"
    },speed)
    d.resolve();
  },100);
  return d.promise();
}
function mainBarAnimation(){
  var d = $.Deferred();
  setTimeout(function(){

    $("#mainboxLeft")
    .animate({
      left:"35vh"
    },speed-200)
    $("#mainboxRight")
    .animate({
      left:"128vh"
    },speed-200)
    $(".contentBox")
    .animate({
      width:"90vh",
      left:"-56vh",
      "font-size":"10vh"
    },speed+256)
    d.resolve();
  },1000);
  return d.promise();
}
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
          top:"1vh"
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
            height: "80vh",
            top: "5vh"
        }, speed);

    $("#bar_bottom")
        .animate({
            left: "2vh"
        }, (speed + 200) / 2)
        .animate({
            bottom: "0vh",
            top: "82vh"
        }, speed)
    $(".li-btn").animate({
        height: "10vh",
        margin: "5vh 0vh 0vh 2vh"
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
var id = ['front','developer','login','news','bg'];
var check = ['20vh','-350vh','-721vh','-1090vh','-1460vh'];
var ind;
function initButton() {
    $(".li-btn")
    .bind("mouseenter",function(e){
      console.log("enter");
      id.forEach(
        function findId(value, index){
          if(value == $(e.target).attr('id')){
            ind = index;
          }
        }
      );
      $('#container').
      animate({
        left:check[ind]
      },speed);
    })
    $("#contentList").css("top", "0vh").css("height", "50vh");
    console.log("initButton");
}

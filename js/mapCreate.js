var position;
var audio = new Audio('./source/sound/ui-sound-19.ogg');

function getAbsolutePos(obj) {
    var position = new Object;
    position.x = 0;
    position.y = 0;
    if (obj) {
        position.x = obj.offsetLeft + obj.clientLeft;
        position.y = obj.offsetTop + obj.clientTop;
        if (obj.offsetParent) {
            var parentpos = getAbsolutePos(obj.offsetParent);
            position.x += parentpos.x;
            position.y += parentpos.y;
        }
    }
    return position;
}
function createTooltip(cursorX, cursorY, node){
    console.log("cursorY:"+cursorY);
    var adder = -200;
    if(cursorY+300>550){
        adder = -250;
    }
    else if (cursorY-300<0){
        adder = -100;
    }
    var text = node.parentNode.firstChild.id;
    $("#tooltip").css({
        "display":"block",
        "top":cursorY+adder,
        "left":cursorX+50,
        "background-image":"url('./css/map_detail.png')",
        "position": "absolute"}).show();
        console.log("createTooltip");
    $("#tooltip").text(text);
}
function removeTooltip()
{
    $("#tooltip").css({
        "display":"none"});
        console.log("removeTooltip");
}
var parentWidth = $('#map').width();
var parentHeight = $('#map').height();
var canvas = d3.select("#map").append("svg")
    .attr("id", "svg")
    .attr("width", parentWidth)
    .attr("height", parentHeight);

d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
        console.log(this.parentNode.firstChild.id)
        this.parentNode.parentNode.appendChild(this.parentNode);
    });
};
d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.parentNode.insertBefore(this.parentNode, firstChild);
        }
    });
};
d3.json("./mp.geojson", function(data) {
    var group = canvas.selectAll("g")
        .data(data.features)
        .enter()
        .append("g");
    var projection = d3.geo.mercator()
        .center([127.5, 36])
        .scale(3900)
        .translate([parentWidth/2, parentHeight/2]);
    var path = d3.geo.path().projection(projection);

    var areas = group.append("path")
        .attr("d", path)
        .attr("stroke", "blue")
        .attr("Stroke-width", 10)
        .attr("fill", "black")
        .attr("class", "path")
        .attr("id", function(d) {
            return d.properties.name_eng;
        })
        .attr("opacity", "1")
        .on("mouseover", function(d) {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            position = getAbsolutePos(d3.select(this));
            d3.select(this).transition()
                .attr("transform", null)
                .attr("transform", " translate(0,-8)")
                .duration(400).style("fill", "#eeefff")
            d3.select(this).moveToFront();
            var cursorX = event.pageX;
            var cursorY = event.pageY;
            createTooltip(cursorX,cursorY,this);
        })
        .on("mouseout", function() {
            d3.select(this).transition()
                .duration(300)
                .style("fill", "black")
                .attr("transform", "translate(0,0)")
                .delay(100);
            if (getAbsolutePos(d3.select(this)) == position) {
                d3.select(this).moveToBack();
            }
            removeTooltip();
        });

})
console.log("mapcreated");

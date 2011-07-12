$(function() {
var canvas = $("#c");
var canvasHeight;
var canvasWidth;
var ctx;
var dt = 0.1;

var pointCollection;

function init() {
updateCanvasDimensions();

var g = [new Point(200, 190, 0.0, 3, "#FF0000"), 
new Point(205, 185, 0.0, 4, "#FF0000"), new Point(195, 185, 0.0, 4, "#FF0000"), 
new Point(210, 180, 0.0, 5, "#FF0000"), new Point(190, 180, 0.0, 5, "#FF0000"), 
new Point(215, 175, 0.0, 4, "#FF0000"), new Point(185, 175, 0.0, 4, "#FF0000"), 
new Point(220, 170, 0.0, 3, "#FF0000"), new Point(180, 170, 0.0, 3, "#FF0000"), 
new Point(225, 165, 0.0, 2, "#FF0000"), new Point(175, 165, 0.0, 2, "#FF0000"), 
new Point(232, 160, 0.0, 1, "#FF0000"), new Point(168, 160, 0.0, 1, "#FF0000"), 
new Point(239, 155, 0.0, 2, "#FF0000"), new Point(161, 155, 0.0, 2, "#FF0000"), 
new Point(246, 150, 0.0, 3, "#FF0000"), new Point(154, 150, 0.0, 3, "#FF0000"), 
new Point(253, 145, 0.0, 3, "#FF0000"), new Point(147, 145, 0.0, 3, "#FF0000"), 
new Point(260, 140, 0.0, 4, "#FF0000"), new Point(140, 140, 0.0, 4, "#FF0000"), 
new Point(265, 135, 0.0, 5, "#FF0000"), new Point(135, 135, 0.0, 5, "#FF0000"), 
new Point(270, 130, 0.0, 6, "#FF0000"), new Point(130, 130, 0.0, 6, "#FF0000"), 
new Point(276, 125, 0.0, 5, "#FF0000"), new Point(124, 125, 0.0, 5, "#FF0000"), 
new Point(282, 120, 0.0, 4, "#FF0000"), new Point(118, 120, 0.0, 4, "#FF0000"), 
new Point(288, 115, 0.0, 3, "#FF0000"), new Point(112, 115, 0.0, 3, "#FF0000"), 
new Point(294, 110, 0.0, 3, "#FF0000"), new Point(106, 110, 0.0, 3, "#FF0000"), 
new Point(300, 105, 0.0, 2, "#FF0000"), new Point(100, 105, 0.0, 2, "#FF0000"), 
new Point(303, 100, 0.0, 1, "#FF0000"), new Point(97, 100, 0.0, 1, "#FF0000"),
new Point(306, 95, 0.0, 2, "#FF0000"), new Point(94, 95, 0.0, 2, "#FF0000"),
new Point(309, 90, 0.0, 3, "#FF0000"), new Point(91, 90, 0.0, 3, "#FF0000"),
new Point(312, 85, 0.0, 4, "#FF0000"), new Point(88, 85, 0.0, 4, "#FF0000"),
new Point(313, 80, 0.0, 3, "#FF0000"), new Point(87, 80, 0.0, 3, "#FF0000"),
new Point(315, 75, 0.0, 1, "#FF0000"), new Point(85, 75, 0.0, 1, "#FF0000"),
new Point(318, 70, 0.0, 3, "#FF0000"), new Point(82, 70, 0.0, 3, "#FF0000"),
new Point(320, 65, 0.0, 5, "#FF0000"), new Point(80, 65, 0.0, 5, "#FF0000"),
new Point(322, 60, 0.0, 6, "#FF0000"), new Point(78, 60, 0.0, 6, "#FF0000"),
new Point(323, 55, 0.0, 5, "#FF0000"), new Point(77, 55, 0.0, 5, "#FF0000"),
new Point(324, 50, 0.0, 4, "#FF0000"), new Point(76, 50, 0.0, 4, "#FF0000"),
new Point(325, 45, 0.0, 3, "#FF0000"), new Point(75, 45, 0.0, 3, "#FF0000"),
new Point(324, 40, 0.0, 2, "#FF0000"), new Point(76, 40, 0.0, 2, "#FF0000"),
new Point(322, 35, 0.0, 1, "#FF0000"), new Point(79, 35, 0.0, 1, "#FF0000"),
new Point(320, 30, 0.0, 2, "#FF0000"), new Point(81, 30, 0.0, 2, "#FF0000"),
new Point(317, 25, 0.0, 6, "#FF0000"), new Point(84, 25, 0.0, 6, "#FF0000"),
new Point(314, 20, 0.0, 2, "#FF0000"), new Point(87, 20, 0.0, 2, "#FF0000"),
new Point(310, 15, 0.0, 1, "#FF0000"), new Point(91, 15, 0.0, 1, "#FF0000"),
new Point(306, 10, 0.0, 2, "#FF0000"), new Point(95, 10, 0.0, 2, "#FF0000"),
new Point(301, 5, 0.0, 3, "#FF0000"), new Point(97, 5, 0.0, 3, "#FF0000"),
new Point(296, 0, 0.0, 4, "#FF0000"), new Point(102, 0, 0.0, 4, "#FF0000"),
new Point(290, -5, 0.0, 5, "#FF0000"), new Point(108, -5, 0.0, 5, "#FF0000"),
new Point(284, -7, 0.0, 3, "#FF0000"), new Point(114, -7, 0.0, 3, "#FF0000"),
new Point(278, -9, 0.0, 1, "#FF0000"), new Point(120, -9, 0.0, 1, "#FF0000"),
new Point(272, -11, 0.0, 3, "#FF0000"), new Point(126, -11, 0.0, 3, "#FF0000"),
new Point(265, -11, 0.0, 1, "#FF0000"), new Point(133, -11, 0.0, 1, "#FF0000"),
new Point(254, -9, 0.0, 5, "#FF0000"), new Point(144, -9, 0.0, 5, "#FF0000"), 
new Point(245, -7, 0.0, 4, "#FF0000"), new Point(153, -7, 0.0, 4, "#FF0000"), 
new Point(241, -5, 0.0, 4, "#FF0000"), new Point(157, -5, 0.0, 4, "#FF0000"), 
new Point(236, 0, 0.0, 3, "#FF0000"), new Point(162, 0, 0.0, 3, "#FF0000"), 
new Point(229, 5, 0.0, 2, "#FF0000"), new Point(169, 5, 0.0, 2, "#FF0000"), 
new Point(222, 10, 0.0, 1, "#FF0000"), new Point(176, 10, 0.0, 1, "#FF0000"), 
new Point(218, 15, 0.0, 2, "#FF0000"), new Point(180, 15, 0.0, 2, "#FF0000"), 
new Point(214, 20, 0.0, 3, "#FF0000"), new Point(184, 20, 0.0, 3, "#FF0000"), 
new Point(211, 25, 0.0, 4, "#FF0000"), new Point(187, 25, 0.0, 4, "#FF0000"), 
new Point(208, 30, 0.0, 5, "#FF0000"), new Point(191, 30, 0.0, 5, "#FF0000"), 
new Point(206, 35, 0.0, 4, "#FF0000"), new Point(193, 35, 0.0, 4, "#FF0000"), 
new Point(204, 40, 0.0, 3, "#FF0000"), new Point(195, 40, 0.0, 3, "#FF0000"), 
new Point(202, 45, 0.0, 2, "#FF0000"), new Point(197, 45, 0.0, 2, "#FF0000"), 
new Point(200, 50, 0.0, 1, "#FF0000")];

gLength = g.length;
for (var i = 0; i < gLength; i++) {
g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;

g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
};

pointCollection = new PointCollection();
pointCollection.points = g;

initEventListeners();
timeout();
};

function initEventListeners() {
$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

canvas.get(0).ontouchmove = function(e) {
e.preventDefault();
onTouchMove(e);
};

canvas.get(0).ontouchstart = function(e) {
e.preventDefault();
};
};

function updateCanvasDimensions() {
canvas.attr({height: $(window).height(), width: $(window).width()});
canvasWidth = canvas.width();
canvasHeight = canvas.height();

draw();
};

function onMove(e) {
if (pointCollection)
pointCollection.mousePos.set(e.pageX, e.pageY);
};

function onTouchMove(e) {
if (pointCollection)
pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
};

function timeout() {
draw();
update();

setTimeout(function() { timeout() }, 30);
};

function draw() {
var tmpCanvas = canvas.get(0);

if (tmpCanvas.getContext == null) {
return;
};

ctx = tmpCanvas.getContext('2d');
ctx.clearRect(0, 0, canvasWidth, canvasHeight);

if (pointCollection)
pointCollection.draw();
};

function update() {
if (pointCollection)
pointCollection.update();
};

function Vector(x, y, z) {
this.x = x;
this.y = y;
this.z = z;
 
this.addX = function(x) {
this.x += x;
};

this.addY = function(y) {
this.y += y;
};

this.addZ = function(z) {
this.z += z;
};
 
this.set = function(x, y, z) {
this.x = x;
this.y = y;
this.z = z;
};
};

function PointCollection() {
this.mousePos = new Vector(0, 0);
this.points = new Array();

this.newPoint = function(x, y, z) {
var point = new Point(x, y, z);
this.points.push(point);
return point;
};

this.update = function() {
var pointsLength = this.points.length;

for (var i = 0; i < pointsLength; i++) {
var point = this.points[i];

if (point == null)
continue;

var dx = this.mousePos.x - point.curPos.x;
var dy = this.mousePos.y - point.curPos.y;
var dd = (dx * dx) + (dy * dy);
var d = Math.sqrt(dd);

if (d < 150) {
point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
} else {
point.targetPos.x = point.originalPos.x;
point.targetPos.y = point.originalPos.y;
};

point.update();
};
};

this.draw = function() {
var pointsLength = this.points.length;
for (var i = 0; i < pointsLength; i++) {
var point = this.points[i];

if (point == null)
continue;

point.draw();
};
};
};

function Point(x, y, z, size, colour) {
this.colour = colour;
this.curPos = new Vector(x, y, z);
this.friction = 0.8;
this.originalPos = new Vector(x, y, z);
this.radius = size;
this.size = size;
this.springStrength = 0.1;
this.targetPos = new Vector(x, y, z);
this.velocity = new Vector(0.0, 0.0, 0.0);

this.update = function() {
var dx = this.targetPos.x - this.curPos.x;
var ax = dx * this.springStrength;
this.velocity.x += ax;
this.velocity.x *= this.friction;
this.curPos.x += this.velocity.x;

var dy = this.targetPos.y - this.curPos.y;
var ay = dy * this.springStrength;
this.velocity.y += ay;
this.velocity.y *= this.friction;
this.curPos.y += this.velocity.y;

var dox = this.originalPos.x - this.curPos.x;
var doy = this.originalPos.y - this.curPos.y;
var dd = (dox * dox) + (doy * doy);
var d = Math.sqrt(dd);

this.targetPos.z = d/100 + 1;
var dz = this.targetPos.z - this.curPos.z;
var az = dz * this.springStrength;
this.velocity.z += az;
this.velocity.z *= this.friction;
this.curPos.z += this.velocity.z;

this.radius = this.size*this.curPos.z;
if (this.radius < 1) this.radius = 1;
};

this.draw = function() {
ctx.fillStyle = this.colour;
ctx.beginPath();
ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
ctx.fill();
};
};

init();
});
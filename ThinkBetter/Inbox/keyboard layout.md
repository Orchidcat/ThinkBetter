
include <BOSL2/std.scad>

$fn=100;
$fs=60;


layoutPoints = [[0,0],[0,131.5],
                [173,131.5],[173,131.5-6.8],[268,131.5-6.8],[268,-6.8],
                [268-54,-6.8],[268-54,0],[268-54-74,0],[268-54-74,-25],[268-54-74-61,-25],[268-54-74-61,0]];


//polygon(layoutPoints);
offset_stroke(layoutPoints,closed=true,width = 1);

basePoints = [[-5,0],[-5,141.5],[273,141.5],[273,-25],[-5,-25]];


color("green") offset_stroke(basePoints,closed=true,width = 1);

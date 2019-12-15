/*
* @Author: GYT
* @Date:   2019-12-13 12:14:02
* @Last Modified by:   GYT
* @Last Modified time: 2019-12-15 14:20:33
*/
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var scroll = document.getElementById('scroll')
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;

var isMoving = false;
function next(){
	index++;
	animate(slider,{left:-1200*index},function(){
		if(index === 6){
			slider.style.left = "-1200px";
			index = 1;

			}
		});
	navSearch();
	}

function prev(){
	index--;
	animate(slider,{left:-1200*index},function(){
		if(index === 0){
			slider.style.left = "-6000px";
			index = 5;

			}
		});
	navSearch();
	}


var roll = animate2(scroll,{right:-600},{right:890});

var timer = setInterval(next,3000);

box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}

box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}

right.onclick = next;
left.onclick = prev;

for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].index=i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		animate(slider,{left:-1200*index});
		navSearch();
	}
	
}

function navSearch(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className = ' ';
	}
	if(index >= 6){
		oNavlist[0].className = 'active';
		index = 6;
	}
	else if(index <= 0){
		oNavlist[4].className = 'active';
		index = 0;
	}
	else{
		oNavlist[index-1].className = 'active';
	}
	
}



function animate2(obj,json,json2){


	obj.timer = setInterval(function(){

		for(var attr in json){
			var now = 0;
			var first = parseInt(json[attr]);
			var end = parseInt(json2[attr]);

			now = parseInt(getStyle(obj,attr));


			var cur = now + 2;

			obj.style[attr] = cur + 'px';

			if(cur > end){
				obj.style[attr] = first + 'px';
			}
		}
	}, 30)
}



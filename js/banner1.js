window.onload=function () {
	let banner=document.querySelector(".banner");
	let imgbox=document.querySelectorAll(".imgbox li");
	let dian=document.querySelectorAll(".btn li");
	let turnr=document.querySelector(".bannerturn1");
	let turnl=document.querySelector(".bannerturn");

	// console.log(banner,imgbox,dian,turnl,turnr)
	let current=0;
	let next=0;
	
	
	setInterval(move,2000);

	function move(){
			let boxwidth=parseInt(getComputedStyle(imgbox[0],null).width);

		// imgbox[0].style.width=0;
		next++;
		if(next>imgbox.length-1){
			next=0;
		}


		dian[current].classList.remove("hot");
		dian[next].classList.add("hot");
		imgbox[next].style.left=boxwidth+'px';
		animate(imgbox[current],{left:-boxwidth},Tween.Quad.easeInOut);
		animate(imgbox[next],{left:0})
		current=next;
	}

	function moveL(){
		next--;

		if(next<0){
			next=imgbox.length-1;
		}
		dian[current].classList.remove("hot");
		dian[next].classList.add("hot");
		imgbox[next].style.width=-boxwidth+"px";
		animate(imgbox[current],{left:boxwidth});
		animate(imgbox[next],{left:0});
		current=next
	}
	}

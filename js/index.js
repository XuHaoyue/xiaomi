window.onload=function () {
	let shoppingbox=document.getElementsByClassName("shoppingbox")[0];
	let car=document.getElementsByClassName("car")[0];
	car.onmouseenter=function(){
		shoppingbox.style.height="98px";
		shoppingbox.style.boxShadow="0 0 2px 2px #bbb";
	}
	car.onmouseleave=function(){
		shoppingbox.style.height="0"
		shoppingbox.style.boxShadow="none"

	}

	let lnav=document.getElementsByClassName("lnav")[0]
	let aa=lnav.getElementsByTagName("a")
 	let xialameun=lnav.getElementsByClassName("xialameun")
	// console.log(lnav,aa,xialameun)
	for(let i=0;i<xialameun.length;i++){
		aa[i].onmouseenter=function(){
			
				xialameun[i].style.height="229px";
				xialameun[i].style.boxShadow="0 0 2px 2px #bbb";
			
		
	}
	aa[i].onmouseleave=function(){
		xialameun[i].style.height="0";
		xialameun[i].style.boxShadow="none";
	}
	}
	
	




	let aside=document.getElementsByClassName("aside")[0]
	// console.log(aside);
	let lis=aside.getElementsByTagName("li")
	let asidebox=document.getElementsByClassName("asidebox");
	 // console.log(aside,asidebox,lis);
	for(let i=0;i<asidebox.length;i++){
			lis[i].onmouseenter=function(){
				for(let j=0;j<asidebox.length;j++){
					asidebox[j].style.display="none";
				}

				asidebox[i].style.display="block";
				}
				lis[i].onmouseleave=function(){

			asidebox[i].style.display="none";
		}
		}
	
	function xxl(jiadian){

		let dgsright=jiadian.getElementsByClassName("dgsright")[0]
		let uls=jiadian.getElementsByTagName("ul")
		let a=dgsright.getElementsByTagName("a")
		// console.log(dgsright,uls,a)
		for(let i=0;i<a.length;i++){
			a[i].onmouseenter=function(){
				for(let j=0;j<a.length;j++){
					uls[j].style.display="none"
				}
				uls[i].style.display="block"
			}
		}
		
	}
	let jiadian=document.getElementsByClassName("dg")[0];
	xxl(jiadian);
	let jiadian1=document.getElementsByClassName("dg")[1];
	// console.log(jiadian1)
	xxl(jiadian1);
	let jiadian2=document.getElementsByClassName("dg")[2];
	// console.log(jiadian1)
	xxl(jiadian2);
	let jiadian3=document.getElementsByClassName("dg")[3];
	// console.log(jiadian1)
	xxl(jiadian3);
	let jiadian4=document.getElementsByClassName("dg")[4];
	// console.log(jiadian1)
	xxl(jiadian4);


//轮播图效果
    let banner=document.querySelector(".banner");
	let imgbox=document.querySelectorAll(".imgbox li");
	let dian=document.querySelectorAll(".btn li");
	let turnr=document.querySelector(".bannerturn1");
	let turnl=document.querySelector(".bannerturn");
	let boxwidth=parseInt(getComputedStyle(imgbox[0],null).width);
	// console.log(banner,imgbox,dian,turnl,turnr)
	let current=0;
	let next=0;
	
	
	let t=setInterval(move,2000);

	function move(){

		// imgbox[0].style.width=0;
		next++;
		if(next==imgbox.length){
			next=0;
		}


		dian[current].classList.remove("hot");
		dian[next].classList.add("hot");
		imgbox[next].style.left=boxwidth+'px';
		animate(imgbox[current],{left:-boxwidth});
		animate(imgbox[next],{left:0},function(){
			flag=true;	
		})
		current=next;
	}

	function moveL(){
		next--;

		if(next<0){
			next=imgbox.length-1;
		}
		dian[current].classList.remove("hot");
		dian[next].classList.add("hot");
		imgbox[next].style.left=-boxwidth+"px";
		animate(imgbox[current],{left:boxwidth});
		animate(imgbox[next],{left:0},function(){
			flag=true;	
		})
		current=next
		
	}
//点击向左
	
		// console.log("bannerturn")
		turnl.onclick=function(){
			if(!flag){
				return
			}
			flag=false;
			moveL();
		}
//点击向右

	// console.log("bannerturn1")
	turnr.onclick=function(){
		if(flag==false){
			return;
		}
		flag=false;
		move();
	}
	//鼠标移入停止
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	//鼠标移出继续
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
    //点击小点
	dian.forEach(function(e,index){
		e.onclick=function(){
			dian[current].classList.remove('hot');
			dian[index].classList.add('hot');
			if(current>index){
				imgbox[index].style.left=-boxwidth+"px";
				animate(imgbox[current],{left:boxwidth});
				animate(imgbox[index],{left:0});
			}
			if(current<index){
				imgbox[index].style.left=boxwidth+"px";
				animate(imgbox[current],{left:-boxwidth});
				animate(imgbox[index],{left:0});
			}
			current=index
		}
	})
//明星单品
	let turnleft=document.querySelector('.turnleft');
	let turnright=document.querySelector('.turnright');
	let shouji=document.querySelector('.shouji')
	let lis3=document.querySelector('.shouji li');
	let yikuan=lis3.offsetWidth;
	// console.log(turnleft,turnright,yikuan)
	//向左
	turnleft.onclick=function(){
		shouji.style.transform=`translateX(${-yikuan}px)`
	}
	turnright.onclick=function(){
		shouji.style.transform=`translateX(0)`
	}

	function aabb(hezi){
	let lis2=hezi.querySelectorAll('.hezi li');
	let btn01=hezi.querySelector('.btn01')
	let dot=btn01.querySelectorAll('.btn01 .dot');
	let sbrnL=hezi.querySelector('.hezi .brnL');
	let sbrnR=hezi.querySelector('.hezi .brnR');
	let liwidth=parseInt(getComputedStyle(lis2[0],null).width);
	// console.log(sbrnL,sbrnR,lis2,liwidth,dot)
	let flag=true;
	let j=0;
	let k=0;
	dot[0].classList.add('hot1')
	 sbrnL.onclick=function(){
	 	if(!flag){
	 		return
	 	}
	 	if(k==lis2.length-1){
	 		k=lis2.length-1;
	 		return;
	 	}
	 	
	 	flag=false;
	 	smoveL();
	 }
	 sbrnR.onclick=function(){
	 	if(!flag){
	 		return
	 	}
	 	if(k==0){
	 		k=0;
	 		return;
	 	}
	 	flag=false;
	 	smoveR();
	 }

	function smoveL(){
		k++;
	 	if(k>lis2.length-1){
	 		k=0;
	 	}
	 	dot[j].classList.remove('hot1');
	 	dot[k].classList.add('hot1')
	 	lis2[k].style.left=liwidth+"px";
		animate(lis2[j],{left:-liwidth});
		animate(lis2[k],{left:0},function(){
			flag=true;	
		})
		j=k;
	}

	function smoveR(){
		k--;
	 	if(k<0){
	 		k=lis2.length-1
	 	}
	 	dot[j].classList.remove('hot1');
	 	dot[k].classList.add('hot1')
	 	lis2[k].style.left=-liwidth+'px';
	 	animate(lis2[j],{left:liwidth});
	 	animate(lis2[k],{left:0},function(){
	 		flag=true;
	 	})
	 	j=k;

	}
	//点击点
	dot.forEach(function(e,index){
		e.onclick=function(){
			dot[j].classList.remove('hot1');
			dot[index].classList.add('hot1')
			if(j>index){
				lis2[index].style.left=-liwidth+"px";
				animate(lis2[j],{left:liwidth});
				animate(lis2[index],{left:0})
			}
			if(j<index){
				lis2[index].style.left=liwidth+"px";
				animate(lis2[j],{left:-liwidth});
	 			animate(lis2[index],{left:0})
			}
			j=index;
		}
	})
	}

	let hezi=document.querySelectorAll('.hezi')[0];
	aabb(hezi);
	let hezi1=document.querySelectorAll('.hezi')[1];
	aabb(hezi1);
	let hezi2=document.querySelectorAll('.hezi')[2];
	aabb(hezi2);
	let hezi3=document.querySelectorAll('.hezi')[3];
	aabb(hezi3);
}			


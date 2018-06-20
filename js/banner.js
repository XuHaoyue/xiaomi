window.onload=function () {
	let dian=document.querySelectorAll(".btn li");
	// console.log(dian)
	let lis=document.querySelectorAll(".imgbox li");
	// console.log(lis)
	// 当前图片下biao
	let index=0;
	setInterval(move,2000);
	// 初始化
	lis[0].style.zIndex=10;
	dian[0].className="hot"
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(e,index,obj){
			e.style.zIndex=5;
		})
		
		dian.forEach(function(element,index,obj){
			element.className="";
		})
		lis[index].style.zIndex=10;
		dian[index].className="hot";
	}
}
window.onload=function(){
	 var header=document.querySelector('.header');
	 var shuaione=document.querySelectorAll('.ccc')[1];
	 var shuaitwo=document.querySelectorAll('.ccc')[2];
       window.onscroll=function(){
       	var t=document.body.scrollTop||document.documentElement.scrollTop;
       	// console.log(t)
       	if(t>=70){
       		header.style.transition = "all 0.3s";
       		shuaione.style.transition = "all 1s";
       		shuaitwo.style.transition = "all 1s";
       		header.style.backgroundColor = "#FF8400";
       		shuaione.style.backgroundColor = "#FF8400";
       		shuaitwo.style.backgroundColor = "#FF8400";
       	}else{
       		header.style.transition = "all 0.5s";
       		shuaione.style.transition = "all 0.1s";
       		shuaitwo.style.transition = "all 0.1s";
       		header.style.backgroundColor = "";
       		shuaione.style.backgroundColor = "";
       		shuaitwo.style.backgroundColor = "";
       	}
       }
}

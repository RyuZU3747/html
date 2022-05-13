window.onload = function(){
	var today = new Date();
	var now = "오늘은 "+today.getFullYear()+"년 "+(today.getMonth()+1)+"월 "+today.getDate()+"일 입니다";
	document.getElementById('date').innerHTML = now;
}

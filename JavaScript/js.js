function myFunction(){
	x = document.getElementById("demo");
	x.innerHTML="Hello JAVASCRIPT";
}
function myFunction(a,b,c){
	a.innerHTML="你好世界！";
	b.innerHTML="你最近怎么样?";
	c.innerHTML="已经改变了";
}
function changeStyle(){
	element = document.getElementById("demo");
	element.style.color="#FF0000";
}
function changeImage(){
	element=document.getElementById('myimage')
	if (element.src.match("bulbon")){
		element.src="../i/pic_bulboff.gif";
	}else{
		element.src="../i/pic_bulbon.gif";
	}
}	
function validateInput(){
	var x=document.getElementById("demo2").value;
	if(x==""){
		alert("不能为空");
		return;
	}else if(isNaN(x)){
		alert("不是数字");
		return;
	}
	document.getElementById("demo2").value=square(x);
	
}
//返回x的平方
function square(x){
	return x*x;
}
/*달력을 구성하는 하나의 날짜 사각형을 정의한다*/
class Cell{
	constructor(container,width,height,bg,text){
		this.container=container;
		this.width=width;
		this.height=height;
		this.bg=bg;
		this.text=text;

		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border=1+"px solid blue";
		this.div.style.background=this.bg;
		this.div.innerText=this.text;
		this.div.style.float="left";
		this.div.style.color="#fff";
		this.div.style.fontSize=20+"px";

		this.container.appendChild(this.div);
	}
}
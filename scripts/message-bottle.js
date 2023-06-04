const bottle = document.querySelector('.bottle');
const msg = document.querySelector('.message');
bottle.onclick = () => {
    msg.classList.add('message-top');
    bottle.classList.add('bottle-down');
}

msg.onclick = () => {
    msg.style.top = "5%";
    msg.style.transform = "rotate(0deg)";
    msg.classList.add('message-open');
}

let txt = "Click on the bottle to see what's inside...";
const overlay = document.querySelector(".overlay");
let para = document.getElementById("text");
let i = 0;
document.body.addEventListener(typeWriter(), load);
function typeWriter(){
	overlay.style.display = "block";
	if(i < txt.length){
		para.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, 50);
	}
	setTimeout(function(){overlay.style.display = "none";}, 10000);
}
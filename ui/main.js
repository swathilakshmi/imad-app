console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new Value"
var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
 marginLeft=marginLeft+10
 img.style.marginLeft=marginLeft+'px';
}
madi.onclick = function (){
    var interval=setInterval(moveRight,100)
  madi.style.marginLeft ='100px';  
};
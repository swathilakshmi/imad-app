console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new Value";
var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
 marginLeft=marginLeft+1;
 img.style.marginLeft=marginLeft+'px';
}
madi.onclick = function (){
    var interval=setInterval(moveRight,50);
    madi.style.marginLeft ='100px';  
};
var nameinput=document.getElementById('name')
var name=nameinput.value;
var submit=document.getElementById('submit_btn')
submit.onclick=function(){
    
};


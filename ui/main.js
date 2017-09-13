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
var nameInput=document.getElementById('name');
var name_1=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['name1','name2','name3']
    var list='';
    for(var i3=0,i3<names.length;i3++){
        list+='<li>'+names[i3]+'</li>';
    }
    var ul=document.getElementById('namelist')
    ul.innerHTML=list;
};


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
var name5=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
             if(request.state===200){
                 var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i3=0;i3<names.length;i3++){
                    list+='<li>' + names[i3] + '</li>';
                    }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            
                }
            }
    };
   
   

request.open('GET','http://sasivaya1231996.imad.hasura-app.io/submit-name?name=' + name5,true);
request.send(null);
};
/**
 * Created by chenxudong on 2018/7/28.
 */


function getElement(id) {
    
    return document.getElementById(id)
}

function getScroll(){
  
  return{
   left:window.pageXoffset || document.documentElement.scrollLeft 
   || document.body.scrollLeft,
   
   top:window.pageYoffset || document.documentElement.scrollLeft 
   || document.body.scrollLeft || 0

  };

}

function bAnimate(element,target){
clearInterval(element.timeId);
element.timeId=setInterval(function(){
  var current=element.offsetLeft;
  //移动步数
  var step=(target-current)/10;
  step = step>0?Math.ceil(step):Math.floor(step);  

      current+=step;
      element.style.left = current+"px";
      if (current==target) 
       {
      	clearInterval(element.timeId);
      }

},20);
}


 function animate(element,target) {
        clearInterval(element.timeId);
        element.timeId=setInterval(function () {
            var current=element.offsetLeft;
            var step=10;
            step=current<target?step:-step;
            current+=step;

            if (Math.abs(target-current)>Math.abs(step)){
                element.style.left=current+"px";
            }else{
                element.style.left=target+"px";
                clearInterval(element.timeId);

            }
        },10);
    }
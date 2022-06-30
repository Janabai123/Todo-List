var input=document.getElementsByClassName('in')[0];
var add=document.getElementsByClassName('add')[0];
var task=document.getElementsByClassName('task')[0];    
function addToDo(){
    var item=document.createElement('div');
    item.innerHTML='<i class="fas fa-check-circle"></i>'+input.value;
   item.classList.add('listitem');
    task.appendChild(item);
    input.value="";
    
item.addEventListener('click',function(){
   
    item.remove();
})
    }

add.addEventListener('click',addToDo)

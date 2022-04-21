
let btn = document.getElementById('Icon');
let sidebar = document.getElementById('SideBar');
let search = document.getElementById('search');
let input = document.getElementById('input');

btn.addEventListener('click',function(){
   
sidebar.classList.toggle('side-bar-responsive');

  

})


search.addEventListener('click',function(){
   
    input.classList.toggle('side-bar-responsive');
    
      
    
    })

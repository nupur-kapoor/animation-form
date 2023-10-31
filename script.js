const a = document.querySelector("#menu");
const background = document.querySelector("#background");
const sidenav = document.querySelector('#sidenav');
const closee = document.querySelector('#cls');
{
   closee.addEventListener('click' , function()
   {
      background.style.transform = 'translateX(0px) scale(1)';
      background.style.filter = 'blur(0px)';
   // sidenav.style.display = 'none';
      sidenav.style.left = '-100%';
   
   })
}



a.addEventListener('click' , function()
{
   background.style.transform = 'translateX(200px) scale(.9) skewX(-6deg)';
   background.style.filter = 'blur(1.5px)';
   sidenav.style.left = '2%';



})
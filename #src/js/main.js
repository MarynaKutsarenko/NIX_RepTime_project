(function () {
   const menuBurger = document.querySelector('.menu_burger');
   const menuItems = document.querySelector('.menu_items');
   const menuItem = document.querySelector('.menu_item');

   menuBurger.addEventListener('click', function () {
      if (this.classList.contains('menu_burger-active')) {
         this.classList.remove('menu_burger-active');
         menuItems.style.display = 'none';
      } else {
         this.classList.add('menu_burger-active');
         menuItems.style.display = 'block';
      }
   })
}());


(function () {
   const checkbox = document.querySelector('.checkbox');
   const blockThree = document.querySelector('.block_three');
   const blockFirst = document.querySelector('.block_first');
   const blockSecond = document.querySelector('.block_second');

   checkbox.addEventListener('click', function () {
      if (this.checked) {
         blockThree.style.display = 'block';
         blockFirst.classList.add('scroll');
         blockSecond.classList.add('cut_height');
      } else {
         blockThree.style.display = 'none';
         blockFirst.classList.remove('scroll');
         blockSecond.classList.remove('cut_height');
      }
   })
}())

window.addEventListener("resize", function () {
   const blockSecond = document.querySelector('.block_second');
   
   if (innerWidth <= 576) {
      blockSecond.classList.add('scroll');
   } else {
      blockSecond.classList.remove('scroll');
   }
}, false);


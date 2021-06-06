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




// let checkbox = document.querySelector('.filter-checkbox');

// checkbox.addEventListener('change', function () {
//    !checkbox.checked ? blockEfficiency.style.display = 'none' : blockEfficiency.style.display = 'block';
// })
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

// let checkbox = document.querySelector('.filter-checkbox');

// checkbox.addEventListener('change', function () {
//    !checkbox.checked ? blockEfficiency.style.display = 'none' : blockEfficiency.style.display = 'block';
// })
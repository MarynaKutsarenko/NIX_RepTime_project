// let checkbox = document.querySelector('.filter-checkbox');

// checkbox.addEventListener('change', function () {
//    !checkbox.checked ? blockEfficiency.style.display = 'none' : blockEfficiency.style.display = 'block';
// })

(function () {
   const menu_burger = document.querySelector('.menu_burger');

   menu_burger.addEventListener('click', () => {
      menu_burger.classList.toggle('menu_burger-active');
      })
}());
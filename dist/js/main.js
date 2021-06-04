alert('hi');
let checkbox = document.querySelector('.filter-checkbox');

checkbox.addEventListener('change', function () {
   !checkbox.checked ? blockEfficiency.style.display = 'none' : blockEfficiency.style.display = 'block';
})
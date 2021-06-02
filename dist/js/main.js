
let checkbox = document.querySelector('.filter-checkbox');
let blockEfficiency = document.querySelector('.block_efficiency');
let blockInformation = document.querySelector('.block_information');
let blockTime = document.querySelector('.block_time');

checkbox.addEventListener('change', function () {
   !checkbox.checked ? blockEfficiency.style.display = 'none' : blockEfficiency.style.display = 'block';
})


document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const navbarToggle = document.getElementById('navbar-toggle');
//     const navbarMenu = document.getElementById('navbar-menu');

//     navbarToggle.addEventListener('click', function () {
//         navbarMenu.classList.toggle('active');
//     });
// });



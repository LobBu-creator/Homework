const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'block';
        }
    });

    link.addEventListener('mouseout', function () {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
});
const trigger = document.querySelector('.menu-trigger'),
    addclass = document.querySelector('.site');
trigger.addEventListener('click', function () {
    addclass.classList.toggle('showmenu');
    document.body.classList.toggle('overflowme');
})

//show sub menu
const submenu = document.querySelectorAll('.has-child > a');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
    submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
    if (this.parentNode.classList != 'expand') {
        this.parentNode.classList.toggle('expand');
    }
}

//fixed header
const nav = document.querySelector('.site > header');
function fixednav() {
    //will add class .fixed once scroll at 1000 pixel
    if (window.scrollY > 1000) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixednav);
let MenuIcon = document.querySelector('#Menu-Icon');
let NavBar = document.querySelector('.Nav-Bar');

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle('bx-x')
    NavBar.classList.toggle('active');
}

const toggleThemeBtn = document.querySelector('.header__theme-button');
const path = document.querySelectorAll('.path-black');
const stroke = document.querySelectorAll('.stroke-black');

document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
    let newColor = 'white';

    if(themeKey === 'dark'){
        document.documentElement.classList.add('darkTheme');
        newColor = 'white';
    } else {
        document.documentElement.classList.remove('darkTheme');
        newColor = 'black';
    }
    
    path.forEach(p => {
        p.setAttribute('fill', newColor);
    });
    stroke.forEach(s => {
        s.setAttribute('stroke', newColor);
    });    

}


toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme');
    let newColor = 'white';
    
    if(document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
        newColor = 'white';
    } else {
        localStorage.setItem('theme', 'light');
        newColor = 'black';

    }
    
    path.forEach(p => {
        p.setAttribute('fill', newColor);
    });
    stroke.forEach(s => {
        s.setAttribute('stroke', newColor);
    });    

});
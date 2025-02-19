
/*----scrip para cambiar de color blanco y negro a la pagina------*/
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent='Modo Claro';
    }
    else {
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleText.textContent = "Modo Oscuro";
    }
});

/*----scrip para cambiar de colorres------*/

const toggleColors = document.getElementById('toggle-colors');

const rootStyle = document.documentElement.style;

toggleColors.addEventListener('click', (e)=>{
    rootStyle.setProperty("--primary-color", e.target.dataset.color);
})
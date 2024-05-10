const body = document.getElementById('body');
const darkMode = document.getElementById('darkMode');
const btnDarkMode = document.getElementById('btnDarkMode');

function renderStyleDarkMode(){
    body.style.backgroundColor = '#02000E'
    body.style.color = 'white'
    btnDarkMode.innerHTML = '<i class="bi bi-brightness-low-fill"></i>'
    btnDarkMode.className = 'btn text-warning h5'
    //body.style.color = 'black!important';
    console.log('click')
}

darkMode.addEventListener('click', renderStyleDarkMode);
let toggle = document.getElementById('toggle')

function renderDarkMode(event){
    let checked = event.target.checked;
    document.body.classList.toggle('dark')


    console.log('darkmode')
}



toggle.addEventListener('change', renderDarkMode);


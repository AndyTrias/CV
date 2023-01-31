document.addEventListener('DOMContentLoaded', function() {
    let icon = document.querySelector('#toggle-icon');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let info = document.querySelector('#info');
    
    document.querySelector('button').addEventListener('click', function () {
        icon.classList.toggle('fa-sun')
        icon.classList.toggle('fa-moon')
        main.classList.toggle('dark-body')
        header.classList.toggle('dark-header')
        info.classList.toggle('dark-info')
    })
})
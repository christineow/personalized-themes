let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode 
        console.log('option clicked: ', mode)
        setTheme(mode)
    })
}


function setTheme(mode) {

    if(mode == 'light') {
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'dark') {
        document.getElementById('theme-style').href = 'dark.css'
    }
    if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'pink') {
        document.getElementById('theme-style').href = 'pink.css'
    }
    if(mode == 'brown') {
        document.getElementById('theme-style').href = 'brown.css'
    }

    localStorage.setItem('theme', mode)
}
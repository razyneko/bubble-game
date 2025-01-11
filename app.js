var clutter = ""

for (let i = 0; i < 126; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10) + 1}</div>`
}


const panelBottom = document.querySelector('#panel-bottom')

panelBottom.innerHTML = clutter
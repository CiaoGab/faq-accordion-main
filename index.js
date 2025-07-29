const button1 = document.getElementById('accordion-toggle1')
const button2 = document.getElementById('accordion-toggle2')
const button3 = document.getElementById('accordion-toggle3')
const button4 = document.getElementById('accordion-toggle4')

const text1 = document.getElementById('toggle-text1')
const text2 = document.getElementById('toggle-text2')
const text3 = document.getElementById('toggle-text3')
const text4 = document.getElementById('toggle-text4')

const image1 = 'assets/images/icon-plus.svg'
const image2 = 'assets/images/icon-minus.svg'

button1.addEventListener('click', () => {
    if (getComputedStyle(text1).display === 'none') {
        text1.style.display = 'block'
        button1.src = image2
    } else {
        text1.style.display = 'none'
        button1.src = image1
    }
})

button2.addEventListener('click', () => {
    if (getComputedStyle(text2).display === 'none') {
        text2.style.display = 'block'
        button2.src = image2
    } else {
        text2.style.display = 'none'
        button2.src = image1
    }
})

button3.addEventListener('click', () => {
    if (getComputedStyle(text3).display === 'none') {
        text3.style.display = 'block'
        button3.src = image2
    } else {
        text3.style.display = 'none'
        button3.src = image1
    }
})

button4.addEventListener('click', () => {
    if (getComputedStyle(text4).display === 'none') {
        text4.style.display = 'block'
        button4.src = image2
    } else {
        text4.style.display = 'none'
        button4.src = image1
    }
})

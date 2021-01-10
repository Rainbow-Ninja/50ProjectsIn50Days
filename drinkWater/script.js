const smallCups = document.querySelectorAll('.cup-small')
const litres = document.getElementById('litres')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    // if(smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')) {
    //     idx--
    // }
    //these two things so the same thing! Just fancier way of writing it I guess
    //checking if the one I'm clicking is full and the next one is empty, then toggle the one i just clicked on
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}
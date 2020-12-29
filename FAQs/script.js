const toggles = document.querySelectorAll('.faq-toggle');

//My Solution...... (totally works)

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         if(toggle.parentNode.classList.contains('active')){
//             toggle.parentNode.classList.remove('active');
//         } else {
//             toggle.parentNode.classList.add('active');
//         }
//     })

// });

//Cleaner Solution....

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})

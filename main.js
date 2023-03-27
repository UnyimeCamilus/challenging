const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


const faqs = document.querySelectorAll('.faq')
    faqs.forEach(faq => {
        faq.addEventListener('click', () =>{
            faq.classList.toggle('open');


            const add = faq.querySelector('plus');
            if (add.className === "plus"){
                add.className === "minus"
            }
        } )
    })

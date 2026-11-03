const subjects = document.getElementsByClassName("card")
const subArray = Array.from(subjects)
let currentSub
subArray.forEach(el =>{
    el.addEventListener('click', ()=>{
       currentSub = el.querySelector('h2').textContent
       localStorage.setItem('subject', currentSub)
       console.log(currentSub)
       window.location.href = "subject.html"
    })
})

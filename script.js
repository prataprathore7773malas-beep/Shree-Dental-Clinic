// FAQ Accordion

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question =
item.querySelector(".faq-question");

question.addEventListener("click", () => {

const answer =
item.querySelector(".faq-answer");

if(answer.style.display === "block"){

answer.style.display = "none";

}else{

document
.querySelectorAll(".faq-answer")
.forEach(ans=>{
ans.style.display = "none";
});

answer.style.display = "block";

}

});

});

// Smooth Scroll

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document
.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
});

});

});

// Navbar Shadow

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.boxShadow = "none";

}

});

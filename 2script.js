// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});

// =============================
// TYPING EFFECT
// =============================

const roles = [
    "Computer Science Student",
    "Full Stack Web Developer",
    "Software Engineer",
    "Programming Content Creator"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const roleText = document.querySelector(".hero-text h2");

function typingEffect(){

    if(!roleText) return;

    if(typing){

        roleText.innerHTML = roles[roleIndex].substring(0,charIndex++);

        if(charIndex > roles[roleIndex].length){

            typing = false;

            setTimeout(typingEffect,1200);

            return;
        }

    }

    else{

        roleText.innerHTML = roles[roleIndex].substring(0,charIndex--);

        if(charIndex < 0){

            typing = true;

            roleIndex++;

            if(roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typingEffect,100);

}

typingEffect();


// =============================
// ACTIVE MENU
// =============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.onscroll=()=>{

let top=window.scrollY;

sections.forEach(sec=>{

let offset=sec.offsetTop-150;
let height=sec.offsetHeight;
let id=sec.getAttribute("id");

if(top>=offset && top<offset+height){

navLinks.forEach(link=>{

link.classList.remove("active");

});

document.querySelector("nav a[href*="+id+"]").classList.add("active");

}

});

}


// =============================
// SCROLL TO TOP BUTTON
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00abf0";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 15px #00abf0";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}


// =============================
// FADE ANIMATION
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1s";

observer.observe(sec);

});


// =============================
// HERO BUTTON
// =============================

function start(){

document.querySelector("#projects").scrollIntoView({

behavior:"smooth"

});

}
// =========================
// DARK LIGHT MODE
// =========================

const themeBtn=document.querySelector(".theme-toggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});
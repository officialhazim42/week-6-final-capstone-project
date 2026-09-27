const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const form=document.getElementById("contactForm");
const msg=document.getElementById("formMsg");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  if(name){
    msg.textContent=`Thanks, ${name}! Your message has been validated successfully.`;
    form.reset();
  }
});

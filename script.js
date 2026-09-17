
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
 if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll(".faq button").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open")));
 const year=document.querySelectorAll(".year"); year.forEach(e=>e.textContent=new Date().getFullYear());
 const form=document.querySelector("#quoteForm");
 if(form) form.addEventListener("submit",e=>{
   e.preventDefault();
   const data=new FormData(form);
   const msg=`Hello Makaneta Holdings. I would like a quote.%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0AMessage: ${data.get("message")}`;
   window.open("https://wa.me/27665532616?text="+msg,"_blank");
 });
});

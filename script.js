const hams = document.querySelector(".hamberger");

const lists = document.querySelector("ul");

hams.addEventListener("click",()=>{
   lists.classList.toggle("hams_active");

   let cross = hams.firstElementChild;

   if(lists.classList.contains("hams_active")){

      cross.classList.replace("fa-bars","fa-xmark");
   }else{
      cross.classList.replace("fa-xmark","fa-bars");
   }
})
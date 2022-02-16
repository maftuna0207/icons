const icon1 = document.querySelector(".icon-2");
const icon2 = document.querySelector(".icon-1");

icon1.addEventListener("mouseover", (e) => {
  
  icon2.style.display = "block";
  icon1.style.display = "none";


});
icon2.addEventListener("mouseout",()=>{
    icon1.style.display= "block";
    icon2.style.display="none";
    



 
});


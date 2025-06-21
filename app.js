const img=document.querySelectorAll(".header-slider ul img");
const pre=document.querySelector(".ctrl-prev");
const next=document.querySelector(".ctrl-next");

next.addEventListener("click",()=>{
    changingSlide();
})




function changingSlide()
{
    for(let i=0;i<img.length;i++)
    {
        img[i].style.display="none";
    }
}
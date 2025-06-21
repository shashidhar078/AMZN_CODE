const img=document.querySelectorAll(".header-slider ul img");
const pre=document.querySelector(".ctrl-prev");
const next=document.querySelector(".ctrl-next");

let n=0;

function changingSlide(n)
{
    for(let i=0;i<img.length;i++)
    {
        img[i].style.display="none";
    }
    img[n].style.display="block";
}

next.addEventListener("click",()=>{
    if(n<img.length-1)
    {
        n++;
    }
    else 
    {
        n=0;
    }
    changingSlide(n);
})

pre.addEventListener("click",()=>{
    if(n>0)
    {
        n--;
    }
    else 
    {
        n=img.length-1;
    }
    changingSlide(n);
})
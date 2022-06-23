let bt1 = document.querySelector(".btn1");
// console.log(bt1)
let main = document.querySelector(".info")
// console.log(main)

bt1.addEventListener("click",()=>{
    main.style.opacity="0";
    alert("Thanks For Reading !!!")
})

let first = document.querySelector(".a-f");
// console.log(first);

first.addEventListener("click",()=>{
    location.reload();
})

let open =document.querySelector(".two-svg");
// console.log(open)
let close = document.querySelector(".three-svg");
// console.log(close)
let see = document.querySelector(".right");
// console.log(see)
let naav = document.querySelector("nav");
// console.log(naav)
let list = document.querySelector(".right .ul-list");
// console.log(list)
let toop = document.querySelector("#top");
// console.log(toop)



open.addEventListener("click",()=>{
    open.style.opacity="0";
    close.style.opacity="9";
    naav.style.height="53vh";
    see.style.height="100%";
    see.style.opacity="9";
    toop.style.transition="all 1s ease-in";
    toop.style.background="cyan";
})

close.addEventListener("click",()=>{
    close.style.opacity="0";
    open.style.opacity="9";
    naav.style.height="20vh";
    see.style.height="0%";
    see.style.opacity="0";
    toop.style.background="rgb(167, 164, 118)"
})
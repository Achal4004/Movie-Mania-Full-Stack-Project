function menu() {
    let element=document.querySelector(".header .links");
    if(element.style.left=="-254px" || element.style.left===""){
        element.style.left="0px";
        document.querySelector(".header .bars").classList.remove("fa-bars");
        document.querySelector(".header .bars").classList.add("fa-times");
    }
    else{
        element.style.left="-254px";
        document.querySelector(".header .bars").classList.remove("fa-times");
        document.querySelector(".header .bars").classList.add("fa-bars");
    }
}
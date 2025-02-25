"use strict";

//links
const sideLinkSEL = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)',);
sideLinkSEL.forEach((links)=>{
    const li = links.parentElement;
    links.addEventListener('click',()=>{
        sideLinkSEL.forEach((i)=>{
            i.parentElement.classList.remove("active");

        });
        li.classList.add('active');
    });
});


//sidebar
const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBarEL = document.querySelector('.sidebar');

const searchbtn = document.querySelector(".content nav form .form-input button");
const searchIcon = document.querySelector(".content nav form .form-input button .bx");
const searchForm = document.querySelector('.content nav form');

//menus
menuBar.addEventListener('click',()=>{
    sideBarEL.classList.toggle('close');
});
searchbtn.addEventListener('click',function(e){
    if(window.innerWidth < 576){
        e.preventDefault;
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchIcon.classList.replace("bx-search","bx-x");
        }else{
            searchIcon.classList.replace("bx-x", "bx-search");
        }
    }
});

//resize
window.addEventListener('resize',()=>{
    if(window.innerWidth<768){
        sideBarEL.classList.add("close");
    }else{
        sideBarEL.classList.remove("close");
    }
});

//dark and light mode
const darkEL = document.querySelector(".side-menu ul li a");
const darkIcon = document.querySelector(".side-menu ul li .bx.bx-moon");

darkEL.addEventListener("click",() =>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains('dark')){
        darkIcon.classList.replace('bx-moon', 'bx-sun');
    }else{
        darkIcon.classList.replace('bx-sun', 'bx-moon');
    }
});
let menuBtn = document.querySelector(".menu_btn");
let toggleBtn = document.querySelector(".fa-bars");
let menuBg = document.querySelector(".menu_bg");

let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo")
let dropdownLink = document.querySelector(".dropdown_link")
let dropdown = document.querySelector(".dropdown")

let menuIcon = document.querySelector('.menu .social_icon ')
let menuLink = document.querySelector('.menu_link')

function originPointerEvent(){
    if(window.innerWidth>992){
        menuLink.style.pointerEvents = 'auto'
        menuIcon.style.pointerEvents = 'auto'
    }else{
        menuLink.style.pointerEvents = ''
        menuIcon.style.pointerEvents = ''
    }
} 

originPointerEvent();

// 文件視圖（視窗）調整大小時會觸發 resize 事件
window.addEventListener('resize', originPointerEvent);
// .getPropertyValue('pointerEvents')
menuBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('fa-x')
    menu.classList.toggle('menu_toggle')
    menuBg.classList.toggle('menu_bg_show')
    // console.log(menuLink.style.pointerEvents)
    
    let pointerEventsValue = window.getComputedStyle(menuLink).getPropertyValue('pointer-events') 
    // 將判斷的值賦值給newPointerEvents
    let newPointerEvents = (pointerEventsValue === 'none') ? 'auto' : 'none'
    // 再同時賦值給menuLink和menuIcon
    menuLink.style.pointerEvents = newPointerEvents;
    menuIcon.style.pointerEvents = newPointerEvents;
    


    
    console.log('menuLink.style.pointerEvents',menuLink.style.pointerEvents);
    console.log('menuIcon.style.pointerEvents',menuIcon.style.pointerEvents);
})
// originPointerEvent();







// PRODUCT點選後
dropdownLink.addEventListener('click',(event)=>{
    // event.stopPropagation();
    dropdownLink.classList.toggle('dropdown_link_bg')
    dropdown.classList.toggle('dropdown_active')

})

function headerChange(){
    let navbar = document.querySelector('.container');
    // let logo = document.querySelector('.logo')
    if (window.scrollY > 0 ) {
        navbar.style.position = "fixed";  // 導航欄固定在頂部
        navbar.style.height = "70px";  // 導航欄的高度變小
        navbar.style.backgroundColor = "#183165";    

    } else {
        navbar.style.backgroundColor = "none";  // 導航欄的背景白色
        navbar.style.backgroundColor = "transparent";  // 導航欄的背景白色     
        navbar.style.position = "static";  // 導航欄的定位恢復原狀
    }
}
window.onscroll = function() {
    // let navbar = document.querySelector('.container');
    // // let logo = document.querySelector('.logo')
    // if (window.scrollY > 0 ) {
    //     navbar.style.position = "fixed";  // 導航欄固定在頂部
    //     navbar.style.height = "70px";  // 導航欄的高度變小
    //     navbar.style.backgroundColor = "#183165";    

    // } else {
    //     navbar.style.backgroundColor = "none";  // 導航欄的背景白色
    //     navbar.style.backgroundColor = "transparent";  // 導航欄的背景白色     
    //     navbar.style.position = "static";  // 導航欄的定位恢復原狀
    // }
}
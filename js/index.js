// let carouselArr = ["./img/banner/banner01.webp","./img/banner/banner02.webp","./img/banner/banner03.webp"]
let carouselItems = document.querySelectorAll(".carousel_item")
let allNavItem = document.querySelectorAll('.cs_nav_item')

// 默認顯示圖片索引
let index = 0;
// 默認顯示nav顏色
allNavItem[index].style.backgroundColor = '#fff';
allNavItem[index].style.border = "0.5px solid #183165"
// 默認顯示圖片
carouselItems[index].classList.add('active')

// 設置輪播圖nav
for(let i = 0 ; i < allNavItem.length ; i++){
    // 獲取每個item的索引賦值到index上
    allNavItem[i].index = i
    allNavItem[i].onclick = function(){
        index = this.index
        setNav();
        showCSImage();
    clearTimeout(autoCarouselTimeout);
    autoCarouselTimeout = setTimeout(autoCarousel, 3000);
        console.log('index被點選')
    }
}
//設置輪播圖顯示的方法
function showCSImage(){
    for(let i = 0 ; i< carouselItems.length ; i++){
        carouselItems[i].classList.remove('active')
    }
    carouselItems[index].classList.add('active')
}

//設置輪播圖nav的顏色方法
function setNav(){
    for(let i = 0 ;i < allNavItem.length ;i++){
        allNavItem[i].style.backgroundColor = '';
    }
    allNavItem[index].style.backgroundColor = "#fff";
    allNavItem[index].style.border = "0.5px solid #183165"
}
//設置自動播放輪播圖方法
// 為計時器命名，以便關閉
let autoCarouselTimeout;
function autoCarousel(){
    //關閉之前的計時器
    clearTimeout(autoCarouselTimeout);
    index++
    if(index >= carouselItems.length ){
        index = 0
    }
    setNav();
    showCSImage();
    autoCarouselTimeout = setTimeout(autoCarousel,3000)
}
// showCSImage();
// setNav();
setTimeout(autoCarousel,3000)
 
// 新品左右移動
let prevBtn = document.querySelector('.btn-prev')
let nextBtn = document.querySelector('.btn-next')
// let slideActive = document.querySelector('.slide_active')
let slides = document.querySelectorAll('.home_product_slide')
let productWrapper = document.querySelector('.home_product_wrapper')


let currentIndex = 3
prevBtn.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex--;
        // 圖片寬(包括margin/總寬度)
        currentTranslateX += 22.5;
        slideFocus(currentIndex);
        updateTranslate();
        console.log('currentTranslateX = ',currentTranslateX)
        console.log('currentIndex = ',currentIndex)
    }
})
nextBtn.addEventListener('click',()=>{
    if(currentIndex < slides.length -1){
        currentIndex++;
        currentTranslateX -= 22.5;
        slideFocus(currentIndex);
        updateTranslate();
        console.log('currentTranslateX = ',currentTranslateX)
        console.log('currentIndex = ',currentIndex)
    }
})


let currentTranslateX = 0;    
function updateTranslate(){
    let newTranslate = `translateX(${currentTranslateX}%)`;
    productWrapper.style.transform = newTranslate
}

function slideFocus(index){
    slides.forEach((slide,i) => {
        slide.classList.remove('slide_active')
        if(i === index){
            slide.classList.add('slide_active')
        }
    });
}
slideFocus(currentIndex);


// 五秒後出現廣告圖
setTimeout(() => {
    // let advertiseImg = document.createElement('div')
    let advertiseImg = document.querySelector('.advertise')
    let cancelBtn = document.querySelector('.cancel_btn')
    let blackOverlay = document.querySelector('.black_overlay')
    blackOverlay.style.display = "block"
    advertiseImg.style.display = "block"
    // blackOverlay.style.display = "block"
    cancelBtn.addEventListener('click',()=>{
        blackOverlay.style.display = "none"
        advertiseImg.style.display = "none"
    })
}, 5000);



let designBanner = document.querySelector('.design_banner')
let designlist = document.querySelector('.designlist')
let article = document.querySelectorAll('.article')
console.log('article',article)
window.onscroll = function() {
    headerChange()
    // console.log(typeof window.scrollY)
    // let navbar = document.querySelector('.container');
    if (window.scrollY  >= 1500 ) {
        designBanner.style.opacity = 1; 
        console.log('scrollY',scrollY)
    } 
    if(window.scrollY  >= 2200 ) {
       designlist.style.opacity = 1; 
       designlist.style.transform = `translateY(${0}px)`;  
       console.log('scrollY',scrollY)

    }
    if(window.scrollY  >= 3500 ){
        article.forEach((item)=>{
            item.style.opacity = 1; 

        })

        article[0].style.animation = `text-ltr 1.5s ease-in`
        article[2].style.animation = `text-ltr 1.5s ease-in`
        article[1].style.animation = `text-rtl 1.5s ease-in`
        article[3].style.animation = `text-rtl 1.5s ease-in`
    }
}
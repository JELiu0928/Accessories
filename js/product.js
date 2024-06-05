import { necklaceItems ,earringItems } from "./productItem.js";
window.onload = ()=>{
    displaytype(earringItems)
    selectRegion(document.querySelector('.earringBtn'))
    console.log(earringItems)
}
document.querySelector('.earringBtn').onclick = ()=>{
    displaytype(earringItems)
    selectRegion(document.querySelector('.earringBtn'))
    console.log(earringItems)
}
document.querySelector('.necklaceBtn').onclick = ()=>{
    displaytype(necklaceItems)
    selectRegion(document.querySelector('.necklaceBtn'))
    console.log(necklaceItems)
    console.log('內容',document.querySelector('.necklaceBtn').innerText)
}
let product = document.querySelector('.product')
let productPage = document.querySelector('.product_page')
let breadcrumb = document.querySelector('.breadcrumb')
function displaytype(type){
    product.innerHTML = ""
    type.forEach(Item => { 
        let productItem = document.createElement('div')
        productItem.classList.add('product_item')
        console.log(productItem)
        productItem.innerHTML = `
            <a href="#">
                <div class="img_wrapper">
                    <img src="${Item.imgSrc}" alt="" class="pd_img" />
                    <div class="addcart_btn">加入購物車</div>
                </div>
                <p>${Item.name}</p>
            </a>
            <p>${Item.price}</p>
        `
        
        // product.insertBefore(productItem,productPage)
        product.appendChild(productItem)
    });
    product.appendChild(productPage)

}

function selectRegion(btn){
    breadcrumb.innerHTML = ""

    document.querySelectorAll('.sidebar a').forEach((btn)=>{
        btn.classList.remove('sidebar_select')
    })
   
    btn.classList.add('sidebar_select')
    breadcrumb.innerHTML = `
        <li><a href="./index.html">首頁</a></li>
        <li>${btn.innerText}</li>
    `
    console.log('內容',btn.innerText)
}
